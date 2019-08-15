import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultByPrice = (price: string): any => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore: unavailable type definition
    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore: unavailable type definition
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultByPrice('$')}
        />
        <ResultsList title="Bit Pricier" results={filterResultByPrice('$$')} />
        <ResultsList title="Top Shelf" results={filterResultByPrice('$$$')} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
