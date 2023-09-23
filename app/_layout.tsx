import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function HomeLayout() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <KeyboardAvoidingView
          className="flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
        >
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: "skyblue",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              // headerShown: false,
            }}
          >
            <Stack.Screen
              name="index"
              options={{ title: "this is index.js" }}
            />
            <Stack.Screen
              name="MapScreen"
              options={{ title: "this is mapscreen" }}
            />
            <Stack.Screen
              name="EastScreen"
              options={{ title: "this is EastScreen" }}
            />
            <Stack.Screen
              name="modal"
              options={{
                // Set the presentation mode to modal for our modal route.
                presentation: "modal",
              }}
            />
          </Stack>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    </Provider>
  );
}
