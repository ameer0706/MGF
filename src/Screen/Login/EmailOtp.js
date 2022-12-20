import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import ButtonBox from '../../Component/ButtonBox';
import { COLORS } from '../../constants/ColorPath';
import { IMAGEPATH } from '../../constants/ImagePath';
import InputBox from '../../Component/InputBox';
import TextHading from '../../Component/TextHading';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const EmailOtp = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={{ flex: 1, }}>
        <StatusBar backgroundColor={'#FFFFFF'} barStyle="dark-content" />
        <View style={styles.mainContainer}>
          <Image style={styles.lockImage} source={IMAGEPATH.lockImage} />
          <TextHading textTitle={'Enter Email OTP'} />
          <View style={styles.otpContainer}>
            <Image source={IMAGEPATH.Email} />
            <OTPInputView
              style={{ width: '90%', height: 200, marginLeft: 10 }}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`)
              }}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
          <TextHading welComeText={styles.welComeText} textTitle={'Enter Mobile OTP'} />
          <View style={styles.otpContainer}>
            <Image source={IMAGEPATH.PhoneImage} />
            <OTPInputView
              style={{ width: '90%', height: 200, marginLeft: 10 }}
              pinCount={6}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`)
              }}
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend</Text>
          </TouchableOpacity>
          <ButtonBox onPress={() => navigation.navigate('BottomTabBar')} text={'continue'} />
        </View>
      </View>
    </ScrollView>
  );
}

export default EmailOtp;
const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  lockImage: {
    alignSelf: 'center',
    marginTop: 150
  },
  welComeText: {
    marginTop: 20
  },
  resendText: {
    textAlign: 'center',
    color: COLORS.orange,
    fontSize: 15,
    marginTop: 7
  },
  otpContainer: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    marginTop: 10
  },

  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: COLORS.black,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
    marginTop: -10
    ,
    color: COLORS.black
  },
})