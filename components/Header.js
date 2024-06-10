import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useSelector} from 'react-redux';

const Header = () => {
  const cardData = useSelector(state => state.reducer);

  const [cardItems, setCardItems] = useState(0);
  useEffect(() => {
    setCardItems(cardData.length);
  }, [cardData]);
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'right',
          padding: 10,
          backgroundColor: 'orange',
          color: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'brown',
            borderRadius: 10,
            height: 40,
            width: 40,
          }}>
          <Text style={{fontSize: 30, color: 'white'}}>{cardItems}</Text>
        </View>
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
