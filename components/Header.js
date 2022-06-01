import React, {useState, useEffect} from 'react';
import {View , StyleSheet, Text, Button, TextInput, TouchableOpacity} from 'react-native';


const Header = () => {
  const [foodName, setFoodName] = useState("")
  const [foodAmount, setFoodAmount] = useState("")
  const [calorieCount, setCalorieCount] = useState("")
  return (
    <View style={styles.header}>
      <Text style={styles.text}>
          input the food name, it's amount and approximated calories for it.
      </Text>
      <TouchableOpacity
       onPress={() => {
         
       }}
       style={styles.addBtn}
      >
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
      <View style={styles.inputRow}>
        <TextInput
        style={styles.textInput}
        value={foodName}
        placeholder= 'food...'
        ></TextInput>
        <TextInput 
        style={styles.textInput}
        value={foodAmount}
        placeholder= 'amount...'
        ></TextInput>
        <TextInput 
        style={styles.textInput}
        value={calorieCount}
        placeholder= 'calories...'
        ></TextInput>
      </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flex: 1,
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'lightgreen',
        flexDirection: 'row',
        padding: 10,
        width: '90%',
        flexWrap: 1,
        justifyContent: 'space-evenly'
        
    },
    text: {
        color: 'white',
        fontSize: 12,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'grey',
        width: 200,
        height: 50,
        textAlign: 'center',
    },
    addBtn: {
        backgroundColor: 'green',
        height: 40,
        width: 120,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'grey',
        height: 40,
        width: 100,
        backgroundColor: 'white',
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingTop: 10,
        borderRadius: 10,
    }
});