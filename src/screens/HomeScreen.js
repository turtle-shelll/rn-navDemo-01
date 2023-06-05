import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CommonCss from '../assets/CommonCss';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>
            <Text>HomeScreen</Text>

            <View>
                <Pressable
                    style={({ pressed }) => ([{ opacity: pressed ? 0.5 : 1 }, CommonCss.commonButton])}
                    onPress={() => {
                        navigation.navigate("SearchScreen");
                    }}>
                    <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>navigate to SearchScreen</Text>
                </Pressable>
            </View>
        </View>
    )
}