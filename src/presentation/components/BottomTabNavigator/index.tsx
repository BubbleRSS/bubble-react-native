import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { makeHomeFactory } from '@/main/factories/pages';
import { makeFlavorsFactory } from '@/main/factories/pages/flavors-factory';
import { makeSavedBubblesFactory } from '@/main/factories/pages/saved-bubbles-factory';
import { makeSettingsFactory } from '@/main/factories/pages/settings-factory';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={makeHomeFactory}
        />

        <Tab.Screen
          name='Flavors'
          component={makeFlavorsFactory}
        />

        <Tab.Screen
          name='Saved'
          component={makeSavedBubblesFactory}
        />

        <Tab.Screen
          name='Settings'
          component={makeSettingsFactory}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
