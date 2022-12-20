import React, { useState } from 'react';
import { ScrollView, StyleSheet, StatusBar, Image, Text, View, } from 'react-native';
import HeaderBox from '../../Component/HeaderBox';
import { COLORS } from '../../constants/ColorPath';
import { IMAGEPATH } from '../../constants/ImagePath';


const Notification = ({ navigation }) => {
  const data = [1, 2, 3, 4];
  return (
    <View style={{ flex: 1, }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <HeaderBox
        onPress={() => navigation.goBack()}
        headerTitle={'Notification'}
        headerCss={{ backgroundColor: COLORS.white }}
      />
      <ScrollView style={styles.mainScrollContainer}>
        <View style={styles.mainContainer}>
          <Text style={styles.titleContainer}>Today</Text>
          {
            data.map((item, idx) => {
              return (
                <View key={idx} style={styles.cardCantainer}>
                  <View>
                    <View style={styles.imgContainer}>
                      <Image source={IMAGEPATH.networkLogo} />
                    </View>
                  </View>
                  <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Text style={styles.priceText}>Price Alert. Jun 1</Text>
                    <Text style={styles.goldText}>Gold is down -4.35%</Text>
                  </View>
                  <View>
                    <Text style={{ color: COLORS.gray, }}>8.00 AM</Text>
                  </View>
                </View>
              )
            })
          }

        </View>
      </ScrollView>
    </View>
  );
}

export default Notification;
const styles = StyleSheet.create({
  mainScrollContainer: {
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8
  },
  titleContainer: {
    color: COLORS.gray,
    marginBottom: 10
  },
  cardCantainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    margin:1,
    justifyContent: "space-between"

  },
  imgContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },

  priceText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '500'
  },
  goldText: {
    color: COLORS.gray
  }
})