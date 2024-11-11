import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Appbar } from "react-native-paper";
import { useFlavorFullScreenPickerState } from "@/presentation/components/atoms";

export const HomeHeader: FC = () => {
  const { setIsOpen } = useFlavorFullScreenPickerState();

  return (
    <>
      <TouchableOpacity style={styles.selectContainer} onPress={() => {}}>
        <Text style={styles.selectText}>Shopping</Text>
        <MaterialCommunityIcons name="chevron-down" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <Appbar.Action
        icon={(props) => (
          <MaterialCommunityIcons name="plus-box-outline" {...props} />
        )}
        color="#FFFFFF"
        style={styles.addTeaButton}
        animated={false}
        onPress={() => setIsOpen(true)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    height: '100%'
  },
  selectText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 5,
  },
  addTeaButton: {
    width: 64,
    borderRadius: 0,
    height: '100%',
    padding: 0,
    margin: 0
  }
});