import { StyleSheet } from "react-native";

import { View } from "./Themed";
import { Tabit as TabitInterface } from "../reducers/tabitsSlice";
import Indicator from "./Indicator";

type SwipeIndicatorsProps = {
    tabits: TabitInterface[],
    current: number,
}

export default function SwipeIndicators({ tabits, current }: SwipeIndicatorsProps) {
    const indicators = tabits.map(
        (tabit, index) => <Indicator key={index} active={index === current} />
    );

    return (
        <View style={styles.container}>
            {indicators}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: '10%',
    }
})