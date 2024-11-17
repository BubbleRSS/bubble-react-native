import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MakeHomeFactory,
  MakeFlavorsFactory,
  MakeLikesFactory,
  MakeSettingsFactory
} from '@/main/factories/pages';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={MakeHomeFactory}
      />

      <Tab.Screen
        name='Flavors'
        component={MakeFlavorsFactory}
      />

      <Tab.Screen
        name='Likes'
        component={MakeLikesFactory}
      />

      <Tab.Screen
        name='Settings'
        component={MakeSettingsFactory}
      />
    </Tab.Navigator>
  );
};
