// Ukrainian Carpathian Peaks & Polonyny Data - Top 100 Peaks + 22 Polonyny
const PEAKS_DATA = [
  {
    "Name": "Говерла",
    "Latitude": "48.1602098",
    "Longitude": "24.4999403",
    "Elevation_m": "2061",
    "Range": "Чорногора",
    "popularity_score": 2361.0,
    "Type": "Вершина"
  },
  {
    "Name": "Бребенескул",
    "Latitude": "48.0976087",
    "Longitude": "24.5800005",
    "Elevation_m": "2038",
    "Range": "Чорногора",
    "popularity_score": 2338.0,
    "Type": "Вершина"
  },
  {
    "Name": "Петрос",
    "Latitude": "48.1720069",
    "Longitude": "24.4214656",
    "Elevation_m": "2020",
    "Range": "Чорногора",
    "popularity_score": 2320.0,
    "Type": "Вершина"
  },
  {
    "Name": "Гутин Томнатик",
    "Latitude": "48.0994397",
    "Longitude": "24.5566509",
    "Elevation_m": "2016",
    "Range": "Чорногора",
    "popularity_score": 2316.0,
    "Type": "Вершина"
  },
  {
    "Name": "Піп Іван Чорногірський",
    "Latitude": "48.0469688",
    "Longitude": "24.6275136",
    "Elevation_m": "2002",
    "Range": "Чорногора",
    "popularity_score": 2302.0,
    "Type": "Вершина"
  },
  {
    "Name": "Ребра",
    "Latitude": "48.1111947",
    "Longitude": "24.5585636",
    "Elevation_m": "2001",
    "Range": "Чорногора",
    "popularity_score": 2301.0,
    "Type": "Вершина"
  },
  {
    "Name": "Менчул",
    "Latitude": "48.0906494",
    "Longitude": "24.5955542",
    "Elevation_m": "1998",
    "Range": "Чорногора",
    "popularity_score": 2298.0,
    "Type": "Вершина"
  },
  {
    "Name": "Туркул",
    "Latitude": "48.1234886",
    "Longitude": "24.5305076",
    "Elevation_m": "1933",
    "Range": "Чорногора",
    "popularity_score": 2233.0,
    "Type": "Вершина"
  },
  {
    "Name": "Брескул",
    "Latitude": "48.1503339",
    "Longitude": "24.5105442",
    "Elevation_m": "1911",
    "Range": "Чорногора",
    "popularity_score": 2211.0,
    "Type": "Вершина"
  },
  {
    "Name": "Смотрич",
    "Latitude": "48.0692062",
    "Longitude": "24.6440549",
    "Elevation_m": "1898",
    "Range": "Чорногора",
    "popularity_score": 2198.0,
    "Type": "Вершина"
  },
  {
    "Name": "Дземброня",
    "Latitude": "48.0762076",
    "Longitude": "24.6054002",
    "Elevation_m": "1877",
    "Range": "Чорногора",
    "popularity_score": 2177.0,
    "Type": "Вершина"
  },
  {
    "Name": "Вухатий Камінь",
    "Latitude": "48.0733887",
    "Longitude": "24.6348292",
    "Elevation_m": "1864",
    "Range": "Чорногора",
    "popularity_score": 2164.0,
    "Type": "Вершина"
  },
  {
    "Name": "Шпиці",
    "Latitude": "48.125624",
    "Longitude": "24.567254",
    "Elevation_m": "1863",
    "Range": "Чорногора",
    "popularity_score": 2163.0,
    "Type": "Вершина"
  },
  {
    "Name": "Данциж",
    "Latitude": "48.1352947",
    "Longitude": "24.5314687",
    "Elevation_m": "1855",
    "Range": "Чорногора",
    "popularity_score": 2155.0,
    "Type": "Вершина"
  },
  {
    "Name": "Петросул",
    "Latitude": "48.1805218",
    "Longitude": "24.4180355",
    "Elevation_m": "1848",
    "Range": "Чорногора",
    "popularity_score": 2148.0,
    "Type": "Вершина"
  },
  {
    "Name": "Полонина Лемська",
    "Latitude": "48.0818375",
    "Longitude": "24.5726005",
    "Elevation_m": "1825",
    "Range": "Чорногора",
    "popularity_score": 2125.0,
    "Type": "Вершина"
  },
  {
    "Name": "Пожижевська",
    "Latitude": "48.1443145",
    "Longitude": "24.523551",
    "Elevation_m": "1822",
    "Range": "Чорногора",
    "popularity_score": 2122.0,
    "Type": "Вершина"
  },
  {
    "Name": "Гомул",
    "Latitude": "48.1359414",
    "Longitude": "24.5625934",
    "Elevation_m": "1787",
    "Range": "Чорногора",
    "popularity_score": 2087.0,
    "Type": "Вершина"
  },
  {
    "Name": "Близниця Велика",
    "Latitude": "48.2225062",
    "Longitude": "24.2312555",
    "Elevation_m": "1881",
    "Range": "Свидовець",
    "popularity_score": 2081.0,
    "Type": "Вершина"
  },
  {
    "Name": "Шурин",
    "Latitude": "48.0312659",
    "Longitude": "24.648195",
    "Elevation_m": "1773",
    "Range": "Чорногора",
    "popularity_score": 2073.0,
    "Type": "Вершина"
  },
  {
    "Name": "Близниця",
    "Latitude": "48.2163124",
    "Longitude": "24.2377812",
    "Elevation_m": "1872",
    "Range": "Свидовець",
    "popularity_score": 2072.0,
    "Type": "Вершина"
  },
  {
    "Name": "Мала Говерла",
    "Latitude": "48.1682001",
    "Longitude": "24.506023",
    "Elevation_m": "1762",
    "Range": "Чорногора",
    "popularity_score": 2062.0,
    "Type": "Вершина"
  },
  {
    "Name": "Стайки",
    "Latitude": "48.0542489",
    "Longitude": "24.678972",
    "Elevation_m": "1743",
    "Range": "Чорногора",
    "popularity_score": 2043.0,
    "Type": "Вершина"
  },
  {
    "Name": "Васкул",
    "Latitude": "48.0367735",
    "Longitude": "24.6117615",
    "Elevation_m": "1730",
    "Range": "Чорногора",
    "popularity_score": 2030.0,
    "Type": "Вершина"
  },
  {
    "Name": "Микулєска",
    "Latitude": "48.0611527",
    "Longitude": "24.6676027",
    "Elevation_m": "1728",
    "Range": "Чорногора",
    "popularity_score": 2028.0,
    "Type": "Вершина"
  },
  {
    "Name": "Жандарм Другий",
    "Latitude": "48.2279056",
    "Longitude": "24.2289764",
    "Elevation_m": "1785",
    "Range": "Свидовець",
    "popularity_score": 1985.0,
    "Type": "Вершина"
  },
  {
    "Name": "Великий Котел",
    "Latitude": "48.2710587",
    "Longitude": "24.2031152",
    "Elevation_m": "1770",
    "Range": "Свидовець",
    "popularity_score": 1970.0,
    "Type": "Вершина"
  },
  {
    "Name": "Жандарм",
    "Latitude": "48.2320941",
    "Longitude": "24.2304625",
    "Elevation_m": "1763",
    "Range": "Свидовець",
    "popularity_score": 1963.0,
    "Type": "Вершина"
  },
  {
    "Name": "Геришаска",
    "Latitude": "48.2737882",
    "Longitude": "24.1621376",
    "Elevation_m": "1762",
    "Range": "Свидовець",
    "popularity_score": 1962.0,
    "Type": "Вершина"
  },
  {
    "Name": "Догяска",
    "Latitude": "48.2675217",
    "Longitude": "24.1618444",
    "Elevation_m": "1761",
    "Range": "Свидовець",
    "popularity_score": 1961.0,
    "Type": "Вершина"
  },
  {
    "Name": "Довбушанка",
    "Latitude": "48.4250168",
    "Longitude": "24.3744701",
    "Elevation_m": "1754",
    "Range": "Горгани",
    "popularity_score": 1954.0,
    "Type": "Вершина"
  },
  {
    "Name": "Степанець",
    "Latitude": "48.0966866",
    "Longitude": "24.6229337",
    "Elevation_m": "1650",
    "Range": "Чорногора",
    "popularity_score": 1950.0,
    "Type": "Вершина"
  },
  {
    "Name": "Pop Ivan / Піп Іван Мармароський",
    "Latitude": "47.9238143",
    "Longitude": "24.3279193",
    "Elevation_m": "1938",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1938.0,
    "Type": "Вершина"
  },
  {
    "Name": "Ведмежик",
    "Latitude": "48.4324861",
    "Longitude": "24.3588375",
    "Elevation_m": "1736",
    "Range": "Горгани",
    "popularity_score": 1936.0,
    "Type": "Вершина"
  },
  {
    "Name": "Ворожеска",
    "Latitude": "48.2751171",
    "Longitude": "24.1873365",
    "Elevation_m": "1731",
    "Range": "Свидовець",
    "popularity_score": 1931.0,
    "Type": "Вершина"
  },
  {
    "Name": "Шешул",
    "Latitude": "48.1502492",
    "Longitude": "24.3671177",
    "Elevation_m": "1728",
    "Range": "Свидовець",
    "popularity_score": 1928.0,
    "Type": "Вершина"
  },
  {
    "Name": "Павлик",
    "Latitude": "48.1600854",
    "Longitude": "24.3765867",
    "Elevation_m": "1722",
    "Range": "Свидовець",
    "popularity_score": 1922.0,
    "Type": "Вершина"
  },
  {
    "Name": "Чорна Клива",
    "Latitude": "48.3501656",
    "Longitude": "24.2564699",
    "Elevation_m": "1719",
    "Range": "Горгани",
    "popularity_score": 1919.0,
    "Type": "Вершина"
  },
  {
    "Name": "Гнатася",
    "Latitude": "47.7455365",
    "Longitude": "24.8805413",
    "Elevation_m": "1766",
    "Range": "Мармароси",
    "popularity_score": 1916.0,
    "Type": "Вершина"
  },
  {
    "Name": "Чивчин",
    "Latitude": "47.8646457",
    "Longitude": "24.7102769",
    "Elevation_m": "1766",
    "Range": "Мармароси",
    "popularity_score": 1916.0,
    "Type": "Вершина"
  },
  {
    "Name": "Жандарм Третій",
    "Latitude": "48.2273625",
    "Longitude": "24.2215093",
    "Elevation_m": "1710",
    "Range": "Свидовець",
    "popularity_score": 1910.0,
    "Type": "Вершина"
  },
  {
    "Name": "Унгаряска",
    "Latitude": "48.2835651",
    "Longitude": "24.1163462",
    "Elevation_m": "1707",
    "Range": "Свидовець",
    "popularity_score": 1907.0,
    "Type": "Вершина"
  },
  {
    "Name": "Стіг",
    "Latitude": "48.2509073",
    "Longitude": "24.2241951",
    "Elevation_m": "1704",
    "Range": "Свидовець",
    "popularity_score": 1904.0,
    "Type": "Вершина"
  },
  {
    "Name": "Трояска",
    "Latitude": "48.2839375",
    "Longitude": "24.1460233",
    "Elevation_m": "1702",
    "Range": "Свидовець",
    "popularity_score": 1902.0,
    "Type": "Вершина"
  },
  {
    "Name": "Довбушанець",
    "Latitude": "48.418769",
    "Longitude": "24.3838968",
    "Elevation_m": "1701",
    "Range": "Горгани",
    "popularity_score": 1901.0,
    "Type": "Вершина"
  },
  {
    "Name": "Палениця",
    "Latitude": "47.7588417",
    "Longitude": "24.8723695",
    "Elevation_m": "1749",
    "Range": "Мармароси",
    "popularity_score": 1899.0,
    "Type": "Вершина"
  },
  {
    "Name": "Полєнський",
    "Latitude": "48.4523705",
    "Longitude": "24.333419",
    "Elevation_m": "1693",
    "Range": "Горгани",
    "popularity_score": 1893.0,
    "Type": "Вершина"
  },
  {
    "Name": "Копиця",
    "Latitude": "48.1508931",
    "Longitude": "24.3575634",
    "Elevation_m": "1689",
    "Range": "Свидовець",
    "popularity_score": 1889.0,
    "Type": "Вершина"
  },
  {
    "Name": "Крачуняска",
    "Latitude": "48.2580782",
    "Longitude": "24.2017367",
    "Elevation_m": "1686",
    "Range": "Свидовець",
    "popularity_score": 1886.0,
    "Type": "Вершина"
  },
  {
    "Name": "Команова",
    "Latitude": "47.7654827",
    "Longitude": "24.8566037",
    "Elevation_m": "1734",
    "Range": "Мармароси",
    "popularity_score": 1884.0,
    "Type": "Вершина"
  },
  {
    "Name": "Братківська Мала",
    "Latitude": "48.365098",
    "Longitude": "24.2094763",
    "Elevation_m": "1677",
    "Range": "Горгани",
    "popularity_score": 1877.0,
    "Type": "Вершина"
  },
  {
    "Name": "Коман",
    "Latitude": "47.7803801",
    "Longitude": "24.8363138",
    "Elevation_m": "1723",
    "Range": "Мармароси",
    "popularity_score": 1873.0,
    "Type": "Вершина"
  },
  {
    "Name": "Рипа",
    "Latitude": "47.918331",
    "Longitude": "24.3386974",
    "Elevation_m": "1872",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1872.0,
    "Type": "Вершина"
  },
  {
    "Name": "Синяк",
    "Latitude": "48.3884235",
    "Longitude": "24.4573789",
    "Elevation_m": "1665",
    "Range": "Горгани",
    "popularity_score": 1865.0,
    "Type": "Вершина"
  },
  {
    "Name": "Пікун",
    "Latitude": "48.4381424",
    "Longitude": "24.3474953",
    "Elevation_m": "1657",
    "Range": "Горгани",
    "popularity_score": 1857.0,
    "Type": "Вершина"
  },
  {
    "Name": "Силигул",
    "Latitude": "47.8399821",
    "Longitude": "24.7151792",
    "Elevation_m": "1688",
    "Range": "Мармароси",
    "popularity_score": 1838.0,
    "Type": "Вершина"
  },
  {
    "Name": "Сивуля Велика",
    "Latitude": "48.5492091",
    "Longitude": "24.119314",
    "Elevation_m": "1836",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1836.0,
    "Type": "Вершина"
  },
  {
    "Name": "Ґрофа",
    "Latitude": "48.6201279",
    "Longitude": "23.932518",
    "Elevation_m": "1748",
    "Range": "Гринявські гори",
    "popularity_score": 1828.0,
    "Type": "Вершина"
  },
  {
    "Name": "Budescul Mare / Будичевська Велика",
    "Latitude": "47.8715401",
    "Longitude": "24.6674627",
    "Elevation_m": "1678",
    "Range": "Мармароси",
    "popularity_score": 1828.0,
    "Type": "Вершина"
  },
  {
    "Name": "Попадя",
    "Latitude": "48.5630968",
    "Longitude": "23.9069221",
    "Elevation_m": "1740",
    "Range": "Гринявські гори",
    "popularity_score": 1820.0,
    "Type": "Вершина"
  },
  {
    "Name": "Сивуля Мала",
    "Latitude": "48.5451761",
    "Longitude": "24.1293419",
    "Elevation_m": "1818",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1818.0,
    "Type": "Вершина"
  },
  {
    "Name": "Паренки",
    "Latitude": "48.5987008",
    "Longitude": "23.9110297",
    "Elevation_m": "1736",
    "Range": "Гринявські гори",
    "popularity_score": 1816.0,
    "Type": "Вершина"
  },
  {
    "Name": "Козій Ґорґан",
    "Latitude": "48.459946",
    "Longitude": "24.3437328",
    "Elevation_m": "1616",
    "Range": "Горгани",
    "popularity_score": 1816.0,
    "Type": "Вершина"
  },
  {
    "Name": "Mica Mare / Неніска Велика",
    "Latitude": "47.9631132",
    "Longitude": "24.4725478",
    "Elevation_m": "1815",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1815.0,
    "Type": "Вершина"
  },
  {
    "Name": "Micu Mic / Неніска Мала",
    "Latitude": "47.9617957",
    "Longitude": "24.4640328",
    "Elevation_m": "1815",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1815.0,
    "Type": "Вершина"
  },
  {
    "Name": "Руська",
    "Latitude": "48.3556229",
    "Longitude": "24.2268126",
    "Elevation_m": "1612",
    "Range": "Горгани",
    "popularity_score": 1812.0,
    "Type": "Вершина"
  },
  {
    "Name": "Молода",
    "Latitude": "48.6564545",
    "Longitude": "23.869828",
    "Elevation_m": "1724",
    "Range": "Гринявські гори",
    "popularity_score": 1804.0,
    "Type": "Вершина"
  },
  {
    "Name": "Ігровець",
    "Latitude": "48.5975947",
    "Longitude": "24.0997355",
    "Elevation_m": "1804",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1804.0,
    "Type": "Вершина"
  },
  {
    "Name": "Лостун",
    "Latitude": "47.8423743",
    "Longitude": "24.782582",
    "Elevation_m": "1653",
    "Range": "Мармароси",
    "popularity_score": 1803.0,
    "Type": "Вершина"
  },
  {
    "Name": "Висока",
    "Latitude": "48.6081973",
    "Longitude": "24.0955734",
    "Elevation_m": "1803",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1803.0,
    "Type": "Вершина"
  },
  {
    "Name": "Скалки-Верхні",
    "Latitude": "48.4574476",
    "Longitude": "24.3071253",
    "Elevation_m": "1597",
    "Range": "Горгани",
    "popularity_score": 1797.0,
    "Type": "Вершина"
  },
  {
    "Name": "Прилучна",
    "Latitude": "47.7992105",
    "Longitude": "24.8968921",
    "Elevation_m": "1646",
    "Range": "Мармароси",
    "popularity_score": 1796.0,
    "Type": "Вершина"
  },
  {
    "Name": "Șerban / Шербан",
    "Latitude": "47.9114189",
    "Longitude": "24.2981825",
    "Elevation_m": "1793",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1793.0,
    "Type": "Вершина"
  },
  {
    "Name": "Малий Ґорґан",
    "Latitude": "48.4001293",
    "Longitude": "24.435371",
    "Elevation_m": "1592",
    "Range": "Горгани",
    "popularity_score": 1792.0,
    "Type": "Вершина"
  },
  {
    "Name": "Рижовата",
    "Latitude": "47.8296885",
    "Longitude": "24.7529963",
    "Elevation_m": "1641",
    "Range": "Мармароси",
    "popularity_score": 1791.0,
    "Type": "Вершина"
  },
  {
    "Name": "Братківська Велика",
    "Latitude": "48.365317",
    "Longitude": "24.1787272",
    "Elevation_m": "1788",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1788.0,
    "Type": "Вершина"
  },
  {
    "Name": "Петрос Ґорґанський",
    "Latitude": "48.5545642",
    "Longitude": "23.9510794",
    "Elevation_m": "1702",
    "Range": "Гринявські гори",
    "popularity_score": 1782.0,
    "Type": "Вершина"
  },
  {
    "Name": "Петрос Мармароський",
    "Latitude": "47.9623076",
    "Longitude": "24.3380393",
    "Elevation_m": "1781",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1781.0,
    "Type": "Вершина"
  },
  {
    "Name": "Пуруль",
    "Latitude": "47.80649",
    "Longitude": "24.82189",
    "Elevation_m": "1616",
    "Range": "Мармароси",
    "popularity_score": 1766.0,
    "Type": "Вершина"
  },
  {
    "Name": "Близниця-Мала",
    "Latitude": "48.2021201",
    "Longitude": "24.228543",
    "Elevation_m": "1566",
    "Range": "Свидовець",
    "popularity_score": 1766.0,
    "Type": "Вершина"
  },
  {
    "Name": "Stiavul / Щаул",
    "Latitude": "47.9562528",
    "Longitude": "24.4872385",
    "Elevation_m": "1762",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1762.0,
    "Type": "Вершина"
  },
  {
    "Name": "Стеришорка",
    "Latitude": "48.442895",
    "Longitude": "24.3274793",
    "Elevation_m": "1560",
    "Range": "Горгани",
    "popularity_score": 1760.0,
    "Type": "Вершина"
  },
  {
    "Name": "Катерина",
    "Latitude": "48.5562337",
    "Longitude": "24.2472561",
    "Elevation_m": "1559",
    "Range": "Горгани",
    "popularity_score": 1759.0,
    "Type": "Вершина"
  },
  {
    "Name": "Какараза",
    "Latitude": "48.2020623",
    "Longitude": "24.3721213",
    "Elevation_m": "1559",
    "Range": "Свидовець",
    "popularity_score": 1759.0,
    "Type": "Вершина"
  },
  {
    "Name": "Ґропа",
    "Latitude": "48.3767318",
    "Longitude": "24.1650919",
    "Elevation_m": "1758",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1758.0,
    "Type": "Вершина"
  },
  {
    "Name": "Гавор",
    "Latitude": "48.5197953",
    "Longitude": "24.2011553",
    "Elevation_m": "1551",
    "Range": "Горгани",
    "popularity_score": 1751.0,
    "Type": "Вершина"
  },
  {
    "Name": "Коретвина",
    "Latitude": "48.551196",
    "Longitude": "23.9403958",
    "Elevation_m": "1671",
    "Range": "Гринявські гори",
    "popularity_score": 1751.0,
    "Type": "Вершина"
  },
  {
    "Name": "Поганець",
    "Latitude": "48.6945888",
    "Longitude": "23.8380454",
    "Elevation_m": "1667",
    "Range": "Гринявські гори",
    "popularity_score": 1747.0,
    "Type": "Вершина"
  },
  {
    "Name": "Станимир",
    "Latitude": "48.5629856",
    "Longitude": "24.2503328",
    "Elevation_m": "1546",
    "Range": "Горгани",
    "popularity_score": 1746.0,
    "Type": "Вершина"
  },
  {
    "Name": "Хом’як",
    "Latitude": "48.367521",
    "Longitude": "24.4967947",
    "Elevation_m": "1542",
    "Range": "Горгани",
    "popularity_score": 1742.0,
    "Type": "Вершина"
  },
  {
    "Name": "Strunga / Струнґа",
    "Latitude": "47.9171327",
    "Longitude": "24.3039538",
    "Elevation_m": "1736",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1736.0,
    "Type": "Вершина"
  },
  {
    "Name": "Берлебашка",
    "Latitude": "47.9532697",
    "Longitude": "24.3159382",
    "Elevation_m": "1734",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1734.0,
    "Type": "Вершина"
  },
  {
    "Name": "Скорбiвка",
    "Latitude": "48.3466963",
    "Longitude": "24.2808009",
    "Elevation_m": "1527",
    "Range": "Горгани",
    "popularity_score": 1727.0,
    "Type": "Вершина"
  },
  {
    "Name": "Сиваня Лолинська",
    "Latitude": "48.6683576",
    "Longitude": "23.8395618",
    "Elevation_m": "1643",
    "Range": "Гринявські гори",
    "popularity_score": 1723.0,
    "Type": "Вершина"
  },
  {
    "Name": "Великий Канусяк",
    "Latitude": "48.6033335",
    "Longitude": "23.9644609",
    "Elevation_m": "1642",
    "Range": "Гринявські гори",
    "popularity_score": 1722.0,
    "Type": "Вершина"
  },
  {
    "Name": "Стримба",
    "Latitude": "48.4381252",
    "Longitude": "23.8005815",
    "Elevation_m": "1719",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1719.0,
    "Type": "Вершина"
  },
  {
    "Name": "Татульський Менчул",
    "Latitude": "48.289388",
    "Longitude": "24.2350456",
    "Elevation_m": "1519",
    "Range": "Свидовець",
    "popularity_score": 1719.0,
    "Type": "Вершина"
  },
  {
    "Name": "Mezipotoki / Межипотоки",
    "Latitude": "47.9703074",
    "Longitude": "24.4367957",
    "Elevation_m": "1713",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1713.0,
    "Type": "Вершина"
  },
  {
    "Name": "Негровець",
    "Latitude": "48.4982875",
    "Longitude": "23.7151667",
    "Elevation_m": "1709",
    "Range": "Інші Карпатські хребти",
    "popularity_score": 1709.0,
    "Type": "Вершина"
  },
  {
    "Name": "Ясеновець",
    "Latitude": "48.5021243",
    "Longitude": "23.6935619",
    "Elevation_m": "1628",
    "Range": "Гринявські гори",
    "popularity_score": 1708.0,
    "Type": "Вершина"
  },
  {
    "Name": "Полонина Боржава",
    "Latitude": "48.3500",
    "Longitude": "23.4500",
    "Elevation_m": "1400",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Гаджина",
    "Latitude": "48.2800",
    "Longitude": "24.3200",
    "Elevation_m": "1450",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Руна (Рівна)",
    "Latitude": "48.1200",
    "Longitude": "24.7200",
    "Elevation_m": "1480",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Кринта",
    "Latitude": "48.2500",
    "Longitude": "24.2800",
    "Elevation_m": "1520",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Красна",
    "Latitude": "48.3800",
    "Longitude": "23.5200",
    "Elevation_m": "1568",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Плісце",
    "Latitude": "48.2200",
    "Longitude": "24.5000",
    "Elevation_m": "1430",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Дарвайка",
    "Latitude": "48.1800",
    "Longitude": "24.3500",
    "Elevation_m": "1460",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Веснарка",
    "Latitude": "48.0800",
    "Longitude": "24.6000",
    "Elevation_m": "1500",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Лисича",
    "Latitude": "48.2600",
    "Longitude": "24.1800",
    "Elevation_m": "1440",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Палениця",
    "Latitude": "48.1500",
    "Longitude": "24.4200",
    "Elevation_m": "1550",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Маковиця",
    "Latitude": "48.4600",
    "Longitude": "24.5500",
    "Elevation_m": "1420",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Перці",
    "Latitude": "48.4100",
    "Longitude": "24.6800",
    "Elevation_m": "1410",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Чорногора",
    "Latitude": "48.1255",
    "Longitude": "24.5658",
    "Elevation_m": "1650",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Свидовець",
    "Latitude": "48.2200",
    "Longitude": "24.2200",
    "Elevation_m": "1600",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Рожанка",
    "Latitude": "48.3200",
    "Longitude": "23.6800",
    "Elevation_m": "1480",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Кук",
    "Latitude": "48.3400",
    "Longitude": "23.4800",
    "Elevation_m": "1190",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Менчул",
    "Latitude": "48.3000",
    "Longitude": "23.7000",
    "Elevation_m": "1470",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Шешул",
    "Latitude": "48.2800",
    "Longitude": "24.4500",
    "Elevation_m": "1490",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Боржавські Полонини",
    "Latitude": "48.3600",
    "Longitude": "23.5500",
    "Elevation_m": "1420",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Грофа",
    "Latitude": "48.6200",
    "Longitude": "23.9325",
    "Elevation_m": "1530",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Явірник",
    "Latitude": "48.401735",
    "Longitude": "24.519296",
    "Elevation_m": "1200",
    "Range": "Полонини",
    "Type": "Полонина"
  },
  {
    "Name": "Полонина Хом'як",
    "Latitude": "48.346897",
    "Longitude": "24.506763",
    "Elevation_m": "1542",
    "Range": "Полонини",
    "Type": "Полонина"
  }
];

// Mountain range colors
const RANGE_COLORS = {
  "Чорногора": "#e74c3c",           // Red - highest peaks
  "Мармароси": "#9b59b6",            // Purple
  "Свидовець": "#27ae60",            // Green
  "Горгани": "#16a085",              // Teal
  "Чивчинські гори": "#e67e22",     // Orange
  "Гринявські гори": "#2ecc71",     // Emerald Green
  "Полонинський хребет": "#3498db", // Blue
  "Бещади": "#e91e63",               // Pink
  "Інші Карпатські хребти": "#95a5a6", // Gray
  "Полонини": "#f1c40f"             // Yellow - for polonyny
};

// Mountain range info
const RANGE_INFO = {
  "Чорногора": "Найвищий гірський масив Українських Карпат. Тут розташована Говерла (2061м) - найвища вершина України.",
  "Мармароси": "Масив на південному заході України, відомий кристалічними породами та альпійськими луками.",
  "Свидовець": "Вулканічний хребет з характерними полонинами та скелястими вершинами.",
  "Горгани": "Унікальний масив зі скелястими вершинами, покритими кам'яними розсипами.",
  "Чивчинські гори": "Масив у Закарпатській області з м'якими схилами та полонинами.",
  "Гринявські гори": "Гірський масив у Івано-Франківській області.",
  "Полонинський хребет": "Протяжний хребет з численними полонинами та пасовищами.",
  "Бещади": "Західна частина Українських Карпат, що переходить у Бещади Польські.",
  "Інші Карпатські хребти": "Інші гірські масиви Українських Карпат.",
  "Полонини": "Високогірні луки та пасовища Карпат, традиційні місця випасу худоби."
};
