import React from 'react';
import { Text, View, Image, StatusBar, StyleSheet, ScrollView } from 'react-native';
import HeaderBox from '../../Component/HeaderBox';
import { COLORS } from '../../constants/ColorPath';
import { IMAGEPATH } from '../../constants/ImagePath';

const TransferDetails = ({ navigation }) => {
    return (
        <View style={{ flex: 1, }}>
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
                            <View>
                                <Image source={IMAGEPATH.UserGilImage} />
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                <Text style={styles.angelaText}>Angela Smith</Text>
                                <Text style={styles.dataTitle}>23 Jun 2022</Text>
                            </View>
                            <View>
                                <Text style={styles.goldtext}>100 Ounce</Text>
                            </View>
                        </View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Asset type</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>Gold</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginTop: 10, }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>market value</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>$ 28.3495.00</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginTop: 10, }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Transfer no</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>220908000881018</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginTop: 10, }}></View>
                        <View style={styles.cardTitleContainer}>
                            <View>
                                <Text style={styles.dataTitle}>Date & time</Text>
                            </View>
                            <View>
                                <Text style={styles.gold}>08 Sep 2022 | 12:49:07</Text>
                            </View>
                        </View>
                        <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginTop: 10, }}></View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default TransferDetails;
const styles = StyleSheet.create({
    mainScrollView: {
        backgroundColor: COLORS.white,
    },
    mainContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15
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
        alignSelf: 'flex-end'
    },
    dataTitle: {
        fontSize: 12,
        color: '#ccc'
    },
    angelaText: {
        color: COLORS.bg,
        fontSize: 18,
        fontWeight: '600'
    },
    containerRow: {

        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTitleContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop:15
    },
    gold: {
        color: "#000",
        fontSize: 12,
        fontWeight: '600'
    }

})
