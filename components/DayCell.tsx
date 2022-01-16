import React, { useState } from "react";

import { StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/Colors";

type DayCellProps = {
    id: number,
    day: string,
    updateState: ((id: number, active: boolean) => void),
}

export default function DayCell({ id, day, updateState }: DayCellProps) {
    const [active, setActive] = useState(false);

    return (
        <Pressable
            style={
                active ? styles.containerActive : styles.container
            }
            onPress={() => {
                setActive(status => !status);
                updateState(id, active);
            }}
        >
            <Text style={active ? styles.dayActive : styles.day}>{day}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    containerActive: {
        backgroundColor: Colors.green,
        borderColor: Colors.green,
        borderStyle: 'solid',
        borderRadius: 40,
        borderWidth: 1,
        width: 40,
        height: 40,
        justifyContent: "center"
    },
    container: {
        backgroundColor: "white",
        borderColor: Colors.green,
        borderStyle: 'solid',
        borderRadius: 40,
        borderWidth: 2,
        width: 40,
        height: 40,
        justifyContent: "center"
    },
    dayActive: {
        fontSize: 20,
        textAlign: 'center',
        color: "white",
    },
    day: {
        fontSize: 20,
        textAlign: 'center',
        color: Colors.green,
    }
});