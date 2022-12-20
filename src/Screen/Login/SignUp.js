import React, {useState} from 'react';
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
import Dropdowns from '../../Component/Dropdowns';
import {IMAGEPATH} from '../../constants/ImagePath';
import InputBox from '../../Component/InputBox';
import TextHading from '../../Component/TextHading';

const SignUp = ({navigation}) => {
  const [validation, setValidation] = useState({
    fullName: false,
    emailName: false,
    mobileNumber: false,
    passwords: false,
    confirmPassword: false,
    date: false,
    dropDown1: false,
    dropDown2: false,
  });

  const handerOnFocus = name => {
    setValidation(preValidations => ({...preValidations, [name]: true}));
  };
  const handerOnBlur = name => {
    setValidation(preValidations => ({...preValidations, [name]: false}));
  };
const currencyList = [
  
      { label: 'Sokin khan', value: '1' },
      { label: 'Akram khan', value: '2' },
      { label: 'Laden khan', value: '3' },
      { label: 'Altaf khan', value: '4' },
      { label: 'Irfan khan', value: '5' },
      { label: 'Altaf lala', value: '6' },
    
]
  const CountryData =[
    { label: 'hoeel khan', value: '1' },
      { label: 'hey khan', value: '2' },
      { label: 'kamd khan', value: '3' },
  ]
  return (
    <ScrollView
      style={styles.scrollViewContainer}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
        <View style={styles.mainContainer}>
          <Image style={styles.logoContainer} source={IMAGEPATH.SignUpLogo} />
          <View style={styles.signContainer}>
            <TextHading textTitle="Sign Up" />
            <Text style={styles.signText}>
              Please provide following details for your new account
            </Text>
          </View>
          <InputBox
            placeholder="Full name"
            imageLogo={IMAGEPATH.userImage}
            isValidation={validation.fullName}
            valueOfKey={'fullName'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
          />
          <InputBox
            placeholder="Email"
            imageLogo={IMAGEPATH.Email}
            isValidation={validation.emailName}
            valueOfKey={'emailName'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
          />
          <InputBox
            placeholder="Mobile number"
            imageLogo={IMAGEPATH.PhoneImage}
            isValidation={validation.mobileNumber}
            valueOfKey={'mobileNumber'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
          />
          <InputBox
            placeholder="Password"
            imageLogo={IMAGEPATH.passwordShow}
            isValidation={validation.passwords}
            valueOfKey={'passwords'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
          />
          <InputBox
            placeholder="confirm Password"
            imageLogo={IMAGEPATH.passwordShow}
            isValidation={validation.confirmPassword}
            valueOfKey={'confirmPassword'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
          />
          <Dropdowns
            date={IMAGEPATH.DateImage}
            placeholder={'customer based currency'}
            isValidation={validation.dropDown1}
            valueOfKey={'dropDown1'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
            data={currencyList}
          />
          <InputBox
            placeholder="Date of Birth"
            imageLogo={IMAGEPATH.DateImage}
            isValidation={validation.date}
            valueOfKey={'date'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
          />
          <Dropdowns
            placeholder={'Country'}
            isValidation={validation.dropDown2}
            valueOfKey={'dropDown2'}
            onFocus={handerOnFocus}
            onBlur={handerOnBlur}
            data={CountryData}
          />
          <ButtonBox onPress={() => navigation.navigate('EmailOtp')}
           text="Sign Up" />
          <View style={styles.bottomContainer}>
            <Text style={styles.donText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}> - Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  logoContainer: {
    resizeMode: 'contain',
    width: '100%',
    height: 180,
    marginTop: 30,
  },
  signContainer: {
    marginTop: 25,
  },
  signText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 1,
    color: COLORS.gry,
    width: '70%',
    alignSelf: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 20,
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
