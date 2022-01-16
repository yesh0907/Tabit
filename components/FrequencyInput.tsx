import React from "react"
import { StyleSheet } from "react-native"

import { View } from "./Themed"
import DayCell from "./DayCell"

type FrequencyInputProps = {
    setFreqHandler: ((id: number, active: boolean) => void)
}

export default function FrequencyInput({ setFreqHandler }: FrequencyInputProps) {
    return (
        <View style={styles.container}>
            <DayCell id={0} day="M" 
                updateState={setFreqHandler}
            />
            <DayCell id={1} day="T" 
                updateState={setFreqHandler}
            />
            <DayCell id={2} day="W" 
                updateState={setFreqHandler}
            />
            <DayCell id={3} day="Th" 
                updateState={setFreqHandler}
            />
            <DayCell id={4} day="F" 
                updateState={setFreqHandler}
            />
            <DayCell id={5} day="Sa" 
                updateState={setFreqHandler}
            />
            <DayCell id={6} day="Su" 
                updateState={setFreqHandler}
            />
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