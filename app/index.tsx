import { Camera, MapView, ShapeSource, SymbolLayer } from '@rnmapbox/maps';
import { Dimensions, View } from "react-native";

const geojson: GeoJSON.GeoJSON = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: 1,
      properties: { name: "Bogyoke Market" },
      geometry: { type: "Point", coordinates: [96.157, 16.791] }
    },
    {
      type: "Feature",
      id: 2,
      properties: { name: "Yangon Chinatown Market" },
      geometry: { type: "Point", coordinates: [96.160, 16.788] }
    },
    {
      type: "Feature",
      id: 3,
      properties: { name: "Thiriz Mingalar Market" },
      geometry: { type: "Point", coordinates: [96.180, 16.850] }
    },
    {
      type: "Feature",
      id: 4,
      properties: { name: "Kandawgyi Market" },
      geometry: { type: "Point", coordinates: [96.176, 16.830] }
    },
    {
      type: "Feature",
      id: 5,
      properties: { name: "Mahar Bandoola Market" },
      geometry: { type: "Point", coordinates: [96.160, 16.815] }
    }
  ]
};

export default function Index() {
  return (
    <View style={{ flex: 1, height: Dimensions.get("screen").height }}>
      <MapView
        style={{ flex: 1, height: Dimensions.get("screen").height }}
        compassEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
        logoEnabled={false}
      >
        <Camera
          zoomLevel={12}
          centerCoordinate={[96.1735, 16.8409]}
        />

        <ShapeSource id="markets" shape={geojson} onPress={console.log}>
          <SymbolLayer
            id="marketSymbols"
            style={{
              iconImage: require('../assets/images/pin.png'),
              iconAllowOverlap: true,
              iconSize: 0.3,
              textField: ['get', 'name'],
              textOffset: [1.2, 0],
              textAnchor: 'left',
              textAllowOverlap: false,
              textSize: 14,
              textColor: '#000'
            }}
          />
        </ShapeSource>

      </MapView>
    </View>
  );
}