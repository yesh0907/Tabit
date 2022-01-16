import React from 'react';
import { MaterialCommunityIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, useAppDispatch, useAppSelector } from '../types';
import { login, selectPhoneNumber } from '../reducers/userSlice';
import VerificationInput from '../components/VerificationInput';


export default function VerificationScreen({ navigation }: RootStackScreenProps<'Verification'>) {
  const dispatch = useAppDispatch();
  let phoneNumber = useAppSelector(selectPhoneNumber);

  if (phoneNumber.length == 0) {
    phoneNumber = "your phone number";
  }

  function verify() {
    dispatch(login());
    navigation.navigate("Root");
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.turtle}>
        <MaterialCommunityIcons size={50} name="turtle" color={Colors.green} />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={35}
            color="black"
            style={styles.back}
          />
        </TouchableOpacity>
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
        onPress={verify}
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
  back: {
    marginLeft: 5,
    marginTop: 10
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
