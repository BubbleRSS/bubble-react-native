import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MakeHomeFactory,
  MakeFlavorsFactory,
  MakeLikesFactory,
  MakeSettingsFactory
} from '@/main/factories/pages';
import { BaseHeader } from '@/presentation/components/BaseHeader';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={MakeHomeFactory}
        options={{
          header: () => (
            <BaseHeader title='Bubble' />
          )
        }}
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
