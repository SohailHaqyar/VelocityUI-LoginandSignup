import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Analytics from "../screens/Analytics";
import Chat from "../screens/Chat";
import HomeScreen from "../screens/HomeScreen";
import Map from "../screens/Map";
import Overview from "../screens/Overview";
import Service from "../screens/Service";
import Setting from "../screens/Setting";
import Vehicles from "../screens/Vehicles";
const Drawer = createDrawerNavigator();

export default function Screens() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Analytics" component={Analytics} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Map" component={Map} />
      <Drawer.Screen name="Overview" component={Overview} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Service" component={Service} />
      <Drawer.Screen name="Vehicles" component={Vehicles} />
    </Drawer.Navigator>
  );
}
