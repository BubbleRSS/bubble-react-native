import { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FlavorsRepository } from '@/data/repositories'

type HomePageProps = {
  flavorsRep: FlavorsRepository
}

export const HomePage: FC<HomePageProps> = ({ flavorsRep }) => {
  const onClick = async () => {
    await flavorsRep.register({
      name: 'teste',
      color: '#ccc'
    });
  };

  return (
    <View>
      <Text>FeedPage</Text>

      <TouchableOpacity onPress={onClick}>
        Click
      </TouchableOpacity>
    </View>
  )
}
