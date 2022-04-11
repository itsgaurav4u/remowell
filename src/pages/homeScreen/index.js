import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { data } from "./utils"

const Screen1 = ({ navigation }) => {
    const handleNavigation=(data)=>{
        navigation.navigate("fitness",data)
    }
    return (
        <View>
            <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 20 }}>Choose a fitness option</Text>
            <View style={{ flexDirection: 'row', flexWrap: "wrap", justifyContent: "center", backgroundColor: '#F8F8F8' }}>
                {data.map((item, i) => {
                    return <TouchableOpacity style={{ width: "48%", height: 180, borderRadius: 4, overflow: "hidden", }} activeOpacity={.5} onPress={()=>handleNavigation(item)} >
                        <Image source={item.imgUrl} style={{ resizeMode: "contain", width: "90%", height: 150 }} />
                        <Text style={styles.myText}> {item.label}</Text>
                    </TouchableOpacity>
                })}
            </View>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    myText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },
    Button: {
        backgroundColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 6,
        width: '50%',
    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    }
})