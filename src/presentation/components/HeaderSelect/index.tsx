import { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider, Menu } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useHeaderSelectState } from "@/presentation/components";

const dummySelectOptions = ["Shopping", "Work", "Personal"];

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
      anchorPosition='bottom'
    >
      {dummySelectOptions.map((option, index) => (
        <View key={option}>
          <Menu.Item onPress={() => handleSelectOption(option)} title={option} />
          {index < dummySelectOptions.length - 1 && <Divider />}
        </View>
      ))}
    </Menu>
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
