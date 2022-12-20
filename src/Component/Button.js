import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants/ColorPath'

export default function Button({ buttonText, buttonCssContainer }) {
    return (
        <View>
            <TouchableOpacity style={[styles.buttonCssContainer, buttonCssContainer]}>
                <Text style={styles.buttonTextContainer}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCssContainer: {
        backgroundColor: '#C5A752',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 15,
    },
    buttonTextContainer: {
        color: COLORS.bg,
        fontSize: 16
    }
})