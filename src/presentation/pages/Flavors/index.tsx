import { FC, useEffect } from 'react'
import { Alert, Button, FlatList, Pressable, TextInput, Text, SafeAreaView } from 'react-native';
import { FlavorsRepository } from "@/data/repositories";
import { useFlavorFormState, useFlavorsState } from './atom';

type FlavorsPageProps = {
  flavorsRepository: FlavorsRepository;
}

export const FlavorsPage: FC<FlavorsPageProps> = ({ flavorsRepository }) => {
  const { name, color, setName, setColor } = useFlavorFormState();
  const { flavors, addFlavor, setFlavors, deleteFlavor } = useFlavorsState();

  const getAllFlavors = () => {
    flavorsRepository
      .findAll()
      .then((response) => {
        setFlavors(response);
      })
      .catch((error) => Alert.alert("Error: " + error));
  }

  const registerFlavor = () => {
    if (name) {
      flavorsRepository
        .register({
          name,
          color
        })
        .then((response) => {
          addFlavor(response);

          setName("");
          setColor("");
        })
        .catch((error) => Alert.alert("Error: " + error));
    }
  }

  const removeFlavors = (id: number) => {
    Alert.alert("Remove", "Do you really want to remove?", [
      { text: "Cancel",  style: "cancel" },
      {
        text: "Yes, why not",
        onPress: async () => {
          flavorsRepository
            .remove({ id })
            .then((response) => {
              deleteFlavor(response);
            })
            .catch((error) => Alert.alert("Error: " + error));
        },
      },
    ]);
  }

  const detailFlavor = (id: number) => {
    const flavor = flavors.find(t => t.id === id);

    if (flavor) {
      Alert.alert(
        `Flavor ID ${flavor.id} registered as "${flavor.name}"`
      )
    }
  }

  useEffect(() => {
    getAllFlavors();
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

      <Button title="Save" onPress={registerFlavor} />
      <Button title="Refresh DB" onPress={getAllFlavors} />

      <FlatList
        data={flavors}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Pressable
            style={{ padding: 16, borderWidth: 1, borderRadius: 7 }}
            onLongPress={() => removeFlavors(item.id)}
            onPress={() => detailFlavor(item.id)}
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
