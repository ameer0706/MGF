import React, { useState } from 'react';
import { Text, View, Image, StatusBar, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import HeaderBox from '../../Component/HeaderBox';
import { COLORS } from '../../constants/ColorPath';
import { AllOrderData } from '../../constants/FlatListData';
import { IMAGEPATH } from '../../constants/ImagePath';

const OrderHistory = ({ navigation }) => {
  const [select, setSelect] = useState('select1');

  const AllOrderDataItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.cardTouchableOpacity}>
        <View style={styles.rowCard}>
          <View style={{}}>
            <View style={styles.imageContainer}>
              <Image source={item.godImageImage} />
            </View>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text style={styles.goldtext}>{item.Gold}</Text>
            <Text style={styles.byy}>{item.byy}</Text>
          </View>
          <View style={{}}>
            <View style={{ flexDirection: 'row', alignSelf: "flex-end", }}>
              <Image style={{ marginRight: 6 }} source={item.leftTopA} />
              <View>
                <Text style={styles.ounce}>{item.ounce}</Text>
                <Text style={{...styles.dolerText,color:item.nagtive ? "red" : "green"}}>{item.puls}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardcontainerRow}>
          <View>
            <Text style={styles.avgText}>{item.buy}</Text>
            <Text style={styles.avgText1}>{item.aed}</Text>
          </View>
          <View>
            <Text style={styles.avgText}>{item.qty}</Text>
            <Text style={styles.avgText1}>{item.soropya}</Text>
          </View>
          <View>
            <Text style={styles.avgText}>{item.oder}</Text>
            <Text style={styles.avgText1}>{item.mak}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1, }}>
      <StatusBar backgroundColor={COLORS.bg} barStyle='light-content' />
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerTitle={'Transfer History'}
        titleCss={{ color: '#fff' }}
        headerIcon={{ tintColor: '#fff' }}
        headerCss={{ backgroundColor: COLORS.bg }}
      />
      {/* <ScrollView style={styles.mainScrollContainer}> */}
        <View style={styles.selectRowContainer}>
          <View style={styles.textView}>
            <TouchableOpacity onPress={() => setSelect('select1')}>
              <Text style={{ ...styles.allText, color: select == 'select2' ? '#ccc4' : '#fff', fontSize: 16 }}>All order</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textView}>
            <TouchableOpacity onPress={() => setSelect('select2')}>
              <Text style={{ ...styles.allText, color: select == 'select2' ? '#fff' : '#ccc4', fontSize: 16 }}>Pending orders</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainContainer}>
          {select == 'select1' ? (
            <View>
              <FlatList
                data={AllOrderData}
                Vertical
                keyExtractor={item => item.id}
                renderItem={item => AllOrderDataItem(item)}
              />
            </View>
          ) : select == 'select2' ? (
            <View>
              <Text>khan</Text>
            </View>
          ) : null

          }


        </View>
      {/* </ScrollView> */}
    </View>
  );
}


export default OrderHistory;
const styles = StyleSheet.create({
  mainScrollContainer: {
    backgroundColor: COLORS.white
  },
  mainContainer: {
    paddingHorizontal: 20,
  },
  selectRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.bg,
    paddingVertical: 10,
    paddingTop: 20
  },
  textView: {
    width: '50%'
  },
  allText: {
    color: COLORS.white,
    textAlign: 'center'
  },
  priceText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500'
  },
  goldText: {
    color: COLORS.gray
  },
  cardTouchableOpacity: {
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginTop: 15
  },
  rowCard: {
    width: '100%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imageContainer: {
    backgroundColor: COLORS.gray,
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldtext: {
    color: COLORS.bg,
    fontSize: 16,
    fontWeight: '600'
  },
  dolerText: {
    alignSelf: 'flex-end',
    color: 'green'
  },
  ounce: {
    color: COLORS.bg,
    fontWeight: 'bold',
    fontSize: 16
  },
  byy: {
    color: COLORS.bg,
    fontSize: 12
  },
  cardcontainerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  avgText: {
    color: COLORS.gray,
    fontSize: 12
  },
  avgText1: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center'
  }
})