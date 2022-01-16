import React, { useState, useRef } from 'react';
import { Keyboard, StyleSheet, TextInput } from 'react-native';

import { View } from './Themed';
import Cell from './VerificationInputCell';

export default function VerificationInput() {
    const [code, setCode] = useState("");

    const cell2 = useRef<TextInput>();
    const cell3 = useRef<TextInput>();
    const cell4 = useRef<TextInput>();

    function updateCode(id: number, digit: string) {
        console.log(digit);
        setCode(oldCode => oldCode + digit);
        if (id === 1) {
            if (cell2 && cell2.current) {
                cell2.current.focus();
            }
        }
        else if (id === 2) {
            if (cell3 && cell3.current) {
                cell3.current.focus();
            }
        }
        else if (id === 3) {
            if (cell4 && cell4.current) {
                cell4.current.focus();
            }
        }
        else if (id == 4) {
            Keyboard.dismiss();
        }
    }

    return (
        <View style={styles.container}>
            <Cell
                id={1}
                onChangeTextHandler={updateCode}
            />
            <Cell
                id={2}
                onChangeTextHandler={updateCode}
                refHandler={cell2}
            />
            <Cell
                id={3}
                onChangeTextHandler={updateCode}
                refHandler={cell3}
            />
            <Cell
                id={4}
                onChangeTextHandler={updateCode}
                refHandler={cell4}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flexDirection: "row",
        width: '100%',
        height: '30%',
        justifyContent: "space-evenly"
    },
});
