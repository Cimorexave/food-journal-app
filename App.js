import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import ResultBox from './components/ResultBox';

var data_from_child = {}
const pullData_function = (data) => {
  data_from_child = data
  console.log('pulled data from child')
  console.log('pulled data is: ' , data_from_child)
}

export default function App() {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Header
          pullData_function = {pullData_function}
        ></Header>
        <ResultBox 
          pullData_function = {pullData_function}
        ></ResultBox>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'darkgreen',
    flex: 1,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'grey',
  },
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'grey',
  },
  
});
