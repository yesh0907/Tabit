import React, { useState } from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { TextInput, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootStackScreenProps, useAppDispatch } from '../types';
import { updatePhoneNumber } from '../reducers/userSlice';

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const dispatch = useAppDispatch();

  const [number, setNumber] = useState("");

  function submit() {
    dispatch(updatePhoneNumber(number));
    navigation.push("Verification");
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
            <Text style={styles.title}>Welcome to Tabit!</Text>
            <View style={styles.separator} lightColor="#000" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.mobileContainer}>
              <Text style={styles.mobileTitle}>Enter your phone number</Text>
              <Text style={styles.mobileDetail}>
                We will send you a one-time
                verification code to this number
              </Text>
              <TextInput
                style={styles.mobileInput}
                placeholder="Enter your phone number"
                placeholderTextColor="#60605e"
                keyboardType='phone-pad'
                maxLength={10}
                returnKeyType='done'
                value={number}
                onChangeText={setNumber}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.mobileSubmit}
        onPress={submit}
      >
        <FontAwesome5
          name="arrow-right"
          size={40}
          color="white" />
      </TouchableOpacity>
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
    paddingTop: 45,
    paddingLeft: 10,
    alignSelf: 'flex-start',
  },
  outerBody: {
    flex: 2,
    width: '100%',
  },
  innerBody: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 20,
    marginBottom: 60,
    height: 1,
    width: '80%',
  },
  mobileContainer: {
    flex: 1,
    paddingHorizontal: 40,
  },
  mobileTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  mobileDetail: {
    fontWeight: '400',
    marginBottom: 20,
  },
  mobileInput: {
    backgroundColor: 'white',
    padding: 20,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
  },
  mobileSubmit: {
    alignSelf: 'flex-end',
    marginBottom: 50,
    marginRight: 40,
    backgroundColor: Colors.green,
    borderRadius: 60,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
