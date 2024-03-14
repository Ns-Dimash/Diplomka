import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Button from '../components/Button';
import COLORS from '../constants/color';


const Just = ({navigation}) => {
  return (
    <View style={styles.container}>

      <Button title="Login" filled onPress={() => navigation.navigate("Login")} style={styles.btn1} />
      <Button title="Register" textColor="black" filled onPress={() => navigation.navigate("Signup")} style={styles.btn2}/>
      
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  btn1:{
    position:'absolute',
    top:'50%',
    width:'80%',
    borderRadius:6,
    backgroundColor:COLORS.primary,
    alignSelf: 'center',
  }, 
  btn2:{
    position:'absolute',
    top:'58%',
    width:'80%',
    borderRadius:6,
    backgroundColor:COLORS.white,
    borderWidth:2,
    borderColor:COLORS.black,
    alignSelf:'center',

  }, 
});

export default Just;
