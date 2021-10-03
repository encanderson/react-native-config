import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "./DrawerContent";
import TabScreens from "@app/screens/tabs";

import { RootDrawerParamList } from "@utils/types";

const DrawerStack = createDrawerNavigator<RootDrawerParamList>();

const Drawer = () => {
  return (
    <DrawerStack.Navigator
      //   initialRouteName={"tabs"}
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <DrawerStack.Screen name={"TabScreens"} component={TabScreens} />
    </DrawerStack.Navigator>
  );
};

export default Drawer;
