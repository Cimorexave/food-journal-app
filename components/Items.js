import React from 'react'
import { Text, StyleSheet, View  } from 'react-native'

const Items = ({items}) => {
    console.log(items)
  return (
    <View>
        {items.map( item => {
            return (
                <View>
                    <Text> food name is : {item.foodName} </Text> {'\n'}
                    <Text> food amount is : {item.foodAmount} </Text> {'\n'}
                    <Text> calorie count is : {item.calorieCount} </Text> {'\n'}
                </View>
            )
        } )}
    </View>
  )
}

export default Items