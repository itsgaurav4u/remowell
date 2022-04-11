

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
const prefrence=["Fitness","Mental Health","Yoga","Physical Workout","Meditation","Cardio Workout"]
const Screen3 = ({ navigation }) => {
    return (
        <View>
            <View style={{paddingHorizontal:20,backgroundColor:"white",marginBottom:30}}>
            <Entypo name="user" size={100} color="black"  style={{textAlign:"center"}}/>
                <Text style={{marginBottom:20}}>Name: Rahut</Text>
                <Text style={{marginBottom:20}}>Email: test@gmail.com</Text>
                <Text style={{marginBottom:20}}>Phone: 9797979797</Text>
                <Text style={{marginBottom:20}}>Gender: Male</Text>
<View style={{flexDirection:"row",flexWrap:"wrap"}}>
    {prefrence.map((item)=>{
        return <Text style={{width:"auto",padding:10,color:"white",backgroundColor:"black",borderRadius:8,marginLeft:10,marginBottom:10}}>{item}</Text>
    })}
</View>
            </View>
        </View>
    )
}

export default Screen3

const styles = StyleSheet.create({
    myText: {
        color: 'tomato',
        textAlign: 'center',
        fontSize: 18
    },
    Button: {
        backgroundColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 6,
        width: '50%'
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    }
})