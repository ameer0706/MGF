import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { COLORS } from '../../constants/ColorPath';
import HeaderBox from '../../Component/HeaderBox';
import { IMAGEPATH } from '../../constants/ImagePath';
import Modals from '../../Component/Modals';
import UserProfileData from '../../Component/UserProfileData';

const Profile = ({ navigation }) => {
  const [isModalVisible, seTisModalVisible] = useState(false);
  const [cancelData, setCancelData] = useState();
  const changeModalVisible = bool => {
    seTisModalVisible(bool);
  };
  const setData = data => {
    setCancelData(data);
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerCss={{ backgroundColor: COLORS.bg }}
        headerTitle={'Profile'}
        titleCss={{ color: '#fff' }}
        headerIcon={{ tintColor: '#fff' }}
      />
      <ScrollView showsVerticalScrollIndicator={false} backgroundColor={'#fff'}>
        <View style={styles.profileContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.userImageContainer}>
            <Image style={styles.userimage} source={IMAGEPATH.SamanthaImage} />
          </TouchableOpacity>
          <Text style={styles.SamanthaText}>Samantha</Text>
          <View style={styles.emailRow}>
            <Image style={styles.emailContainer} source={IMAGEPATH.Email} />
            <Text style={styles.gmailText}>Samantha@gamil.com</Text>
          </View>
        </View>
        <View style={styles.paddingHorizontal}>
          <TouchableOpacity activeOpacity={0.5} style={styles.gitContainer}>
            <View style={styles.gitRow}>
              <Image source={IMAGEPATH.GifatImage} />
              <View style={styles.leftContainer}>
                <Text style={styles.fundsText}>Funds Available:</Text>
                <Text style={styles.dolaerText}>$150.000</Text>
              </View>
            </View>
          </TouchableOpacity>
          <UserProfileData
            onPress={() => navigation.navigate('AccountDetails')}
            user={IMAGEPATH.userIcons}
            userData="Account details"
          />
          <UserProfileData
            onPress={() => navigation.navigate('TransferHistory')}
            user={IMAGEPATH.Transfer}
            userData="Transfer History"
          />
          <UserProfileData
            onPress={() => navigation.navigate('OrderHistory')}
            user={IMAGEPATH.order}
            userData="Order History"
          />
          <UserProfileData user={IMAGEPATH.Settings} userData="Settings" />
          <UserProfileData
            user={IMAGEPATH.BillingDetails}
            userData="Billing Details"
          />
          <UserProfileData
            onPress={() => navigation.navigate('Notification')}
            user={IMAGEPATH.Notifications}
            userData="Notifications"
          />
          <UserProfileData
            onPress={() => navigation.navigate('ContactUs')}
            user={IMAGEPATH.CallImage}
            userData="Contact Us"
          />
          <UserProfileData
            onPress={() => changeModalVisible(true)}
            user={IMAGEPATH.LogoutImage}
            userData="Logout"
          />
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            nRequestClose={() => changeModalVisible(false)}>
            <Modals CancelModalVisible={changeModalVisible} setData={setData} />
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: COLORS.bg,
    alignItems: 'center',
    justifyContent: 'center',
    height: 230,
  },
  userimage: {
    width: 90,
    height: 90,
  },
  SamanthaText: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '600',
    marginTop: 5,
  },
  gmailText: {
    color: COLORS.white,
    fontSize: 11,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  emailContainer: {
    tintColor: COLORS.white,
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
  gitContainer: {
    backgroundColor: COLORS.white,
    elevation: 5,
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: -35,
    marginBottom: 10,
  },
  gitRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fundsText: {
    color: COLORS.bg,
    fontSize: 10,
  },
  dolaerText: {
    color: COLORS.bg,
    fontWeight: '500',
  },
  leftContainer: {
    marginLeft: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 20,
  },
  userProfileData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  userView: {
    backgroundColor: COLORS.userColor,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
  },
  accountDeltils: {
    color: COLORS.black,
    fontSize: 18,
    marginLeft: 10,
  },

  //Modal//
  touchableOpacity: {
    backgroundColor: 'red',
    paddingHorizontal: 50,
  },
  modalText: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
