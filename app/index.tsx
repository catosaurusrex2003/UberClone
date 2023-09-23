import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavOptions from "../components/navOptions";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import NavFavourite from "../components/navFavourites";

const Index = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="bg-white flex-1 px-4">
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1">
        <Image
          className="h-20 w-28"
          style={{ resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <View className="">
          <GooglePlacesAutocomplete
            styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
            placeholder="Where from"
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            fetchDetails={true}
            // @ts-ignore
            returnKeyType={"search"}
            // @ts-ignore
            onPress={(
              data: GooglePlaceData,
              details: GooglePlaceDetail | null = null
            ) => {
              dispatch(
                setOrigin({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              dispatch(setDestination(null));
            }}
            enablePoweredByContainer={false}
            minLength={2}
            debounce={400}
          />
        </View>
        <NavOptions />
        <NavFavourite/>
      </View>
    </SafeAreaView>
  );
};
export default Index;
