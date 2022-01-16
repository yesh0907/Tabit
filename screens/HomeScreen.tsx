import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps, useAppSelector } from '../types';
import Tabit from '../components/Tabit';
import SwipeIndicators from '../components/SwipeIndicators';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const tabits = useAppSelector(state => state.tabits);
  console.log(tabits);
  
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Tabit tabit={tabits[0]} />
        <Tabit tabit={tabits[1]} />
        <Tabit tabit={tabits[2]} />
      </ScrollView>
      <SwipeIndicators tabits={tabits} current={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
