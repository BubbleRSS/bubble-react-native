import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type BaseHeaderProps = {
  title: string
}

export const BaseHeader: FC<BaseHeaderProps> = ({
  title
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.titleActionContainer}>
        <Text>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20
  },
  titleActionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});