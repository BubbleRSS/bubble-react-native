import { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHeaderSelectState } from "@/presentation/components";

const dummySelectOptions = ["Shopping", "Work", "Personal"];

export const HeaderSelect: FC = () => {
  // const selectedOption = useHeaderSelectState((state) => state.selectedOption);
  // const setSelectedOption = useHeaderSelectState((state) => state.setSelectedOption);

  return (
    <TouchableOpacity style={styles.selectContainer} onPress={() => {}}>
      <Text style={styles.selectText}>Shopping</Text>
      <MaterialCommunityIcons name="chevron-down" size={20} color="#FFFFFF" />
    </TouchableOpacity>
  );
};

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
});
