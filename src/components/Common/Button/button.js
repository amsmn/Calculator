import React from 'react';
import { Text, Pressable } from 'react-native';
import { Vibration } from 'react-native';

const Button = ({ onPress, text }) => {
  const handlePress = () => {
    Vibration.vibrate(35);
    onPress(text);
  };

  const isOperator = ['+', '-', '*', '/', '='].includes(text);
  const isSpecial = ['B', 'C'].includes(text);

  return (
    <Pressable
      style={{
        borderColor: '#3f4d5b',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: isSpecial ? '38%' : '25%',
        minHeight: '10%',
        flex: 1,
        backgroundColor: isOperator ? '#00b9d6' : '#303946',
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: isOperator || isSpecial ? 'white' : '#00b9d6',
          fontSize: 28,
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
