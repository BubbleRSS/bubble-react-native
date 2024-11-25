import '../../gesture-handler';

import { ReactElement } from "react";
import { registerRootComponent } from 'expo';
import { Router } from '@/presentation/components/Router';
import { ActivityIndicator, Text, View } from 'react-native';
import { useDatabase } from '@/infra/db/database';
import { SQLiteProvider } from 'expo-sqlite';

function App(): ReactElement {
  try {
    const { success } = useDatabase();

    if (!success) {
      return (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
      );
    }

    return (
      <SQLiteProvider databaseName="database.db">
        <Router />
      </SQLiteProvider>
    );
  } catch (error: any) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{error.message}</Text>
      </View>
    );
  }
}

registerRootComponent(App);
