import { FC, ReactNode } from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, View } from "react-native";

type HeaderBaseProps = {
  title?: string;
  children?: ReactNode;
};

export const HeaderBase: FC<HeaderBaseProps> = ({ children, title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.fullWidthContainer}>
        {title && (
          <Appbar.Content
            title={title}
            titleStyle={styles.title}
            style={styles.appBarContent}
          />
        )}
        {children && <View style={styles.childrenContainer}>{children}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FAB34D',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    padding: 0,
    height: 64,
  },
  fullWidthContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },
  appBarContent: {
    flex: 1,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
  },
  childrenContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%'
  },
});
