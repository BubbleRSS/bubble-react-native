import { FC, ReactNode } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";

type HeaderBaseProps = {
  title?: string;
  children?: ReactNode;
};

export const HeaderBase: FC<HeaderBaseProps> = ({ children, title }) => {
  return (
    <>
      <Appbar.Header style={styles.header}>
        {title &&
          <Appbar.Content
            title={
              <View style={styles.titleArea}>
                <Text style={styles.title}>
                  {title}
                </Text>
              </View>
            }
          />
        }

        {children}
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FAB34D',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center'
  },
  titleArea: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    color: '#FFFFFF',
  }
})
