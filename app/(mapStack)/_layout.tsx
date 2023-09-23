import { Stack, Tabs } from "expo-router";
import { Text, View } from "react-native";
import CustomMap from "../../components/map";

export default function MapLayout() {
  return (
    <>
      <Stack.Screen options={{ title: "", headerShown: false }} />
      <View>
        <View className=" h-1/2">
          <CustomMap />
        </View>
        <View className=" h-1/2">
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="rideOptionsCard" />
          </Stack>
        </View>
      </View>
    </>
  );
}
