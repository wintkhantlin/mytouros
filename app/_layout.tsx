import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function MainLayout() {
    return (
        <SafeAreaProvider>
            <Stack>
                <Stack.Screen name="(tab)" options={{
                    headerShown: false
                }} />
                <Stack.Screen name="place-detail-modal" options={{
                    presentation: "modal",
                    headerShown: false,
                    sheetAllowedDetents: [0.25, 0.5, 1],
                    sheetInitialDetentIndex: 1,
                    gestureEnabled: true,
                }} />
            </Stack>
        </SafeAreaProvider>
    )
}