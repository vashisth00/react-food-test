import { View, Text, SafeAreaView } from "react-native";
import React from "react";

export default function HeaderTabs() {
  return (
    <SafeAreaView>
      <HeaderButton />
    </SafeAreaView>
  );
}

const HeaderButton = () => {
  return (
    <View>
      <Text>Delivery</Text>
    </View>
  );
};
