import { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Divider, Menu } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHeaderSelectState } from "@/presentation/components";

export const HeaderSelect: FC = () => {
  const [visible, setVisible] = useState(false);
  const selectedOption = useHeaderSelectState((state) => state.selectedOption);
  const setSelectedOption = useHeaderSelectState((state) => state.setSelectedOption);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    closeMenu();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity style={styles.selectContainer} onPress={openMenu}>
          <Text style={styles.selectText}>{selectedOption}</Text>
          <MaterialCommunityIcons name="chevron-down" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      }
    >
      <Menu.Item onPress={() => handleSelectOption('Shopping')} title="Shopping" />
      <Divider />
      <Menu.Item onPress={() => handleSelectOption('Work')} title="Work" />
      <Divider />
      <Menu.Item onPress={() => handleSelectOption('Personal')} title="Personal" />
    </Menu>
  );
}

const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  selectText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 5,
  }
});