import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './components/authentification/Test';

/* Partie servant à inclure tous les components */

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Test/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1ecd9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

