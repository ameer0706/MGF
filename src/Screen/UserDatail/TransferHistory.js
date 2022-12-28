import React from 'react';
import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View, StatusBar, FlatList } from 'react-native';
import HeaderBox from '../../Component/HeaderBox';
import { COLORS } from '../../constants/ColorPath';
import { TransferHistoryData } from '../../constants/FlatListData';
import { IMAGEPATH } from '../../constants/ImagePath';

const TransferHistory = ({ navigation }) => {
  const TransferHistoryDataItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('TransferDetails')} activeOpacity={0.5} style={styles.touchableOpacityContainer}>
        <View style={styles.cardrowContainer}>
          <View>
            <Image source={item.UserGilImageConatiner} />
          </View>
          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text style={styles.angelaText}>{item.AngelaText}</Text>
            <Text style={styles.dataTitle}>{item.dateJun}</Text>
          </View>
          <View>
            <Text style={styles.goldtext}>{item.OunceContainer}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", width: '100%', justifyContent: "space-between", alignSelf: 'center' }}>
          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#ccc' }}>{item.Assettype}</Text>
            <Text style={{ textAlign: 'center', color: "#000", fontSize: 12, fontWeight: '600' }}>{item.Gold}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 12, color: '#ccc' }}>{item.marketvalue}</Text>
            <Text style={{ color: "#000", fontSize: 12, fontWeight: '600' }}>{item.Doler}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, }}>
      <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerTitle={'Transfer History'}
        titleCss={{ color: '#fff' }}
        headerIcon={{ tintColor: '#fff' }}
        headerCss={{ backgroundColor: COLORS.bg }}
      />
     
        <View style={styles.mainContainer}>
          <FlatList
            data={TransferHistoryData}
            keyExtractor={item => item.id}
            horizontal={false}
            renderItem={item => TransferHistoryDataItem(item)}
          />

      
      </View>
    </View>
  );
}

export default TransferHistory;
const styles = StyleSheet.create({

  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  touchableOpacityContainer: {
    backgroundColor: COLORS.white,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    margin:10
  },
  cardrowContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goldtext: {
    color: COLORS.bg,
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end'
  },
  angelaText: {
    color: COLORS.bg,
    fontSize: 18,
    fontWeight: '600'
  },
  dataTitle: {
    fontSize: 12, color: '#ccc'

  }

})

