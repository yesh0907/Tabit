import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

import { View } from "./Themed";

type IndicatorProps = {
    active: boolean,
}

export default function Indicator({ active }: IndicatorProps) {
    return (
        <View style={active ? styles.indicatorActive : styles.indicator} />
    )
}

const styles = StyleSheet.create({
    indicatorActive: {
        width: 12,
        height: 12,
        backgroundColor: Colors.green,
        borderRadius: 40,
        borderColor: Colors.green,
        marginRight: 15,
    },
    indicator: {
        width: 12,
        height: 12,
        backgroundColor: "white",
        borderRadius: 40,
        borderColor: Colors.green,
        borderWidth: 2,
        marginRight: 15,
    },
});