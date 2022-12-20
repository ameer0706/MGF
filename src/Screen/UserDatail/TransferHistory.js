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
  touchableOpacity: {
    backgroundColor: COLORS.white,
    borderRadius: 7,
    elevation: 5,
    padding: 10
  },
  touchableOpacityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  smithText: {
    color: COLORS.bg,
    fontSize: 17,
    fontWeight: '600'
  },
  dateText: {
    color: COLORS.gray,
    fontSize: 13
  },
  goldText: {
    color: COLORS.bg,
    fontSize: 13,
    //  textAlign: 'center'
  },
  typeText: {
    color: COLORS.gray,
    fontSize: 14
  },
  ounceText: {
    color: COLORS.bg,
    fontWeight: '500',
    fontSize: 16,
    alignSelf:'flex-end'
  },
  dolr: {
    color: COLORS.bg,
    fontWeight: 500,
    fontSize: 15
  },
  rowData:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  imageView:{
    width:'17%',
  },
  textContainer:{
    width:'33%',
  }

  
})

{/* <TouchableOpacity style={styles.touchableOpacity}>
        
<View style={styles.rowData}>
<View style={styles.imageView}>
<Image source={IMAGEPATH.UserGilImage} />
</View>
<View style={styles.textContainer}>
<Text style={styles.smithText}>Angela Smith</Text>
                  <Text style={styles.dateText}>23 Jun 2022</Text>
</View>
<View style={{width:'50%'}}>
<Text style={styles.ounceText}>100 Ounce</Text>
</View>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',width:'83%',alignSelf:'center'}}>
<View>
  <Text style={styles.typeText}>Asset type</Text>
  <Text style={styles.goldText}>Gold</Text>
</View>
<View>
  <Text style={styles.typeText}>market value</Text>
  <Text style={styles.goldText}>$ 28.3495.00</Text>
</View>
</View>

          </TouchableOpacity> */}