import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ActionButton from '../components/welcomeAuth/ActionButton';
import {color} from '../utils/style-color';
import img from '../assets/img/scooter.png';
import {useSelector} from 'react-redux';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };

  const state = useSelector((state) => state.user);

  console.log('state', state);
  return (
    <View style={styles.wrapper}>
      <Image style={styles.innerWrapper} source={img} />
      <Text style={styles.title}>Selamat Datang</Text>
      <View style={{paddingHorizontal: 40}}>
        <ActionButton
          label="Silahkan masuk jika kamu sudah daftar"
          text="Login"
          onPress={() => handleGoTo('login')}
        />
        <ActionButton
          label="Sini daftar dulu kalo kamu belum punya akun"
          text="Register"
          onPress={() => handleGoTo('register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  innerWrapper: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: color.default,
    marginBottom: 76,
  },
});

export default WelcomeAuth;
