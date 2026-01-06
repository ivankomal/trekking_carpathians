import requests
import pandas as pd

# Overpass API endpoint
OVERPASS_URL = "https://overpass-api.de/api/interpreter"

BBOX = (47.0, 22.0, 50.0, 25.0)  # (min_lat, min_lon, max_lat, max_lon)

# Overpass QL запит
OVERPASS_QUERY = f"""
[out:json][timeout:50];
(
  node["natural"="peak"]({BBOX[0]},{BBOX[1]},{BBOX[2]},{BBOX[3]});
);
out body;
"""

def fetch_peaks():
    print("🌍 Запит до Overpass API…")
    response = requests.post(OVERPASS_URL, data={"data": OVERPASS_QUERY})
    response.raise_for_status()
    data = response.json()
    print(f"✅ Отримано {len(data['elements'])} вершин")
    return data['elements']

def parse_peaks(elements):
    rows = []
    for el in elements:
        name = el.get("tags", {}).get("name")
        elev = el.get("tags", {}).get("ele")
        lat = el.get("lat")
        lon = el.get("lon")

        if name and lat and lon:
            rows.append({
                "Name": name,
                "Latitude": lat,
                "Longitude": lon,
                "Elevation_m": elev
            })
    return rows

def main():
    elements = fetch_peaks()
    peaks = parse_peaks(elements)

    df = pd.DataFrame(peaks)
    df.to_csv("ukraine_carpathians_peaks.csv", index=False)
    print("🎉 CSV готовий: ukraine_carpathians_peaks.csv")
    print(f"Всього вершин: {len(df)}")

if __name__ == "__main__":
    main()

