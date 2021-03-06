import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from '../../utils/style-color';
import {Button} from '../ui/Button';

const ActionButton = ({label, text, onPress}) => {
  return (
    <View style={{marginBottom: 43, minWidth: 225}}>
      <Text
        style={{
          fontSize: 10,
          color: color.text.default,
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 8,
          fontWeight: '800',
        }}>
        {label}
      </Text>
      <Button text={text} onPress={onPress} />
    </View>
  );
};

export default ActionButton;
