import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Button from '../../Component/Button';
import ButtonBox from '../../Component/ButtonBox';
import HeaderBox from '../../Component/HeaderBox';
import InputBox from '../../Component/InputBox';
import { COLORS } from '../../constants/ColorPath';
import { IMAGEPATH } from '../../constants/ImagePath';

const ContactUs = ({ navigation }) => {
    const [validation, setValidation] = useState({
        Name: false,
        Email: false,
        MobileNumber: false,
        Mesage: false,
    });

    const handerOnFocus = name => {
        setValidation(preValidations => ({ ...preValidations, [name]: true }));
    };
    const handerOnBlur = name => {
        setValidation(preValidations => ({ ...preValidations, [name]: false }));
    };
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={COLORS.bg} barStyle="light-content" />
            <HeaderBox
                onPress={() => navigation.goBack()}
                headerCss={{ backgroundColor: COLORS.bg }}
                headerTitle={'Profile'}
                titleCss={{ color: '#fff' }}
                headerIcon={{ tintColor: '#fff' }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                backgroundColor={'#fff'}>
                <View style={styles.mainBlackConainer}>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.howCardContainer}>
                        <Text style={styles.howCanText}>How can I help you?</Text>
                        <InputBox
                            imageLogo={IMAGEPATH.userImage}
                            placeholder="Name"
                            isValidation={validation.Name}
                            valueOfKey={'Name'}
                            onFocus={handerOnFocus}
                            onBlur={handerOnBlur}
                        />
                        <InputBox
                            imageLogo={IMAGEPATH.Email}
                            placeholder="Email"
                            isValidation={validation.Email}
                            valueOfKey={'Email'}
                            onFocus={handerOnFocus}
                            onBlur={handerOnBlur}
                        />
                        <InputBox
                            imageLogo={IMAGEPATH.PhoneImage}
                            placeholder="Mobile Number"
                            isValidation={validation.MobileNumber}
                            valueOfKey={'MobileNumber'}
                            onFocus={handerOnFocus}
                            onBlur={handerOnBlur}
                        />
                        <InputBox
                            placeholder={'Mesage'}
                            isValidation={validation.Mesage}
                            valueOfKey={'Mesage'}
                            onFocus={handerOnFocus}
                            onBlur={handerOnBlur}
                        />
                        <ButtonBox text={'Submit'} />
                    </View>
                    <Button buttonCssContainer={styles.buttonCssContainer} buttonText={'Call me'} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ContactUs;
const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 20
    },
    mainBlackConainer: {
        backgroundColor: COLORS.bg,
        height: 190
    },
    howCardContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginTop: -150,
        elevation: 5
    },
    howCanText: {
        color: COLORS.bg,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center'
    },
    buttonCssContainer: {
        marginTop: 60,
        borderWidth: 1,
        borderColor: '#C5A752',
        backgroundColor: '#fff'
    }

})
