
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from './components/Header';
import Items from './components/Items';
import ResultBox from './components/ResultBox';


let data = []
export default function App() {
  const [resultText, setResultText] = useState("...........")
  const [calorieSum, setCalorieSum] = useState(0);
  const [data_from_child, setData_from_child] = useState({})
  const [data_store, setdata_store] = useState([data_from_child])

  useEffect(() => {
    setdata_store([...data_store, data_from_child])
    console.log('data store is : ' ,data_store)

  }, [data_from_child])
  const pullData_function = (data) => {
    setData_from_child({...data_from_child, ...data})
    console.log('pulled data from child is: ' , data_from_child)
    
    setCalorieSum(parseInt(calorieSum) + parseInt(data_from_child.calorieCount))

    if (parseInt(calorieSum) < 1000)
      setResultText("Great")
      else if (parseInt(calorieSum) < 1500)
      setResultText("Good")
      else setResultText('Bad')
  }
  
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Header
          pullData_function = {pullData_function}
        ></Header>
        
        <Items foods = {data_store}></Items>
        
        <ResultBox 
          resultText = {resultText}
          calorieSum = {calorieSum}
          setCalorieSum = {setCalorieSum}
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
  scrollList: {
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'white',
    width: '90%',
    backgroundColor: 'pink',
    borderRadius: 5,
  }
});
