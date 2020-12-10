import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from '../../utils/style-color';

export const Button = ({text}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color.default,
        borderRadius: 25,
        paddingVertical: 13,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 12,
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
