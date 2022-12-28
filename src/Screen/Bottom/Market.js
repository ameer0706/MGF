import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../constants/ColorPath';
import {FLATLLISTDATA} from '../../constants/FlatListData';
import HeaderBox from '../../Component/HeaderBox';

const Market = ({navigation}) => {
  const userListItemData = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('OrderDetails')} activeOpacity={0.5} style={styles.cardContainer}>
        <View style={styles.cardRow}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.backgroundColorImage}>
              <Image source={item.mainContainerImage} />
            </View>
            <Text style={{marginLeft: 8, color: '#000'}}>{item.Silver}</Text>
          </View>
          <View>
            <Text style={styles.textDollar}>{item.textdo}</Text>
            <Text style={styles.text245}>{item.ss}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />

<HeaderBox onPress={() => navigation.goBack()} headerTitle="Market"/>
      <FlatList
        data={FLATLLISTDATA}
        keyExtractor={item => item.id}
        Vertical
        renderItem={item => userListItemData(item)}
      />
    </View>
  );
};

export default Market;
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 320,
    marginVertical: 10,
    alignSelf: 'center',
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backgroundColorImage: {
    backgroundColor: COLORS.Purple,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text245: {
    alignSelf: 'flex-end',
    color: COLORS.red,
    marginTop: 2,
  },
  textDollar: {
    color: COLORS.black,
    fontWeight: '500',
  },
});
