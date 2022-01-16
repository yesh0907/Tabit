import React, { useState } from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, useAppDispatch } from '../types';
import { addTabit } from '../reducers/tabitsSlice';
import FrequencyInput from '../components/FrequencyInput';
import DatePicker from '../components/DatePicker';

export default function AddTabitScreen({ navigation }: RootStackScreenProps<'Add Tabit'>) {
    const dispatch = useAppDispatch();
    
    const [name, setName] = useState("");
    const [freq, setFreq] = useState<number[]>([]);
    const [endDate, setEndDate] = useState(new Date());

    function updateFreq(id: number, active: boolean) {
        if (active) {
            setFreq(prevState => prevState.filter(d => d !== id));
        }
        else {
            setFreq(prevState => [...prevState, id]);
        }
    }

    function submitForm() {
        dispatch(addTabit({ 
            name, freq, streak: 0, end: endDate.toDateString() 
        }));
        navigation.navigate("Root");
    }

    return (
        <View style={styles.container}>
            <View style={styles.turtle}>
                <MaterialCommunityIcons size={50} name="turtle" color={Colors.green} />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                style={styles.outerBody}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.innerBody}>
                        <Text style={styles.title}>Add a Tabit</Text>
                        <View style={styles.formContainer}>
                            <Text style={styles.formQuestion}>
                                What habit would you like to work on?
                            </Text>
                            <TextInput
                                style={styles.formTextInput}
                                placeholder="Enter your habit"
                                placeholderTextColor="#60605e"
                                maxLength={256}
                                returnKeyType='next'
                                value={name}
                                onChangeText={setName}
                            />

                            <Text style={styles.formQuestion}>
                                How often would you like to do this?
                            </Text>
                            <FrequencyInput setFreqHandler={updateFreq}/>

                            <Text style={styles.formQuestion}>
                                How long do you want to do it for?
                            </Text>
                            <DatePicker date={endDate} setDateHandler={(newDate: Date) => setEndDate(newDate)}/>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <TouchableOpacity
                style={styles.formSubmit}
                onPress={() => submitForm()}
            >
                <FontAwesome5
                    name="arrow-right"
                    size={40}
                    color="white" />
            </TouchableOpacity>
            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    turtle: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10,
        alignSelf: 'flex-start',
    },
    outerBody: {
        flex: 8,
        width: '100%',
    },
    innerBody: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    title: {
        fontSize: 45,
        fontWeight: '300'
    },
    formContainer: {
        flex: 1,
        marginTop: 40,
        width: '100%'
    },
    formQuestion: {
        fontSize: 18,
        marginBottom: 20,
    },
    formTextInput: {
        backgroundColor: 'white',
        padding: 14,
        borderColor: Colors.green,
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 40,
        maxWidth: '90%'
    },
    formSubmit: {
        alignSelf: 'flex-end',
        marginBottom: 40,
        marginRight: 40,
        backgroundColor: Colors.green,
        borderRadius: 60,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});