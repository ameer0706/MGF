import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderBox from '../../Component/HeaderBox';
import {COLORS} from '../../constants/ColorPath';
import {AllOrderData, PendingOrders} from '../../constants/FlatListData';
import {IMAGEPATH} from '../../constants/ImagePath';
import RBSheet from 'react-native-raw-bottom-sheet';
import ButtonBox from '../../Component/ButtonBox';
import Button from '../../Component/Button';
import Modal from 'react-native-modal';

const OrderHistory = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [isModal, setModal] = useState(false);

  const toleModal = () => {
    setModal(!isModal);
  };

  const refRBSheet = useRef();

  const [select, setSelect] = useState('select1');

  const [count, setCount] = useState(586000);
  const [counat, setCounat] = useState(50);

  const AllOrderDataItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.cardTouchableOpacity}>
        <View style={styles.rowCard}>
          <View style={{}}>
            <View style={styles.imageContainer}>
              <Image source={item.godImageImage} />
            </View>
          </View>
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <Text style={styles.goldtext}>{item.Gold}</Text>
            <Text style={styles.byy}>{item.byy}</Text>
          </View>
          <View style={{}}>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <Image style={{marginRight: 6}} source={item.leftTopA} />
              <View>
                <Text style={styles.ounce}>{item.ounce}</Text>
                <Text
                  style={{
                    ...styles.dolerText,
                    color: item.nagtive ? 'red' : 'green',
                  }}>
                  {item.puls}
                </Text>
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
    );
  };

  const PendingOrdersItem = ({item}) => {
    return (
      <View style={styles.cardTouchableOpacity}>
        <View style={styles.rowCard}>
          <View style={{}}>
            <View style={styles.imageContainer}>
              <Image source={item.godImageImage} />
            </View>
          </View>
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <Text style={styles.goldtext}>{item.Gold}</Text>
            <Text style={styles.byy}>{item.byy}</Text>
          </View>
          <View style={{}}>
            <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
              <Image style={{marginRight: 6}} source={item.leftTopA} />
              <View>
                <Text style={styles.ounce}>{item.ounce}</Text>
                <Text
                  style={{
                    ...styles.dolerText,
                    color: item.nagtive ? 'red' : 'green',
                  }}>
                  {item.puls}
                </Text>
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
        <View style={styles.boderWidthContainer}></View>
        <View style={styles.cancelContainer}>
          <TouchableOpacity style={styles.cardC} onPress={toggleModal}>
            <Image source={item.cancelImage} />
            <Text style={styles.cancelText}>{item.cancel}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardC1}
            onPress={() => refRBSheet.current.open()}>
            <Image source={item.UpdateImage} />
            <Text style={styles.cancelText1}>{item.Update}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerTitle={'Transfer History'}
        titleCss={{color: '#fff'}}
        headerIcon={{tintColor: '#fff'}}
        headerCss={{backgroundColor: COLORS.bg}}
      />
      {/* <ScrollView style={styles.mainScrollContainer}> */}
      <View style={styles.selectRowContainer}>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => setSelect('select1')}>
            <Text
              style={{
                ...styles.allText,
                color: select == 'select2' ? '#ccc4' : '#fff',
                fontSize: 16,
              }}>
              All order
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textView}>
          <TouchableOpacity onPress={() => setSelect('select2')}>
            <Text
              style={{
                ...styles.allText,
                color: select == 'select2' ? '#fff' : '#ccc4',
                fontSize: 16,
              }}>
              Pending orders
            </Text>
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
            <FlatList
              data={PendingOrders}
              keyExtractor={item => item.id}
              Vertical
              renderItem={item => PendingOrdersItem(item)}
            />

            <View>
              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                height={420}
                customStyles={{}}>
                <View style={styles.bottomSheetContainer}>
                  <View style={styles.bottomSheetRow}>
                    <View style={styles.imageContainer}>
                      <Image source={IMAGEPATH.usdImage} />
                    </View>
                    <View style={{flex: 1, paddingHorizontal: 10}}>
                      <Text style={styles.usdTextContainer}>USD</Text>
                    </View>
                    <View>
                      <Text style={styles.dolerContainer}>$88,966.43</Text>
                      <Text style={styles.bottomtext}>-2.45%</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.boderBottomSheet}></View>
                <View style={styles.bottomSheetContainer1}>
                  <View style={styles.buttonRow}>
                    <View style={styles.buttonCsss}>
                      <Button buttonText="Limit" />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        buttonCssContainer={styles.buttonCssContainer}
                        buttonText="Market"
                      />
                    </View>
                  </View>
                  <View style={styles.countContainer}>
                    <TouchableOpacity onPress={() => setCount(count - 10)}>
                      <Image source={IMAGEPATH.mainesImage} />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{count}</Text>
                    <TouchableOpacity onPress={() => setCount(count + 10)}>
                      <Image source={IMAGEPATH.pulsImage} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: '#ccc',
                      marginTop: 10,
                    }}></View>
                  <View style={styles.countContainer}>
                    <TouchableOpacity onPress={() => setCounat(counat - 10)}>
                      <Image source={IMAGEPATH.mainesImage} />
                    </TouchableOpacity>
                    <Text style={styles.countText}>{counat}</Text>
                    <TouchableOpacity onPress={() => setCounat(counat + 10)}>
                      <Image source={IMAGEPATH.pulsImage} />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: '#ccc',
                      marginTop: 10,
                    }}></View>
                  <View>
                    <Text style={styles.dolerContainer1}>$4568.000</Text>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderColor: '#ccc',
                        marginTop: 10,
                        marginBottom: 10,
                      }}></View>
                  </View>
                  <ButtonBox onPress={toleModal} text={'Update now'} />
                </View>
              </RBSheet>
            </View>
            <Modal isVisible={isModalVisible}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    paddingVertical: 20,
                  }}>
                  <View style={{paddingHorizontal: 30}}>
                    <Image
                      style={{alignSelf: 'center'}}
                      source={IMAGEPATH.modalRogImage}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#000',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      Are you sure you want to cancel this order
                    </Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      borderWidth: 0.5,
                      borderColor: '#ccc',
                      marginTop: 10,
                      marginBottom: 10,
                    }}></View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      width: '40%',
                      alignSelf: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      onPress={toggleModal}
                      style={{
                        borderWidth: 0.5,
                        borderColor: '#ccc',
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 10,
                      }}>
                      <Text style={{color: '#ccc'}}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={toggleModal}
                      style={{
                        borderWidth: 0.5,
                        borderColor: '#E4C863',
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 10,
                      }}>
                      <Text style={{color: '#E4C863'}}>No</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>

            <Modal isVisible={isModal}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    width: '100%',
                  }}>
                  <TouchableOpacity onPress={toleModal}>
                    <Image
                      style={{
                        alignSelf: 'flex-end',
                        tintColor: '#fff',
                        width: 22,
                        height: 22,
                        marginTop: -30,
                      }}
                      source={IMAGEPATH.cancel}
                    />
                  </TouchableOpacity>
                  <View style={{paddingHorizontal: 30, paddingVertical: 20}}>
                    <Image
                      style={{alignSelf: 'center'}}
                      source={IMAGEPATH.rightModal}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#000',
                        textAlign: 'center',
                        marginTop: 10,
                      }}>
                      Order Success fully updated
                    </Text>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        ) : null}
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

export default OrderHistory;
const styles = StyleSheet.create({
  mainScrollContainer: {
    backgroundColor: COLORS.white,
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
    paddingTop: 20,
  },
  textView: {
    width: '50%',
  },
  allText: {
    color: COLORS.white,
    textAlign: 'center',
  },
  priceText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500',
  },
  goldText: {
    color: COLORS.gray,
  },
  cardTouchableOpacity: {
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginTop: 15,
  },
  rowCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: COLORS.Purple,
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  goldtext: {
    color: COLORS.bg,
    fontSize: 16,
    fontWeight: '600',
  },
  dolerText: {
    alignSelf: 'flex-end',
    color: 'green',
  },
  ounce: {
    color: COLORS.bg,
    fontWeight: 'bold',
    fontSize: 16,
  },
  byy: {
    color: COLORS.bg,
    fontSize: 12,
  },
  cardcontainerRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  avgText: {
    color: COLORS.gray,
    fontSize: 12,
  },
  avgText1: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
  boderWidthContainer: {
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    marginTop: 13,
  },
  cancelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  cancelText: {
    color: COLORS.red,
  },
  cancelText1: {
    color: '#E4C863',
  },
  cardC: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    justifyContent: 'center',
    width: '50%',
    borderColor: '#ccc',
  },
  cardC1: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
    width: '50%',
  },
  bottomSheetContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  bottomSheetContainer1: {
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  bottomSheetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  usdTextContainer: {
    color: COLORS.bg,
    fontSize: 20,
    fontWeight: '600',
  },
  dolerContainer: {
    color: COLORS.bg,
    fontSize: 18,
    fontWeight: '600',
  },
  dolerContainer1: {
    textAlign: 'center',
    color: COLORS.bg,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
  },
  bottomtext: {
    color: COLORS.red,
    alignSelf: 'flex-end',
  },
  boderBottomSheet: {
    borderWidth: 0.5,
    borderColor: COLORS.gray,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonCsss: {
    width: '50%',
  },
  buttonContainer: {
    width: '50%',
  },
  buttonCssContainer: {
    backgroundColor: '#ccc',
    borderRadius: 15,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  countText: {
    color: COLORS.bg,
    fontSize: 16,
    letterSpacing: 2,
  },
});
