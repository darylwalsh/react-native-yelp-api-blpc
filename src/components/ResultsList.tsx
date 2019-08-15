import { string } from 'prop-types'
import React from 'react'
import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  NavigationInjectedProps,
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions,
  withNavigation,
} from 'react-navigation'

import ResultsDetail from './ResultsDetail'

// interface Results extends FlatListProps<any> {
//   id: string
//   name: string
//   length: string
// }
export interface ResultsPropsInterface {
  // navigation: NavigationScreenProp<NavigationState, NavigationParams>
  navigation: NavigationStackScreenOptions
  screenProps: NavigationScreenProps
}

const ResultsList = ({
  title,
  results,
  navigation,
  screenProps,
}: {
  title: string
  results: any
  navigation?: NavigationStackScreenOptions | NavigationScreenProps
  screenProps?: NavigationScreenProps
}): NavigationStackScreenOptions | void | JSX.Element | any => {
  // Navigate to details view
  const buttonPress = (): NavigationStackScreenOptions | void | any => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore: unavailable type definition
    navigation.navigate('ResultsShow')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result: any) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={buttonPress}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
})

export default withNavigation(ResultsList)
