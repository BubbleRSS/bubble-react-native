import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  makeHomeFactory,
  makeFlavorsFactory,
  makeLikesFactory,
  makeSettingsFactory
} from '@/main/factories/pages';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HeaderBase, HeaderSelect } from "@/presentation/components";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FAB34D',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          overflow: 'hidden',
          height: 64
        },
        tabBarIconStyle: {
          marginTop: 6,
        },
        tabBarLabelStyle: {
          marginBottom: 6,
        },
        tabBarActiveBackgroundColor: 'rgba(215, 132, 14, 0.15)',
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarLabelPosition: 'below-icon',
      }}
    >
      <Tab.Screen
        name='Home'
        component={makeHomeFactory}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
          header: () => (
            <HeaderBase>
              <HeaderSelect />
            </HeaderBase>
          )
        }}
      />

      <Tab.Screen
        name='Flavors'
        component={makeFlavorsFactory}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'layers' : 'layers-outline'}
              color={color}
              size={size}
            />
          ),
          header: () => (
            <HeaderBase title='Flavors' />
          )
        }}
      />

      <Tab.Screen
        name='Likes'
        component={makeLikesFactory}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'heart' : 'heart-outline'}
              color={color}
              size={size}
            />
          ),
          header: () => (
            <HeaderBase title='Likes' />
          )
        }}
      />

      <Tab.Screen
        name='Settings'
        component={makeSettingsFactory}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              color={color}
              size={size}
            />
          ),
          header: () => (
            <HeaderBase title='Settings' />
          )
        }}
      />
    </Tab.Navigator>
  );
};
