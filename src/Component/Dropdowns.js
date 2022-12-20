import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../constants/ColorPath';
import {IMAGEPATH} from '../constants/ImagePath';

export default function Dropdowns({
  isValidation,
  placeholder,
  valueOfKey,
  onFocus,
  onBlur,
  data,
}) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Dropdown
          style={{
            ...styles.dropdown,
            borderColor: isValidation ? '#E4C863' : '#E5E5E5',
          }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? placeholder : ''}
          value={value}
          onFocus={() => onFocus(valueOfKey)}
          onBlur={() => onBlur(valueOfKey)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          itemTextStyle={{color: COLORS.gray}}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  dropdown: {
    height: 45,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 14,
    color: COLORS.gray,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.gray,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.gray,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    height: 90,
  },
  itemTextStyle: {
    color: COLORS.gray,
  },
});
