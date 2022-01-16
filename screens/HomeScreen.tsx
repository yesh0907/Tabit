import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps, useAppSelector } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const tabits = useAppSelector(state => state.tabits);
  console.log(tabits);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
