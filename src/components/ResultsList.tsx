import { string } from 'prop-types'
import React from 'react'
import { FlatList, FlatListProps, StyleSheet, Text, View } from 'react-native'

import ResultsDetail from './ResultsDetail'

// interface Results extends FlatListProps<any> {
//   id: string
//   name: string
//   length: string
// }
const ResultsList = ({ title, results }: { title: string; results: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>Results: {results.length}</Text>
      <FlatList<FlatListProps<any>>
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore: unavailable type definition
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />
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

export default ResultsList
