import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Button from './src/components/Common/Button/button';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (buttonPressed) => {
    setDisplayValue((prevValue) => {
      if (buttonPressed === 'B') return prevValue.slice(0, -1);
      if (buttonPressed === 'C') return '';
      if (buttonPressed === '=') return calculateResult(prevValue);
      return prevValue + buttonPressed;
    });
  };

  const calculateResult = (expression) => {
    try {
      return (parseFloat(eval(expression).toFixed(10))).toString();
    } catch (error) {
      return 'Error';
    }
  };

  const buttons = ['C', 'B', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <View style={styles.container}>
      <View style={styles.resultArea}>
        <Text style={styles.resultText}>{displayValue}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.buttons} keyboardShouldPersistTaps="handled">
        {buttons.map((button) => (
          <Button key={button} onPress={handleButtonPress} text={button} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282f3b',
    justifyContent: 'flex-end',
  },
  resultArea: {
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    paddingBottom: 30,
  },
  resultText: {
    color: '#00b9d6',
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingBottom: 10,
    borderColor: '#3f4d5b',
    borderTopWidth: 1,
  },
});
