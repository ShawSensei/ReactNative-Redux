import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useSelector} from 'react-redux';

const Header = () => {
  const cardData = useSelector(state => state.reducer);
  console.warn(cardData);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
          color: 'black',
        }}>
        {' '}
        0{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex:1,
  },
  header: {
    height: hp(15), //flex:1
    backgroundColor: 'tomato',
    gap: 4,
  },
});

export default Header;
