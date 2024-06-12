import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useSelector, useDispatch} from 'react-redux';
import {getUserList} from './reduxComponent/action';

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  console.warn('in component', userList);
  return (
    <View style={styles.container}>
      {userList.length
        ? userList.map(item => (
            <Text style={{fontSize: 20}}>name {item.firstName}</Text>
          ))
        : null}
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

export default UserList;
