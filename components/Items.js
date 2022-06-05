import React from 'react'
import { Text, StyleSheet, View, ScrollView  } from 'react-native'

const Items = ({items}) => {
    console.log(items)
  return (
    <ScrollView>
        {items.map( item => {
            return (
                <View>
                    <Text> food name is : {item.foodName} </Text> {'\n'}
                    <Text> food amount is : {item.foodAmount} </Text> {'\n'}
                    <Text> calorie count is : {item.calorieCount} </Text> {'\n'}
                </View>
            )
        } )}
    </ScrollView>
  )
}

export default Items

const styles = StyleSheet.create({

})