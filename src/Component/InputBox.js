import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';
import { COLORS } from '../constants/ColorPath';

export default function InputBox({ placeholder, imageLogo,imageCss, hidePassword, isValidation, onFocus, onBlur, valueOfKey }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ ...styles.mainInputContainer, borderColor: isValidation ? '#E4C863' : '#E5E5E5' }}>
                <TouchableOpacity>
                    {imageLogo && <Image source={imageLogo} />}
                </TouchableOpacity>
                <TextInput
                    style={styles.inputContainer}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    color={COLORS.gray}
                    onFocus={() => onFocus(valueOfKey)}
                    onBlur={() => onBlur(valueOfKey)}
                />
                <TouchableOpacity>
                    {hidePassword && <Image style={[styles.imm,imageCss]} source={hidePassword} />}
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainInputContainer: {
        borderWidth: 1,
        borderColor: COLORS.gray,
        height: 45,
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    inputContainer: {
        flex: 1,
        fontSize: 14,
        marginLeft: 3
    },
});
