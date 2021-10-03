import React from "react";
import { TouchableOpacity } from "react-native";

import { useTheme } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { DrawerActions } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { RootDrawerParamList } from "@utils/types";

import HomeScreen from "./HomeSreen";

type Props = NativeStackScreenProps<RootDrawerParamList>;

const TabStack = createBottomTabNavigator();

const TabScreens = ({ navigation }: Props) => {
  const { colors } = useTheme();

  return (
    <TabStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: "absolute",
          backgroundColor: colors.surface,
          borderTopColor: "transparent",
        },
        tabBarShowLabel: false,
        headerTintColor: colors.onSurface,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerStyle: {
          backgroundColor: colors.surface,
          shadowColor: "transparent",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = focused ? "chalkboard-teacher" : "chalkboard-teacher";
          } else if (route.name === "employes") {
            iconName = focused ? "users" : "users";
          } else if (route.name === "students") {
            iconName = focused ? "user-graduate" : "user-graduate";
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <TabStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingLeft: 15 }}
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Icon name={"bars"} size={20} color={"white"} />
            </TouchableOpacity>
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabScreens;
