
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import ResultBox from './components/ResultBox';


export default function App() {
  let [resultText, setResultText] = useState("...........");
  let [calorieSum, setCalorieSum] = useState(0);
  let [data_from_child, setData_from_child] = useState({})

  
  useEffect( () => {
    console.log('data from child changed')
    console.log(data_from_child.calorieCount)
    setCalorieSum(parseInt(calorieSum) + parseInt(data_from_child.calorieCount))
    console.log(calorieSum)

    if (parseInt(calorieSum) < 1000)
      setResultText("Great")
      else if (parseInt(calorieSum) < 1500)
      setResultText("Good")
      else setResultText('Bad')
      
  }, [data_from_child])

  const pullData_function = (data) => {
    setData_from_child({...data_from_child, ...data})
    console.log('pulled data from child is: ' , data_from_child)
  }
  
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Header
          pullData_function = {pullData_function}
        ></Header>
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
  
});
