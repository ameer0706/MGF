import React from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import HeaderBox from '../../Component/HeaderBox';
import { COLORS } from '../../constants/ColorPath';
import { IMAGEPATH } from '../../constants/ImagePath';

const OrderDetails = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
            <HeaderBox
                onPress={() => navigation.goBack()}
                headerTitle={'Transfer History'}
                titleCss={{ color: '#fff' }}
                headerIcon={{ tintColor: '#fff' }}
                headerCss={{ backgroundColor: COLORS.bg }}
            />
            <ScrollView style={styles.mainScrollView}>
                <View style={styles.mainContainer}>
                    <View style={styles.cardContainer}>
                        <View style={styles.containerRow}>
                            <View style={styles.backgroundColorImage}>
                                <Image source={IMAGEPATH.godImage} />
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                <Text style={styles.angelaText}>Gold</Text>
                                <Text style={styles.dataTitle}>
                                    <Text style={{ color: '#E4C863' }}>Buy</Text> 23 Jun 2022
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.goldtext}>100 Ounce</Text>
                            </View>
                        </View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Order status</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>Buy</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: '#ccc',
                                marginTop: 10,
                            }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Order Type</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>Market Execution</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: '#ccc',
                                marginTop: 10,
                            }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Order price</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>AED 2000.36</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: '#ccc',
                                marginTop: 10,
                            }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Product type</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>Gold</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: '#ccc',
                                marginTop: 10,
                            }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Validity</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>DAY</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: '#ccc',
                                marginTop: 10,
                            }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Order no</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>220908000881018</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: '#ccc',
                                marginTop: 10,
                            }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Date & time</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>08 Sep 2022 | 12:49:07</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderWidth: 0.5,
                                borderColor: '#ccc',
                                marginTop: 10,
                            }}></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default OrderDetails;
const styles = StyleSheet.create({
    mainScrollView: {
        backgroundColor: COLORS.white,
    },
    mainContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    cardContainer: {
        backgroundColor: COLORS.white,
        elevation: 5,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    goldtext: {
        color: COLORS.bg,
        fontSize: 16,
        fontWeight: '600',
        alignSelf: 'flex-end',
    },
    dataTitle: {
        fontSize: 12,
        color: '#ccc',
    },
    angelaText: {
        color: COLORS.bg,
        fontSize: 18,
        fontWeight: '600',
    },
    containerRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    gold: {
        color: '#000',
        fontSize: 12,
        fontWeight: '600',
    },
    backgroundColorImage: {
        backgroundColor: COLORS.Purple,
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
