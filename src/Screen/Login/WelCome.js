import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import ButtonBox from '../../Component/ButtonBox';
import {COLORS} from '../../constants/ColorPath';
import {IMAGEPATH} from '../../constants/ImagePath';
import InputBox from '../../Component/InputBox';
import TextHading from '../../Component/TextHading';
import SplashScreen from 'react-native-splash-screen';

const WelCome = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  });
  const [validation, setValidation] = useState({
    password: false,
  });

  const handerOnFocus = name => {
    setValidation(preValidations => ({...preValidations, [name]: true}));
  };
  const handerOnBlur = name => {
    setValidation(preValidations => ({...preValidations, [name]: false}));
  };
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
        <View style={styles.mainContainer}>
          <Image style={styles.mgfLogo} source={IMAGEPATH.mainLogo} />
          <View style={styles.textContainer}>
            <TextHading textTitle="WelCome" />
            <Text style={styles.signText}>Sign in to continue</Text>
          </View>
          <InputBox
            imageLogo={IMAGEPATH.passwordShow}
            placeholder="Password"
            hidePassword={IMAGEPATH.password}
            isValidation={validation.password}
            valueOfKey={'password'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
          />
          <ButtonBox
            text="Sign in"
            onPress={() => navigation.navigate('SignUp')}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.donText}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}> - Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default WelCome;
const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  mgfLogo: {
    width: '90%',
    height: 140,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 50,
  },
  textContainer: {
    marginTop: 55,
  },
  signText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.gry,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  donText: {
    color: COLORS.gray,
    fontSize: 13,
  },
  signUpText: {
    color: COLORS.orange,
    fontSize: 13,
  },
});
