import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { data } from "./utils"
import { Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

const Screen2 = ({ navigation }) => {
    const [listData, setListData] = useState(data)
    const [like, setLike] = useState({})
    const video = React.useRef();
    const handleLike = (i) => {
        setLike({ ...like, [i]: !like[i] })
    }
    const handleChange = (text) => {
        const dataFilter = data.filter((item) => {
            return item.category.find((cat) => cat.startsWith(text.toLowerCase()))
        })
        setListData(dataFilter)
    }
    return (
        <ScrollView >
            <TextInput
                inlineImageLeft='search_icon'
                style={{ width: "95%", height: 50, marginLeft: '2.5%', borderWidth: 1, borderRadius: 8, paddingLeft: 20, marginVertical: 10, backgroundColor: 'white' }}
                placeholder='Search'
                onChangeText={handleChange}

            />

            {listData.map((item, i) => {
                return <View style={{ marginBottom: 20, backgroundColor: "white" }}>
                    {item.type === "video" ?

                        <>
                            <Video
                                ref={video}
                                style={{ width: "100%", height: 250, }}
                                source={{
                                    uri: item.url,
                                }}
                                useNativeControls
                                resizeMode="cover"
                                isLooping
                            />
                        </>
                        : <Image source={item.url} style={{ width: "90%", height: 200, marginLeft: "5%", resizeMode: 'contain', overflow: 'hidden' }} />}

                    <View style={{ paddingHorizontal: 20 }}>
                        <Text style={{ marginVertical: 10, fontWeight: "700" }}>{item.label}</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 20, alignItems: "center", justifyContent: "space-between" }}><Text>Posted By: {item.author}</Text><Text>26k Views</Text>
                            <TouchableOpacity onPress={() => handleLike(i)}>
                                <AntDesign name="like2" size={24} color={like[i] ? "red" : "black"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            })}
        </ScrollView>
    )
}

export default Screen2



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
        width: '50%',

    },
    ButtonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#fff'
    }
})