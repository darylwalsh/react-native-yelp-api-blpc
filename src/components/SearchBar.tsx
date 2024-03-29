import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

export interface YelpSearchInterface extends TextInputProps {
  term: string
  onTermChange: (text: string) => void
  onTermSubmit: (event: { nativeEvent: { text: string } }) => void
}
const SearchBar = ({
  term,
  onTermChange,
  onTermSubmit,
}: YelpSearchInterface) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
})

export default SearchBar
