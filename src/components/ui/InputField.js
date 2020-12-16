import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {color} from '../../utils/style-color';

export default function InputField({onchange, placeholder, ...rest}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={color.default}
      onChange={onchange}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: color.default,
    borderRadius: 25,
    color: color.default,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
  },
});
