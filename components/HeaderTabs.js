import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
console.log('geeg');
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignSelf: "center",
        backgroundColor: "black",
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        borderRadius: 25,
      }}
    >
      <HeaderButton
        text="Delivery"
        btnColor="#f5fef7"
        txtColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="grey"
        txtColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </SafeAreaView>
  );
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? 'white' : "black",
        padding: 10,
        borderRadius: 25,
      }}
        onPress={() => props.setActiveTab(props.text)}
    >
      <Text style={{ color: props.activeTab === props.text ? 'black' : 'white' }}>{props.text}</Text>
    </TouchableOpacity>
  );
};
