import { Image, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Icon } from "@rneui/themed";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "/(mapStack)/",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EastScreen",
  },
];

function NavOptions() {
  const router = useRouter();
  const origin = useSelector(selectOrigin);
  return (
    <View className="flex">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            className="px-6 py-4 bg-gray-200 m-2"
            onPress={() => {
              router.push(item.screen);
            }}
            disabled={!origin}
          >
            <View className={`${!origin && "opacity-20"}`}>
              <Image
                className="h-20 w-20"
                style={{ resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text className="mt-2 font-semibold text-lg">{item.title}</Text>
              <Icon
                style={{
                  backgroundColor: "black",
                  borderRadius: 35,
                  padding: 5,
                  width: 34,
                  marginTop: 20,
                }}
                name="arrowright"
                type="antdesign"
                color="white"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default NavOptions;
