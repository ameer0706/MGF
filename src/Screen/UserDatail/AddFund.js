import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ButtonBox from '../../Component/ButtonBox';
import HeaderBox from '../../Component/HeaderBox';
import {COLORS} from '../../constants/ColorPath';

const AddFund = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerTitle={'Add Fund'}
        headerCss={{backgroundColor: COLORS.white}}
      />
      <View style={styles.mainContaimer}>
        <View style={styles.availableConatinerTop}>
          <Text style={styles.enterAmount}>Enter amount</Text>
          <View style={styles.boderContainer}></View>
        </View>
        <Text style={styles.chooseBank}>Choose Payment Method</Text>
       



       
          <ButtonBox text={'Add Fund'} />
       
      </View>
    </View>
  );
};

export default AddFund;
const styles = StyleSheet.create({
  mainContaimer: {
    paddingHorizontal: 30,
  },
  availableConatinerTop: {
    marginTop: 30,
  },
  enterAmount: {
    textAlign: 'center',
    color: '#121212',
    fontSize: 20,
  },
  boderContainer: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    marginTop: 7,
    marginBottom: 25,
  },
  chooseBank: {
    color: '#121212',
    fontSize: 22,
    fontWeight: '700',
  },
});
