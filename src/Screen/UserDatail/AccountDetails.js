import React from 'react';
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
import HeaderBox from '../../Component/HeaderBox';
import {IMAGEPATH} from '../../constants/ImagePath';
import InputBox from '../../Component/InputBox';

const AccountDetails = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerCss={{backgroundColor: COLORS.bg}}
        headerTitle={'account details'}
        titleCss={{color: '#fff'}}
        headerIcon={{tintColor: '#fff'}}
      />
      <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.5}>
          <Image
            style={styles.SamanthaImage}
            source={IMAGEPATH.SamanthaImage}
          />
        </TouchableOpacity>
<View style={styles.container}>
<InputBox
imageLogo={IMAGEPATH.userImage}
placeholder={'Rentalino'}
/>
<InputBox
imageLogo={IMAGEPATH.Email}
placeholder={'Rentalino@gmail.com'}
/>
<InputBox
imageLogo={IMAGEPATH.PhoneImage}
placeholder={' +971 4 325 0401'}
/>
<InputBox
imageCss={{width:15,height:15,tintColor:COLORS.gray}}
imageLogo={IMAGEPATH.passwordShow}
placeholder={'*********'}
hidePassword={IMAGEPATH.hidePassword}
/>
<InputBox
imageCss={{width:15,height:15,tintColor:COLORS.gray}}
imageLogo={IMAGEPATH.passwordShow}
placeholder={'*********'}
hidePassword={IMAGEPATH.hidePassword}
/>
<InputBox
imageLogo={IMAGEPATH.DateImage}
placeholder={'13/07/1995'}
/>
<ButtonBox
text={'Save'}
/>
</View>
       
      </ScrollView>
    </View>
  );
};

export default AccountDetails;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.white,
  },
  SamanthaImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  container:{
    paddingHorizontal:20,
    paddingVertical:15
  }
});
