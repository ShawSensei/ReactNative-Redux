import React from 'react';
import {Dimensions, StyleSheet, Text, View,Image, Button, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Header from './Header';
import Product from './Product';




const ProductWrapper = ({navigation}) => {

  const products = [
    {
      name: 'Samsung Mobile',
      color: 'White',
      price: 30000,
      image: 'https://cdn-icons-png.flaticon.com/128/15/15874.png'
    },
    {
      name: 'Apple iPhone',
      color: 'Black',
      price: 50000,
      image: 'https://cdn-icons-png.flaticon.com/128/545/545194.png'
    },
    {
      name: 'OnePlus Norm',
      color: 'Blue',
      price: 25000,
      image: 'https://cdn-icons-png.flaticon.com/128/3137/3137807.png'
    },
    {
      name: 'Google Pixel',
      color: 'Gray',
      price: 45000,
      image: 'https://cdn-icons-png.flaticon.com/128/3137/3137783.png'
    }
  ];
  

  return (
    <View style={styles.container}>
        <Button title='Go to User List' onPress={()=>navigation.navigate("User")}/>
      <Header />
      <View style={styles.scrollView}>
      <ScrollView>
      {
        products.map((item) => <Product item={item}/>)
      }
      </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    
  },
  scrollView:{
    marginTop:20
  },
  header: {
    height: hp(15), //flex:1
    backgroundColor: 'tomato',
    gap: 4,
  },
}); 

export default ProductWrapper;
