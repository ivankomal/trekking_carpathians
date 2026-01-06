// Global state
let allPeaks = [];
let markers = new L.MarkerClusterGroup({
    maxClusterRadius: 50,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    disableClusteringAtZoom: 11, // Disable clustering at zoom level 11 and above to show all labels
    iconCreateFunction: function(cluster) {
        const count = cluster.getChildCount();
        let size = 'small';
        if (count > 20) size = 'large';
        else if (count > 10) size = 'medium';

        return new L.DivIcon({
            html: `<div><span>${count}</span></div>`,
            className: 'marker-cluster marker-cluster-' + size,
            iconSize: new L.Point(40, 40)
        });
    }
});
let currentFilter = 'all';
let searchTerm = '';
let selectedPeak = null;

// Initialize map
const map = L.map('map').setView([48.5, 24.0], 8);

// Map layers
const topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>',
    maxZoom: 17
});

const esriTopo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
    maxZoom: 18
});

const outdoorMap = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=', {
    attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 22
});

// Add default layer
esriTopo.addTo(map);

// Layer control
const baseLayers = {
    "Топографічна (Esri)": esriTopo,
    "OpenTopoMap": topoMap
};

L.control.layers(baseLayers).addTo(map);

// Load visited peaks from localStorage
function getVisitedPeaks() {
    const visited = localStorage.getItem('visitedPeaks');
    return visited ? JSON.parse(visited) : [];
}

function saveVisitedPeaks(visited) {
    localStorage.setItem('visitedPeaks', JSON.stringify(visited));
}

function isPeakVisited(peakName) {
    const visited = getVisitedPeaks();
    return visited.includes(peakName);
}

function togglePeakVisited(peakName) {
    let visited = getVisitedPeaks();
    const index = visited.indexOf(peakName);

    if (index > -1) {
        visited.splice(index, 1);
    } else {
        visited.push(peakName);
    }

    saveVisitedPeaks(visited);
    updateStats();
    renderPeakList();
    updateMarkers();

    // Update details panel if this peak is selected
    if (selectedPeak && selectedPeak.Name === peakName) {
        showPeakDetails(selectedPeak);
    }

    // Update photo gallery visibility
    renderPhotoGallery();
}

// Create custom marker icon with color coding
function createMarkerIcon(isVisited, range, type) {
    const color = isVisited ? '#666666' : (RANGE_COLORS[range] || '#95a5a6');
    const glowColor = isVisited ? 'rgba(102,102,102,0.4)' : `${color}99`;

    // Different shape for polonyny (square) vs peaks (circle)
    const isPolonyna = type === 'Полонина';
    const borderRadius = isPolonyna ? '4px' : '50%';

    return L.divIcon({
        html: `<div style="background-color: ${color}; width: 22px; height: 22px; border-radius: ${borderRadius}; border: 3px solid white; box-shadow: 0 0 10px ${glowColor}, 0 2px 6px rgba(0,0,0,0.3);"></div>`,
        className: 'custom-marker',
        iconSize: [22, 22],
        iconAnchor: [11, 11]
    });
}

// Show peak details in sidebar
function showPeakDetails(peak) {
    selectedPeak = peak;
    const panel = document.getElementById('peakDetailsPanel');
    const isVisited = isPeakVisited(peak.Name);
    const isPolonyna = peak.Type === 'Полонина';
    const icon = isPolonyna ? '🌿' : '⛰️';

    document.getElementById('detailPeakName').textContent = `${icon} ${peak.Name}`;
    document.getElementById('detailElevation').textContent = peak.Elevation_m;
    document.getElementById('detailRange').textContent = peak.Range;
    document.getElementById('detailCoords').textContent =
        `${parseFloat(peak.Latitude).toFixed(4)}, ${parseFloat(peak.Longitude).toFixed(4)}`;
    document.getElementById('detailRangeInfo').textContent = RANGE_INFO[peak.Range] || '';

    const toggleBtn = document.getElementById('detailToggleBtn');
    if (isVisited) {
        toggleBtn.textContent = '❌ Скасувати підкорення';
        toggleBtn.classList.add('visited');
    } else {
        toggleBtn.textContent = `✓ Позначити як підкорен${isPolonyna ? 'у' : 'у'}`;
        toggleBtn.classList.remove('visited');
    }

    panel.style.display = 'block';

    // Render photo gallery
    renderPhotoGallery();
}

// Close peak details panel
function closePeakDetails() {
    document.getElementById('peakDetailsPanel').style.display = 'none';
    selectedPeak = null;
}

// Toggle peak from details panel
function togglePeakFromDetails() {
    if (selectedPeak) {
        togglePeakVisited(selectedPeak.Name);
    }
}

// Create popup content
function createPopupContent(peak) {
    const isVisited = isPeakVisited(peak.Name);
    const buttonText = isVisited ? '❌ Скасувати' : '✓ Підкорено';
    const buttonClass = isVisited ? 'popup-btn-secondary' : 'popup-btn-primary';
    const rangeColor = RANGE_COLORS[peak.Range] || '#95a5a6';
    const isPolonyna = peak.Type === 'Полонина';
    const typeIcon = isPolonyna ? 'fa-leaf' : 'fa-mountain';
    const typeLabel = isPolonyna ? 'Полонина' : 'Вершина';

    return `
        <div class="custom-popup">
            <div class="popup-header">${peak.Name}</div>
            <div class="popup-details">
                <div class="popup-detail">
                    <i class="fas ${typeIcon}"></i>
                    <span><strong>Тип:</strong> ${typeLabel}</span>
                </div>
                <div class="popup-detail">
                    <i class="fas fa-mountain"></i>
                    <span><strong>Висота:</strong> ${peak.Elevation_m} м</span>
                </div>
                <div class="popup-detail">
                    <i class="fas fa-layer-group"></i>
                    <span><strong>Масив:</strong> <span style="color: ${rangeColor}; font-weight: 600;">${peak.Range}</span></span>
                </div>
                <div class="popup-detail">
                    <i class="fas fa-map-marker-alt"></i>
                    <span><strong>Координати:</strong> ${parseFloat(peak.Latitude).toFixed(4)}, ${parseFloat(peak.Longitude).toFixed(4)}</span>
                </div>
            </div>
            <div class="popup-actions">
                <button class="popup-btn ${buttonClass}" onclick="togglePeakVisited('${peak.Name.replace(/'/g, "\\'")}')">
                    ${buttonText}
                </button>
            </div>
        </div>
    `;
}

// Zoom to peak
function zoomToPeak(lat, lng) {
    map.setView([lat, lng], 14);
}

// Update markers on map
function updateMarkers() {
    markers.clearLayers();

    allPeaks.forEach(peak => {
        if (!peak.Latitude || !peak.Longitude) return;

        const isVisited = isPeakVisited(peak.Name);
        const rangeColor = RANGE_COLORS[peak.Range] || '#95a5a6';
        const isPolonyna = peak.Type === 'Полонина';

        const marker = L.marker([peak.Latitude, peak.Longitude], {
            icon: createMarkerIcon(isVisited, peak.Range, peak.Type)
        });

        // Add permanent tooltip with peak/polonyna name and elevation
        const icon = isPolonyna ? '🌿' : '⛰️';
        const labelContent = `
            <span class="peak-label-name">${icon} ${peak.Name}</span>
            <span class="peak-label-elevation">${peak.Elevation_m}м</span>
        `;

        marker.bindTooltip(labelContent, {
            permanent: true,
            direction: 'top',
            className: `peak-label ${isVisited ? 'visited' : ''}`,
            offset: [0, -15],
            opacity: 1
        }).openTooltip();

        // Style tooltip border with range color
        marker.on('add', function() {
            const tooltip = this.getTooltip();
            if (tooltip && tooltip.getElement()) {
                tooltip.getElement().style.borderColor = rangeColor;
                tooltip.getElement().style.color = rangeColor;
            }
        });

        marker.bindPopup(createPopupContent(peak), {
            maxWidth: 300,
            className: 'custom-leaflet-popup'
        });

        // Store peak data with marker
        marker.peakData = peak;

        // Show details on marker click
        marker.on('click', function() {
            showPeakDetails(peak);
        });

        markers.addLayer(marker);
    });

    map.addLayer(markers);
}

// Render peak list in sidebar
function renderPeakList() {
    const peakList = document.getElementById('peakList');
    const visitedPeaks = getVisitedPeaks();

    // Filter peaks
    let filteredPeaks = allPeaks.filter(peak => {
        // Filter by type
        if (currentFilter === 'peaks' && peak.Type !== 'Вершина') return false;
        if (currentFilter === 'polonyny' && peak.Type !== 'Полонина') return false;

        // Filter by visited status
        const isVisited = visitedPeaks.includes(peak.Name);
        if (currentFilter === 'visited' && !isVisited) return false;
        if (currentFilter === 'unvisited' && isVisited) return false;

        // Filter by search term
        if (searchTerm && !peak.Name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
        }

        return true;
    });

    // Sort by elevation (highest first)
    filteredPeaks.sort((a, b) => {
        const elevA = parseFloat(a.Elevation_m) || 0;
        const elevB = parseFloat(b.Elevation_m) || 0;
        return elevB - elevA;
    });

    // Render
    if (filteredPeaks.length === 0) {
        peakList.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p>Не знайдено вершин</p>
            </div>
        `;
        return;
    }

    peakList.innerHTML = filteredPeaks.map(peak => {
        const isVisited = visitedPeaks.includes(peak.Name);
        const visitedClass = isVisited ? 'visited' : '';
        const rangeColor = RANGE_COLORS[peak.Range] || '#95a5a6';
        const isPolonyna = peak.Type === 'Полонина';
        const icon = isPolonyna ? '🌿' : '⛰️';

        return `
            <div class="peak-item ${visitedClass}" onclick="handlePeakClick('${peak.Name.replace(/'/g, "\\'")}', ${peak.Latitude}, ${peak.Longitude})">
                <div class="peak-name">${icon} ${peak.Name}</div>
                <div class="peak-details">
                    <div class="peak-detail-item">
                        <i class="fas fa-mountain"></i>
                        <span>${peak.Elevation_m} м</span>
                    </div>
                    <div class="peak-detail-item">
                        <i class="fas fa-layer-group" style="color: ${rangeColor}"></i>
                        <span style="color: ${rangeColor}">${peak.Range}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Handle peak item click
function handlePeakClick(peakName, lat, lng) {
    map.setView([lat, lng], 13);

    // Find peak and show details
    const peak = allPeaks.find(p => p.Name === peakName);
    if (peak) {
        showPeakDetails(peak);
    }

    // Find and open the marker popup
    markers.eachLayer(layer => {
        if (layer.peakData && layer.peakData.Name === peakName) {
            layer.openPopup();
        }
    });
}

// Update statistics
function updateStats() {
    const visitedPeaks = getVisitedPeaks();
    const total = allPeaks.length;
    const visited = visitedPeaks.length;
    const percent = total > 0 ? Math.round((visited / total) * 100) : 0;

    document.getElementById('totalPeaks').textContent = total;
    document.getElementById('visitedPeaks').textContent = visited;
    document.getElementById('progressPercent').textContent = percent + '%';
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    searchTerm = e.target.value;
    renderPeakList();
});

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderPeakList();
    });
});

// Mobile sidebar toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
}

// Load data from embedded PEAKS_DATA
function initializePeaks() {
    allPeaks = PEAKS_DATA.filter(peak =>
        peak.Name && peak.Latitude && peak.Longitude && peak.Elevation_m
    );

    updateStats();
    renderPeakList();
    updateMarkers();

    // Fit map to show all markers
    if (markers.getLayers().length > 0) {
        map.fitBounds(markers.getBounds(), { padding: [50, 50] });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePeaks);
} else {
    initializePeaks();
}

// ============= PHOTO MANAGEMENT =============

// IndexedDB setup (більший ліміт пам'яті ~50MB+ замість 5-10MB localStorage)
let photoDB;

function initPhotoDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('CarpathianPeaksPhotos', 1);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            photoDB = request.result;
            resolve(photoDB);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('photos')) {
                const objectStore = db.createObjectStore('photos', { keyPath: 'peakName' });
                objectStore.createIndex('timestamp', 'timestamp', { unique: false });
            }
        };
    });
}

// Get photos for a peak from IndexedDB
async function getPeakPhotos(peakName) {
    try {
        if (!photoDB) await initPhotoDB();

        return new Promise((resolve, reject) => {
            const transaction = photoDB.transaction(['photos'], 'readonly');
            const objectStore = transaction.objectStore('photos');
            const request = objectStore.get(peakName);

            request.onsuccess = () => {
                if (request.result && request.result.photos) {
                    resolve(request.result.photos);
                } else {
                    // Try to migrate from localStorage
                    const oldPhotos = localStorage.getItem(`photos_${peakName}`);
                    if (oldPhotos) {
                        try {
                            const parsed = JSON.parse(oldPhotos);
                            resolve(parsed);
                        } catch (e) {
                            resolve([]);
                        }
                    } else {
                        resolve([]);
                    }
                }
            };

            request.onerror = () => {
                console.error('Error reading photos:', request.error);
                resolve([]);
            };
        });
    } catch (error) {
        console.error('Database error:', error);
        return [];
    }
}

// Save photos for a peak to IndexedDB
async function savePeakPhotos(peakName, photos) {
    try {
        if (!photoDB) await initPhotoDB();

        return new Promise((resolve, reject) => {
            const transaction = photoDB.transaction(['photos'], 'readwrite');
            const objectStore = transaction.objectStore('photos');

            const data = {
                peakName: peakName,
                photos: photos,
                timestamp: Date.now()
            };

            const request = objectStore.put(data);

            request.onsuccess = () => {
                // Clean up old localStorage data
                localStorage.removeItem(`photos_${peakName}`);
                resolve(true);
            };

            request.onerror = () => {
                console.error('Error saving photos:', request.error);
                alert('⚠️ Помилка збереження фото. Спробуйте видалити старі фото.');
                resolve(false);
            };
        });
    } catch (error) {
        console.error('Database error:', error);
        return false;
    }
}

// Delete all photos for a peak
async function deleteAllPeakPhotos(peakName) {
    try {
        if (!photoDB) await initPhotoDB();

        return new Promise((resolve) => {
            const transaction = photoDB.transaction(['photos'], 'readwrite');
            const objectStore = transaction.objectStore('photos');
            const request = objectStore.delete(peakName);

            request.onsuccess = () => resolve(true);
            request.onerror = () => resolve(false);
        });
    } catch (error) {
        console.error('Database error:', error);
        return false;
    }
}

// Initialize database on load
initPhotoDB().catch(err => console.error('Failed to init photo database:', err));

// Trigger photo upload
function triggerPhotoUpload() {
    document.getElementById('photoInput').click();
}

// Compress and resize image
function compressImage(file, maxWidth = 1600, quality = 0.85) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();

            img.onload = function() {
                try {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    // Resize if image is too large
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    const ctx = canvas.getContext('2d');

                    // Better image quality
                    ctx.imageSmoothingEnabled = true;
                    ctx.imageSmoothingQuality = 'high';

                    ctx.drawImage(img, 0, 0, width, height);

                    // Convert to JPEG with compression
                    const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
                    resolve(compressedDataUrl);
                } catch (error) {
                    reject(error);
                }
            };

            img.onerror = function() {
                reject(new Error('Не вдалося завантажити зображення'));
            };

            img.src = e.target.result;
        };

        reader.onerror = function() {
            reject(new Error('Не вдалося прочитати файл'));
        };

        reader.readAsDataURL(file);
    });
}

// Handle photo upload
async function handlePhotoUpload(event) {
    if (!selectedPeak) return;

    const files = event.target.files;
    if (!files || files.length === 0) return;

    const photoGrid = document.getElementById('photoGrid');
    const originalContent = photoGrid.innerHTML;

    // Show loading
    photoGrid.innerHTML = '<div class="no-photos">⏳ Обробка фото...</div>';

    const photos = await getPeakPhotos(selectedPeak.Name);
    let successCount = 0;
    let errorCount = 0;

    // Process each file
    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Check if it's an image file
        const isImage = file.type.startsWith('image/');
        const isHEIC = file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif');

        if (!isImage && !isHEIC) {
            console.warn('Skipped non-image file:', file.name);
            errorCount++;
            continue;
        }

        // Warn about HEIC (might not work in all browsers)
        if (isHEIC) {
            console.warn('HEIC format detected, may not work in all browsers:', file.name);
        }

        try {
            // Compress image before storing
            const compressedData = await compressImage(file, 1600, 0.85);

            // Check if compressed size is too large (> 800KB in base64)
            let finalData = compressedData;
            if (compressedData.length > 800 * 1024 * 1.33) {
                // Try with more compression
                finalData = await compressImage(file, 1200, 0.7);
                console.log('Applied extra compression for', file.name);
            }

            const photoData = {
                id: Date.now() + i + Math.random(),
                data: finalData,
                timestamp: Date.now(),
                name: file.name
            };

            photos.push(photoData);
            successCount++;

            // Small delay to ensure unique IDs
            await new Promise(resolve => setTimeout(resolve, 10));

        } catch (error) {
            console.error('Error processing photo:', file.name, error);
            errorCount++;
        }
    }

    // Save and render
    if (successCount > 0) {
        await savePeakPhotos(selectedPeak.Name, photos);
        await renderPhotoGallery();

        // Show success message
        if (errorCount === 0) {
            console.log(`✅ Завантажено ${successCount} фото`);
        } else {
            alert(`Завантажено ${successCount} фото. Не вдалося обробити: ${errorCount}`);
        }
    } else {
        photoGrid.innerHTML = originalContent;
        alert('❌ Не вдалося обробити жодне фото.\n\nПоради:\n- Переконайтесь що це файли зображень (JPG, PNG)\n- Спробуйте менше фото одночасно\n- Перевірте консоль браузера для деталей');
    }

    // Clear input
    event.target.value = '';
}

// Render photo gallery
async function renderPhotoGallery() {
    if (!selectedPeak) return;

    const photoGallery = document.getElementById('photoGallery');
    const photoGrid = document.getElementById('photoGrid');
    const photoCount = document.getElementById('photoCount');
    const isVisited = isPeakVisited(selectedPeak.Name);

    // Only show gallery if peak is visited
    if (!isVisited) {
        photoGallery.style.display = 'none';
        return;
    }

    photoGallery.style.display = 'block';

    // Show loading while fetching photos
    photoGrid.innerHTML = '<div class="no-photos">⏳ Завантаження...</div>';

    const photos = await getPeakPhotos(selectedPeak.Name);

    // Update photo count
    if (photoCount) {
        photoCount.textContent = photos.length > 0 ? `(${photos.length})` : '';
    }

    if (photos.length === 0) {
        photoGrid.innerHTML = '<div class="no-photos">📸 Додайте фото з вашого підкорення</div>';
        return;
    }

    photoGrid.innerHTML = photos.map(photo => `
        <div class="photo-item">
            <img src="${photo.data}" alt="Peak photo" onclick="openLightboxById(${photo.id})">
            <button class="photo-delete" onclick="deletePhoto('${selectedPeak.Name.replace(/'/g, "\\'")}', ${photo.id}); event.stopPropagation();">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// Delete photo
async function deletePhoto(peakName, photoId) {
    let photos = await getPeakPhotos(peakName);
    photos = photos.filter(p => p.id !== photoId);
    await savePeakPhotos(peakName, photos);
    await renderPhotoGallery();
}

// Open lightbox by photo ID
async function openLightboxById(photoId) {
    if (!selectedPeak) return;

    const photos = await getPeakPhotos(selectedPeak.Name);
    const photo = photos.find(p => p.id === photoId);

    if (photo) {
        openLightbox(photo.data);
    }
}

// Open lightbox
function openLightbox(photoData) {
    const lightbox = document.getElementById('photoLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    lightboxImage.src = photoData;
    lightbox.classList.add('active');
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('photoLightbox');
    lightbox.classList.remove('active');
}

// Export functions to window for onclick handlers
window.togglePeakVisited = togglePeakVisited;
window.zoomToPeak = zoomToPeak;
window.handlePeakClick = handlePeakClick;
window.toggleSidebar = toggleSidebar;
window.closePeakDetails = closePeakDetails;
window.togglePeakFromDetails = togglePeakFromDetails;
window.triggerPhotoUpload = triggerPhotoUpload;
window.handlePhotoUpload = handlePhotoUpload;
window.deletePhoto = deletePhoto;
window.openLightboxById = openLightboxById;
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
