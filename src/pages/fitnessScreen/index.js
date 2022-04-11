import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view';
import { Video, AVPlaybackStatus } from 'expo-av';


const FirstRoute = (props) => {
    return <View style={{ flex: 1 }} >
        {props.data.session.map((item, i) => {
            return <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, marginTop: 20 }}>
                <TouchableOpacity onPress={() => props.setStatus({ ...props.status, isPlaying: true })} style={{width:"80%"}}><Text > <Text style={{ marginRight: 10 }}>{i + 1}.</Text> {item.label}</Text></TouchableOpacity>
                
                <Text> {item.duration} min </Text>


            </View>
        })}
    </View>
};

const SecondRoute = (props) => {
    return <View style={{ flex: 1 }} >
        <Text style={{ fontSize: 25, textAlign: "center", backgroundColor: "#FFFF99", marginVertical: 20 }}>To eat</Text>
        {props.data.diet.map((label, i) => {
            return <Text style={{ paddingHorizontal: 20, paddingBottom: 20 }}><Text style={{ marginRight: 10 }}>{i + 1}.</Text> {label}</Text>
        })}
        <Text style={{ fontSize: 25, textAlign: "center", backgroundColor: "#FFFF99", marginVertical: 20 }}>To Avoid</Text>

        {props.data.avoid.map((label, i) => {
            return <Text style={{ paddingHorizontal: 20, paddingBottom: 20 }}><Text style={{ marginRight: 10 }}>{i + 1}.</Text> {label}</Text>

        })}
    </View>
};

const renderScene = (props) => {
    switch (props.route.key) {
        case 'first':
            return <FirstRoute data={props.params} setStatus={props.setStatus} status={props.status} />;
        case 'second':
            return <SecondRoute data={props.params} />;
        default:
            return null;
    }
};

const Fitness = ({ navigation }) => {
    const [status, setStatus] = React.useState({});
    const video = React.useRef(null);

    const { params } = navigation.getState()?.routes?.[1]
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Session' },
        { key: 'second', title: 'Diet' },
    ]);
    useEffect(() => {
        if (status.isPlaying) {
            video.current.playAsync()
        }
    }, [status.isPlaying])
    return (
        <ScrollView>
            <View>
                <Text style={styles.myText}>{params.label}</Text>
                {status.isPlaying ?

                    <Video
                        ref={video}
                        style={{ width: "100%", height: 300, marginTop: -50 }}
                        source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                    />
                    : <Image source={params.imgUrl} style={{ width: "100%", height: 200 }} />}
                <View style={{ flex: 1, height: 600 }}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={({ route }) => renderScene({ route, params, setStatus, status })}
                        onIndexChange={setIndex}
                        initialLayout={{ width: "100%" }}
                    />
                </View>
            </View>

        </ScrollView>
    )
}

export default Fitness



const styles = StyleSheet.create({
    myText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        marginBottom: 20,
        position:"relative",
        top:10
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