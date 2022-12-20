import React from 'react';
import {
    Text,
    View,
    StyleSheet,
  
} from 'react-native';
import { COLORS } from '../constants/ColorPath';

export default function TextHading({ textTitle,welComeText}) {
    return (
        <View style={{ flex: 1 }}>
           <Text style={[styles.welComeText,welComeText]}>{textTitle}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    welComeText: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: '900',
        color: COLORS.black,
      },
});
