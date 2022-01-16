import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps, useAppSelector } from '../types';
import Layout from '../constants/Layout';
import Tabit from '../components/Tabit';
import SwipeIndicators from '../components/SwipeIndicators';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [currentView, setCurrentView] = useState(0);
  const tabits = useAppSelector(state => state.tabits);
  console.log(tabits);
  const width = Layout.window.width;

  function handleScroll(event: any) {
    const offset = event.nativeEvent.contentOffset.x;
    if (offset % width === 0) {
      setCurrentView(offset / width);
    }
  }

  const tabitViews = tabits.map((tabit, index) => <Tabit key={index} tabit={tabit} />);
  
  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {tabitViews}
      </ScrollView>
      <SwipeIndicators tabits={tabits} current={currentView} />
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
