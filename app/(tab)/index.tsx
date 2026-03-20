import { Camera, Images, MapView, setAccessToken, ShapeSource, SymbolLayer } from '@rnmapbox/maps';
import { useRouter } from 'expo-router';
import { View } from "react-native";

setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY!)

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
  const { push } = useRouter()

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        compassEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
        logoEnabled={false}
        styleURL={process.env.EXPO_PUBLIC_MAPBOX_MAPBOX_STYLE_URL}
      >
        <Camera
          zoomLevel={12}
          centerCoordinate={[96.1735, 16.8409]}
        />

        <Images
          images={{
            pin: require('../../assets/images/pin.png')
          }}
        />

        <ShapeSource id="markets" shape={geojson} onPress={() => push("/place-detail-modal")}>
          <SymbolLayer
            id="marketSymbols"
            style={{
              iconImage: 'pin',
              iconAllowOverlap: true,
              iconSize: 0.35,
              textField: ['get', 'name'],
              textOffset: [1.2, 0],
              textAnchor: 'left',
              textAllowOverlap: false,
              textSize: 14,
              textColor: '#2C8251',
              textHaloColor: '#FFFFFF',
              textHaloWidth: 2,
              textFont: ['DIN Offc Pro Medium', 'Arial Unicode MS Regular'],
            }}
          />
        </ShapeSource>

      </MapView>
    </View>
  );
}