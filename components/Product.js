import React from 'react';
import {Dimensions, StyleSheet, Text, View,Image,Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { addToCart } from './redux/action';

const Product = (props) => {
    const item =props.item

    const handleAddToCart = (item) => {
        console.warn('Called',item)
    }

  return (
    <View style={{alignItems:'center',borderBottomColor:'orange',borderBottomWidth:2,padding:10}}>
          <Text style={{fontSize:24}}>{item.name}</Text>
          <Text style={{fontSize:24}}>{item.price}</Text>
          <Text style={{fontSize:24}}>{item.color}</Text>
          <Image style={{width:200,height:200}} source={{uri:item.image}}/>
          <Button title='Add to cart' onPress={()=>handleAddToCart(item)}/>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex:1
  },
  header: {
    height: hp(15), //flex:1
    backgroundColor: 'tomato',
    gap: 4,
  },
});

export default Product;
