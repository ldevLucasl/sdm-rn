import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import { Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Detail from "./screens/Detail";
import Profile from "./screens/Profile";
import New from "./screens/New";

const stackRoutes = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FooterStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 60 : 60,
          backgroundColor: `#282a36`,
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: {
          flex: 1,
          width: 20,
          height: 20,
          marginTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          marginTop: 10,
          marginBottom: 2,
        },
        tabBarInactiveTintColor: `#8c94a8`,
        tabBarActiveTintColor: `#f5f8ff`,
      }}
      backBehavior="history"
    >
      <Tab.Screen
        name="Explorar"
        component={Home}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <AntDesign
                name="home"
                size={size}
                color={focused ? `#f5f8ff` : `#8c94a8`}
              />
            );
          },
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Criar"
        component={New}
        options={{
          tabBarIcon: ({ size, focused }) => {
            return (
              <AntDesign
                name="plus"
                size={size}
                color={focused ? `#f5f8ff` : `#8c94a8`}
              />
            );
          },
          // unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <>
      <stackRoutes.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stackRoutes.Screen name="Footer" component={FooterStack} />
        <stackRoutes.Screen name="Detail" component={Detail} />
      </stackRoutes.Navigator>
    </>
  );
};
export default AppRoutes;
