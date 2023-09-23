import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
} from "../../slices/navSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const router = useRouter();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const [selected, setSelected] = useState<any>(null);
  return (
    <View className="bg-white flex-grow relative">
      <View>
        <View className="absolute top-3 left-5">
          <TouchableOpacity
            className="rounded-full"
            onPress={() => {
              router.back();
            }}
          >
            <Icon size={30} name="chevron-left" type="fontawesome" />
          </TouchableOpacity>
        </View>
        <Text className="text-center py-3 text-xl ">
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row justify-between items-center px-4 ${
              selected?.id == item.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={{ height: 80, width: 80, resizeMode: "contain" }}
            />
            <View className="  -ml-6">
              <Text className="text-lg font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          className={`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
        >
          <Text className="text-center text-white text-lg">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
