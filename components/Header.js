import React, {useState, useEffect} from 'react';
import {View , StyleSheet, Text, Button, TextInput, TouchableOpacity} from 'react-native';

const addBtnHandler = () => {
        
}

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Test Text</Text>
      <TouchableOpacity
       onPress={addBtnHandler()}
       style={styles.addBtn}
      >
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
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
        padding: 5,
    },
    text: {
        color: 'green',
        fontSize:20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'grey',
        width: 200,
        height: 50,
    },
    addBtn: {
        backgroundColor: 'green',
        height: 40,
        width: 120,
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
    }
});