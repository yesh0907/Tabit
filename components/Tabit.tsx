import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { View, Text } from "./Themed";
import { Tabit as TabitInterface } from '../reducers/tabitsSlice';
import Layout from '../constants/Layout';
import { useAppDispatch } from "../types";
import { updateTabitStreak } from "../reducers/tabitsSlice";

type TabitProps = {
    tabit: TabitInterface,
}

export default function Tabit({ tabit }: TabitProps) {
    const dispatch = useAppDispatch();

    function mapDaysToString(days: number[]) {
        let result = "";
        const mapping = [
            "M",
            "T",
            "W",
            "Th",
            "F",
            "Sa",
            "Su"
        ];
        for (let i = 0; i < days.length; i++) {
            result += mapping[days[i]];
        }
        return result;
    }

    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={styles.name}>{tabit.name}</Text>
                <Text style={styles.detail}>
                    {mapDaysToString(tabit.freq)} until {tabit.end}
                </Text>
            </View>
            <Pressable 
            style={{
                flex: 2, justifyContent: 'flex-start',
                alignItems: 'center',
            }}
            onPress={() => dispatch(updateTabitStreak(tabit))}>
                <Text style={styles.fireEmoji}>
                    🔥
                </Text>
                <Text style={styles.streak}>
                    {tabit.streak}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Layout.window.width,
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 30,
        marginBottom: 20,
        textAlign: 'center',
    },
    detail: {
        fontSize: 18,
        marginBottom: 30,
        flexShrink: 1,
        textAlign: 'center',
    },
    fireEmoji: {
        fontSize: 90,
        textAlign: 'center',
    },
    streak: {
        fontSize: 70,
        textAlign: 'center'
    },
});