import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/ColorPath';
import {IMAGEPATH} from '../constants/ImagePath';

export default function UserProfileData({user, userData, onPress}) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={onPress} style={styles.userProfileData}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.userView}>{user && <Image source={user} />}</View>
          <Text style={styles.accountDeltils}>{userData}</Text>
        </View>
        <TouchableOpacity>
          <Image source={IMAGEPATH.leftImage} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
