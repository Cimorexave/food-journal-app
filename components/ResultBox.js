import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
let resultText, calorieSum;
const ResultBox = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
            You've done {resultText} so far!
            your calorie take is :
            {calorieSum}
        </Text>
    </View>
  )
}

export default ResultBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
        borderColor: 'white',
        borderStyle: 'solid',
        borderRadius: 10,
        width: '85%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    text: {
        fontSize: 20,
    },
})