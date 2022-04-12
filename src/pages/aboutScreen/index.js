

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 
const prefrence=["Fitness","Mental Health","Yoga","Physical Workout","Meditation","Cardio Workout",]
const Screen3 = ({ navigation }) => {
    return (
        <View>
            <View style={{paddingHorizontal:20,backgroundColor:"white",marginBottom:30}}>
            <Entypo name="user" size={100} color="black"  style={{textAlign:"center"}}/>
                <Text style={{marginBottom:20}}>Name: Rahul Roy</Text>
                <Text style={{marginBottom:20}}>Email: rahul@gmail.com</Text>
                <Text style={{marginBottom:20}}>Phone: 97979*****</Text>
                <Text style={{marginBottom:20}}>Age: 35 Years</Text>
                <Text style={{marginBottom:20}}>Disease: Diabetes and Blood Pressure</Text>
                <Text style={{marginBottom:20}}>Latest Checkup: 25 Jan 2022</Text>
                <Text style={{marginBottom:20}}>Consulted Doctor: Dr. Mehul Dhoni</Text>
                <Text style={{marginBottom:20}}>Doctor Mobile No.- 95959*****</Text>
                <Text style={{marginBottom:20}}>Medicines prescribed: Metformin 200mg.</Text>
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