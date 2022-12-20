import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  FlatList,
} from 'react-native';
import {COLORS} from '../../constants/ColorPath';
import {FLATLLIST} from '../../constants/FlatListData';
import {IMAGEPATH} from '../../constants/ImagePath';

const Home = () => {
  const userListItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.5} style={styles.cardContainer}>
        <View style={styles.cardRow}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.backgroundColorImage}>
              <Image source={item.mainContainerImage} />
            </View>
            <Text style={{marginLeft: 8, color: '#000'}}>{item.Silver}</Text>
          </View>
          <View>
            <Text style={styles.textDollar}>{item.textdo}</Text>
            <Text style={{...styles.text245,color:item.nagtive ? "red" : "green"}}>{item.ss}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#181818'} barStyle="light-content" />
      <View style={styles.mainContainer}>
        <View style={styles.mainRow}>
          <TouchableOpacity>
            <Image source={IMAGEPATH.userLogo} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IMAGEPATH.notificationImage} />
          </TouchableOpacity>
        </View>
        <Text style={styles.balanceText}>Your Balance</Text>
        <Text style={styles.dollarText}>$ 8.250.000</Text>
      </View>
      
      <View style={styles.assetContainer}>
        <Text style={styles.assetText}>Asset</Text>
        <FlatList
        // horizontal={false}
          data={FLATLLIST}
          keyExtractor={item => item.id}
          renderItem={userListItem}
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.bg,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    padding: 20,
  },
  balanceText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  dollarText: {
    textAlign: 'center',
    fontSize: 40,
    color: COLORS.orange,
    marginBottom: 80,
  },
  assetContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  assetText: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: 310,
    marginVertical: 4,
    alignSelf: 'center',
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
