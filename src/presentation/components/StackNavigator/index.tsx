import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "@/presentation/components";
import { MakeAddTeaPageFactory } from "@/main/factories/pages";

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={BottomTabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='AddTea' component={MakeAddTeaPageFactory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}