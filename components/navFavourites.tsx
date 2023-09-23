import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Marol, Andheri(E), Mumbai",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "Chapri Street, Nagpada",
  },
];

const NavFavourite = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={data}
      ItemSeparatorComponent={() => <View className="bg-gray-200 h-[0.5]" />}
      renderItem={({ item }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            style={{
              marginRight: 10,
              backgroundColor: "#d1d5db",
              padding: 7,
              borderRadius: 19,
            }}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-base">{item.location}</Text>
            <Text className="text-gray-500">{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourite;

const styles = StyleSheet.create({});
