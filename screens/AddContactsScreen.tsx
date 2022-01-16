import React, { useState } from 'react';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, useAppDispatch } from '../types';
import { updateContacts } from '../reducers/tabitsSlice';
import ContactCard from '../components/ContactCard';

export default function AddContactsScreen({ navigation }: RootStackScreenProps<'Add Accountability Buddy'>) {
  const dispatch = useAppDispatch();
  
  const [contacts, setContacts] = useState<string[]>([]);
  const [number, setNumber] = useState("");

  const contactsList = contacts.map((contact, idx) => (
    <ContactCard key={idx} phoneNumber={contact} />
  ));

  function addContact() {
    setContacts(oldContacts => [...oldContacts, number]);
    setNumber("");
  }

  function submitContacts() {
    dispatch(updateContacts(contacts));
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
            <Text style={styles.title}>
              Working with a friend is a great way to stay on track
            </Text>
            <View style={styles.formContainer}>
              <Text style={styles.formQuestion}>
                Add a friend's phone number to have them keep you accountable
              </Text>
              <View style={styles.addContactContainer}>
                <TextInput
                  style={styles.formTextInput}
                  placeholder="Enter phone number"
                  placeholderTextColor="#60605e"
                  keyboardType='phone-pad'
                  maxLength={10}
                  returnKeyType='done'
                  value={number}
                  onChangeText={setNumber}
                  onSubmitEditing={() => addContact()}
                />
                <Pressable style={styles.addContactBtn} onPress={() => addContact()}>
                  <Text style={styles.addContactBtnText}>
                    + Add
                  </Text>
                </Pressable>
              </View>
              {
                contacts.length == 0 ? null :
                  <Text style={styles.addedContactsText}>Added Contacts:</Text>
              }
              {contactsList}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.formSubmit}
        onPress={() => submitContacts()}
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
    fontSize: 30,
    fontWeight: '300',
    maxWidth: '90%',
  },
  formContainer: {
    flex: 1,
    marginTop: 40,
    width: '100%'
  },
  formQuestion: {
    fontSize: 18,
    marginBottom: 20,
    maxWidth: '90%',
  },
  formTextInput: {
    padding: 18,
    borderColor: Colors.green,
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 40,
    flex: 4,
    height: 60,
  },
  addContactContainer: {
    flexDirection: "row",
    height: '20%',
  },
  addContactBtn: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 5,
    borderColor: Colors.green,
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 2,
    height: 60,
  },
  addContactBtnText: {
    fontSize: 20,
    color: "white",
  },
  addedContactsText: {
    fontSize: 20,
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