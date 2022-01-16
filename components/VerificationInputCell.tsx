import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Colors from '../constants/Colors';

type VerificationInputCellProps = {
    id: number,
    onChangeTextHandler: ((id: number, text: string) => void),
    refHandler?: any,
}

export default function VerificationInputCell(props: VerificationInputCellProps) {
    const { id, onChangeTextHandler, refHandler } = props;
    return (
        <TextInput
            style={styles.verificationInput}
            keyboardType='numeric'
            maxLength={1}
            returnKeyType='done'
            onChangeText={(digit) => {
                if (digit.length > 0) {
                    onChangeTextHandler(id, digit);
                }
            }}
            ref={refHandler}
        />
    )
}

const styles = StyleSheet.create({
    verificationInput: {
        backgroundColor: 'white',
        borderColor: Colors.green,
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        width: 55,
        height: 55,
        // marginHorizontal: 10,
        fontSize: 40,
        fontWeight: '300',
        textAlign: 'center',
    }
});
