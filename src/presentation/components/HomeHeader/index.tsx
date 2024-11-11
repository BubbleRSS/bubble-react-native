import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const HomeHeader: FC = () => {
  return (
    <>
      <TouchableOpacity style={styles.selectContainer} onPress={() => {}}>
        <Text style={styles.selectText}>Shopping</Text>
        <MaterialCommunityIcons name="chevron-down" size={20} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.addTeaButton} onPress={() => {}}>
        <MaterialCommunityIcons name="plus-box-outline" style={styles.addTeaIcon} />
      </TouchableOpacity>
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
    height: '100%',
    backgroundColor: 'rgba(215, 132, 14, 0.15)'
  },
  selectText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginRight: 5,
  },
  addTeaButton: {
    display: 'flex',
    width: 64,
    borderRadius: 0,
    height: '100%',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addTeaIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  }
});