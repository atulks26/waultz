import folium
from folium.plugins import MarkerCluster
import pandas as pd
import numpy as np


district_coordinates = {
    'Central Delhi': (28.6517, 77.2219),
    'East Delhi': (28.6206, 77.3095),
    'New Delhi': (28.6139, 77.2090),
    'North Delhi': (28.6142, 77.2021),
    'Northeast Delhi': (28.7233, 77.2665),
    'Northwest Delhi': (28.7183, 77.1448),
    'South Delhi': (28.4852, 77.1964),
    'Southeast Delhi': (28.5637, 77.2507),
    'Southwest Delhi': (28.5921, 76.9729),
    'West Delhi': (28.6475, 77.0821)
}


crimes = ['Pickpocketing', 'Murder', 'Robbery']
crime_colors = {'Pickpocketing': 'green', 'Murder': 'red', 'Robbery': 'blue'}


np.random.seed(0)
data = []
for district, coordinates in district_coordinates.items():
    for crime in crimes:
        
        count = np.random.randint(0, 100)
        
        offset_lat = np.random.uniform(-0.01, 0.01)
        offset_lon = np.random.uniform(-0.01, 0.01)
        data.append({
            'District': district,
            'Crime': crime,
            'Count': count,
            'Latitude': coordinates[0] + offset_lat,
            'Longitude': coordinates[1] + offset_lon
        })

df = pd.DataFrame(data)


delhi_map = folium.Map(location=[28.6139, 77.2090], zoom_start=10)


marker_cluster = MarkerCluster().add_to(delhi_map)
for index, row in df.iterrows():
    folium.Marker(
        location=[row['Latitude'], row['Longitude']],
        popup=f"{row['Crime']}: {row['Count']}",
        icon=folium.Icon(color=crime_colors[row['Crime']])
    ).add_to(marker_cluster)


delhi_map.save('delhi_crime_map.html')