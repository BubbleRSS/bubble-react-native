import { ReactElement } from "react";
import { View } from "react-native";
import { registerRootComponent } from 'expo';

function App(): ReactElement {
  return (
    <View>Hello World!</View>
  )
}

registerRootComponent(App);
