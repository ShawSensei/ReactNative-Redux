import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View, Image, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {addToCart, removeFromCart} from './reduxComponent/action';
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach(element => {
        if (element.name === item.name) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems]);

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
        marginBottom: 50,
      }}>
      <Text style={{fontSize: 24}}>{item.name}</Text>
      <Text style={{fontSize: 24}}>{item.price}</Text>
      <Text style={{fontSize: 24}}>{item.color}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      {isAdded ? (
        <Button
          title="Remove from cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: hp(15), //flex:1
    backgroundColor: 'tomato',
    gap: 4,
  },
});

export default Product;
