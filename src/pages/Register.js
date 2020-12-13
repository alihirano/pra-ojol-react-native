import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import InputField from '../components/ui/InputField';
import ActionButton from '../components/welcomeAuth/ActionButton';
import {color} from '../utils/style-color';
import IllustrationRegister from '../assets/img/registration.svg';
import IllustrationBack from '../assets/img/prev.svg';
import {useDispatch} from 'react-redux';
import {saveDataUser} from '../redux/action';

const Register = () => {
  useEffect(() => {
    console.log('debugger');
  }, []);

  const dispatch = useDispatch();

  const [inputForm, setinputForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handlerInputForm = (value, name) => {
    console.log(value, name);
    setinputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const sendData = () => {
    console.log(inputForm);

    dispatch(saveDataUser(inputForm));
  };

  return (
    <View style={{padding: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <IllustrationBack height={25} width={25} />
        <IllustrationRegister
          height={115}
          width={105}
          style={style.illustration}
        />
        <Text style={style.title}>Silahkan di isi untuk proses registrasi</Text>
        <View style={style.viewHight(64)} />
        <InputField
          placeholder="Nama Lengkap"
          value={inputForm.fullName}
          onChangeText={(value) => handlerInputForm(value, 'fullName')}
        />
        <View style={style.viewHight(32)} />

        <InputField
          placeholder="Email"
          value={inputForm.email}
          onChangeText={(value) => handlerInputForm(value, 'email')}
        />
        <View style={style.viewHight(32)} />
        <InputField
          placeholder="Password"
          value={inputForm.password}
          onChangeText={(value) => handlerInputForm(value, 'password')}
          secureTextEntry={true}
        />
        <View style={style.viewHight(83)} />
        <ActionButton text="Registration" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

const style = {
  illustration: {
    marginTop: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: color.default,
    marginTop: 16,
    maxWidth: 200,
  },
  viewHight: (val) => {
    return {
      height: val,
    };
  },
};

export default Register;
