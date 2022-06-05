import React, {useEffect} from 'react'
import { Text, StyleSheet, View, ScrollView  } from 'react-native'
import { v4 as uuidv4 } from 'uuid';

const Items = ({foods}) => {
    useEffect(() => {
        console.log('useeffect fired')
        foods.map( (food)=> {
            if (food == {})
            foods.pop()
        })
    }, [foods])
    console.log(" foods are : " ,foods)
  return (
    <ScrollView style= {styles.scrollView}> 
        {
            foods.map(
                (food) => {
                    return(
                        <Text key={Math.random()*50}> food name is {food.foodName} ,
                        food amount is {food.foodAmount} , 
                        calorie counts is {food.calorieCount}</Text>
                    )
                }
            )
        }
    </ScrollView>
  )
}

export default Items

const styles = StyleSheet.create({
scrollView: {
    backgroundColor: 'white',
    color: 'black'
}
})