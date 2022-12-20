import React from 'react';
import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import HeaderBox from '../../Component/HeaderBox';
import { COLORS } from '../../constants/ColorPath';
import { IMAGEPATH } from '../../constants/ImagePath';

const TransferHistory = ({ navigation }) => {
  return (
    <View style={{ flex: 1, }}>
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerTitle={'Transfer History'}
        titleCss={{ color: '#fff' }}
        headerIcon={{ tintColor: '#fff' }}
        headerCss={{ backgroundColor: COLORS.bg }}
      />
      <ScrollView style={styles.mainScrollView}>
        <View style={styles.mainContainer}>
          <TouchableOpacity activeOpacity={0.5} style={styles.touchableOpacityContainer}>
            <View style={styles.cardrowContainer}>
<View>
  <Image source={IMAGEPATH.UserGilImage}/>
</View>
<View>
  <Text>Angela Smith</Text>
  <Text>23 Jun 2022</Text>
</View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default TransferHistory;
const styles = StyleSheet.create({
  mainScrollView: {
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  touchableOpacityContainer: {
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  cardrowContainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  }


})

