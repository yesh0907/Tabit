import React from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, useAppSelector } from '../types';
import { selectPhoneNumber } from '../reducers/userSlice';
import VerificationInput from '../components/VerificationInput';


export default function VerificationScreen({ navigation }: RootStackScreenProps<'Verification'>) {
  let phoneNumber = useAppSelector(selectPhoneNumber);

  if (phoneNumber.length == 0) {
    phoneNumber = "your phone number";
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
            <Text style={styles.title}>Enter code sent to {'\n' + phoneNumber}</Text>
            <VerificationInput />
            <Text style={styles.helpTitle}>
              Didn't receive a code?
            </Text>
            <Text style={styles.helpResendCode}>
              Resend code
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.verificationSubmit}
        onPress={() => null}
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
    alignItems: 'flex-start',
  },
  title: {
    width: '100%',
    marginHorizontal: 40,
    fontSize: 30,
    marginBottom: 50,
  },
  helpTitle: {
    fontSize: 20,
    marginHorizontal: 40,
  },
  helpResendCode: {
    marginTop: 10,
    marginHorizontal: 40,
    color: Colors.green,
    fontSize: 18,
  },
  verificationSubmit: {
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
