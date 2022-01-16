import { StyleSheet } from "react-native";

import { View, Text } from "./Themed"

type ContactCardProps = {
    phoneNumber: string
}

export default function ContactCard({ phoneNumber }: ContactCardProps) {
    return (
        <View style={[styles.container, styles.shadowProp]}>
            <Text style={styles.number}>{phoneNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 25,
        maxWidth: '70%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    number: {
        fontSize: 18,
        fontWeight: '400',
    }
});