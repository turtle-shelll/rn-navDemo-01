import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CommonCss from '../assets/CommonCss';

export default function SearchScreen() {
    const navigation = useNavigation();
    return (
        <View>
            <Text>SearchScreen</Text>
            <Text>SearchScreen</Text>
            <Text>SearchScreen</Text>
            <Text>SearchScreen</Text>

            <View>
                <Pressable
                    style={({ pressed }) => ([{ opacity: pressed ? 0.5 : 1 }, CommonCss.commonButton])}
                    onPress={() => {
                        navigation.navigate("HomeScreen");
                    }}
                >
                    <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>navigate to HomeScreen</Text>
                </Pressable>
            </View>
        </View>
    )
}