import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation'

import yelp from '../api/yelp'

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface ResultsInterface {
  name: string
  photos: []
}
type Result = ResultsInterface | null

const ResultsShowScreen = ({ navigation }: Props) => {
  const [result, setResult] = useState<Result>()
  const id = navigation.getParam('id')
  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result && result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
})

export default ResultsShowScreen
