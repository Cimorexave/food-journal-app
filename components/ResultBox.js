import React, {useState} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const ResultBox = (arg) => {
    let [resultText, setResultText] = useState("...........");
    let [calorieSum, setCalorieSum] = useState(0);

    arg.pullData_function({calorieSum: calorieSum , resultText: resultText})
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            You've done {resultText} so far! {"\n"}
            your calorie take is : {"\n"}
            <Text style= {styles.calorieSumText}> {calorieSum} </Text>
        </Text>
        <TouchableOpacity
        onPress={() => {
            setCalorieSum(0)
        }}
        style= {styles.clearBtn}>
            <Text style= {styles.clearBtnText}>Clear</Text>
        </TouchableOpacity>
    </View>
  )
}

export default ResultBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'lightgreen',
        borderStyle: 'solid',
        borderRadius: 10,
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: 10,
        padding: 10,
    },
    text: {
        fontSize: 20,
        color: 'white',
        position: 'absolute',
        top: 25,
        left: 25,
        lineHeight: 35
    },
    clearBtn: {
        backgroundColor: 'green',
        height: 60,
        width: 160,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 25,
        left: 25,
    },
    clearBtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    calorieSumText: {
        fontSize: 50,
        textAlign: 'center',
        lineHeight: 80
    }
})