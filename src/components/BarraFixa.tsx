import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import Feather from '@expo/vector-icons/Feather';

export default function BarraFixa() {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.barItem}>
        <Entypo name="home" size={24} color="black" />
        <Text style={styles.barText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItem}>
        <FontAwesome name="search" size={24} color="black" />
        <Text style={styles.barText}>Busca</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItem}>
        <FontAwesome5 name="coins" size={24} color="black" />
        <Text style={styles.barText}>Pontos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItem}>
        <Fontisto name="shopping-sale" size={24} color="black" />
        <Text style={styles.barText}>Cupons</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItem}>
        <Feather name="list" size={24} color="black" />
        <Text style={styles.barText}>Pedidos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
  },
  barText: {
    fontSize: 14,
    color: '#333',
  },
});
