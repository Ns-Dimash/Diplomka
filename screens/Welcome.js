import React from 'react';
import { View, Text,Image,StyleSheet,ImageBackground} from 'react-native';
import COLORS from '../constants/color';
import Button from '../components/Button';



const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/welcomeBg.png')} resizeMode="cover" style={styles.image}>

      <Image style={styles.logo} source={require('../assets/welcomeIcon.png')}/>
      <Text style={styles.text1}>Welcome</Text>
      <Text style={styles.text2}>Make your home green withour plants</Text>

      <Button title="Start" onPress={() => navigation.navigate("Just")} style={styles.btn} />
    </ImageBackground>
    </View>

  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text1: {
      color: COLORS.black,
      fontSize: 26,
      fontWeight: 'bold',
      textAlign: 'center',
      width:'100%',
      position: 'absolute',
      top: '56%',
      
    },
    text2: {
        color: COLORS.black,
        fontSize: 16,
        textAlign: 'center',
        width:'100%',
        position: 'absolute',
        top: '62%',
      },
      btn:{
        position: 'absolute',
        top: '72%',
        width:'50%',
        color:COLORS.white,
        backgroundColor:'grey',
        alignSelf: 'center',

      },
      logo:{
        position: 'absolute',
        bottom:'50%',
        alignSelf: 'center',
        width: 250,
        height: 250,
        
      }
});

export default Welcome;


// source={require("../assets/favicon.png")}