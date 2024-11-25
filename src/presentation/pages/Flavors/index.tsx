import { useSQLiteContext } from 'expo-sqlite';
import { FC, useEffect } from 'react'
import { Alert, Button, FlatList, Pressable, TextInput } from 'react-native';
import { View, Text, SafeAreaView } from 'react-native'
import { FlavorProps, useFlavorFormState, useFlavorsState } from './atom';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import * as flavorSchema from "@/infra/db/drizzle/schemas/flavorSchema";
import { asc, eq } from 'drizzle-orm';

export const FlavorsPage: FC = () => {
  const { name, color, setName, setColor } = useFlavorFormState();
  const { flavors, addFlavor, setFlavors, removeFlavor } = useFlavorsState();

  const database = useSQLiteContext()
  const db = drizzle(database, { schema: flavorSchema })

  async function fetchFlavors() {
    try {
      const response = await db.query.flavor.findMany({
        orderBy: [asc(flavorSchema.flavor.name)],
      })

      setFlavors(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function add() {
    if (name) {
      try {
        const response = await db.insert(flavorSchema.flavor).values({ name, color })
  
        Alert.alert("Registered with ID: " + response.lastInsertRowId);
  
        addFlavor({
          id: response.lastInsertRowId,
          name,
          color
        });
  
        setName("");
        setColor("");
      } catch (error) {
        console.log(error)
      }
    }
  }

  async function remove(id: number) {
    try {
      Alert.alert("Remove", "Do you really want to remove?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes, why not",
          onPress: async () => {
            await db
              .delete(flavorSchema.flavor)
              .where(eq(flavorSchema.flavor.id, id))

            removeFlavor(id);
          },
        },
      ])
    } catch (error) {
      console.log(error)
    }
  }

  function show(id: number) {
    const flavor = flavors.find(t => t.id === id);

    if (flavor) {
      Alert.alert(
        `Flavor ID ${flavor.id} registered as "${flavor.name}"`
      )
    }
  }

  useEffect(() => {
    fetchFlavors()
  }, [])

  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        paddingTop: 64,
        paddingHorizontal: 32
      }}
    >
      <TextInput
        placeholder="Name"
        style={{
          height: 54,
          borderWidth: 1,
          borderRadius: 7,
          borderColor: "#999",
          paddingHorizontal: 16,
        }}
        onChangeText={setName}
        value={name}
      />

      <TextInput
        placeholder="Color"
        style={{
          height: 54,
          borderWidth: 1,
          borderRadius: 7,
          borderColor: "#999",
          paddingHorizontal: 16,
        }}
        onChangeText={setColor}
        value={color}
      />  

      <Button title="Save" onPress={add} />
      <Button title="Refresh DB" onPress={fetchFlavors} />

      <FlatList
        data={flavors}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable
            style={{ padding: 16, borderWidth: 1, borderRadius: 7 }}
            onLongPress={() => remove(item.id)}
            onPress={() => show(item.id)}
          >
            <Text>{item.name}</Text>
          </Pressable>
        )}
        ListEmptyComponent={() => <Text>Lista vazia.</Text>}
        contentContainerStyle={{ gap: 16 }}
      />
    </SafeAreaView>
  );
}
