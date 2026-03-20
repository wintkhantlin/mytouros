import { Image, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PlaceDetailModal() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: "https://picsum.photos/400/200" }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />

        <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 16 }}>
          Central Park
        </Text>

        <Text style={{ color: "#666", marginTop: 4 }}>
          New York, NY • 4.7⭐ (3.5k reviews)
        </Text>

        <Text style={{ marginTop: 12, color: "#333", lineHeight: 22 }}>
          Central Park is an urban park in New York City located between the Upper West
          and Upper East Sides of Manhattan. It is the fifth-largest park in the city,
          covering 843 acres. Great for walks, picnics, and sightseeing.
        </Text>
      </ScrollView>
    </View>
  );
}