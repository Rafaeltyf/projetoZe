import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarraFixa from './src/components/BarraFixa';
import { HomeScreen } from './src/components/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <HomeScreen />
      </View>
      <BarraFixa />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
