import React from "react"
import { StyleSheet } from "react-native"

import { View } from "./Themed"
import DayCell from "./DayCell"

export default function FrequencyInput() {
    return (
        <View style={styles.container}>
            <DayCell id={0} day="M" />
            <DayCell id={1} day="T" />
            <DayCell id={2} day="W" />
            <DayCell id={3} day="Th" />
            <DayCell id={4} day="F" />
            <DayCell id={5} day="Sa" />
            <DayCell id={6} day="Su" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '90%',
        height: '10%',
        justifyContent: "space-between",
        marginBottom: 40,
    }
})