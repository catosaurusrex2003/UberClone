import { SafeAreaViewBase, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../../slices/navSlice";
import { useRouter } from "expo-router";
import NavFavourite from "../../components/navFavourites";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";

const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <View className="bg-white flex-1 px-2">
      <View>
        <Text className="text-center text-xl font-semibold py-4">
          Good Morning, Mehdi
        </Text>
        <View className=" border-t border-gray-100">
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Where to?"
            nearbyPlacesAPI="GooglePlacesSearch"
            fetchDetails={true}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry.location,
                  description: data.description,
                })
              );
              router.push("rideOptionsCard");
            }}
            enablePoweredByContainer={false}
            minLength={2}
            debounce={400}
            query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          />
        </View>
        <NavFavourite />
      </View>
      <View className="flex flex-row justify-evenly bg-white py-2 border-t border-gray-100">
        <TouchableOpacity
          className="flex-row justify-between w-24 px-4 py-3 rounded-full bg-gray-600"
          onPress={() => router.push("rideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center ml-2">Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row justify-between w-24 px-4 py-3 rounded-full bg-gray-600"
          onPress={() => router.push("rideOptionsCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center ml-2">Eats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
