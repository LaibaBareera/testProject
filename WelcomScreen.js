import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

function WelcomScreen(props) {
    return (
        <ImageBackground style={styles.background} 
        source={require('../assets/img2.jpeg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                source={require('../assets/img1.jpeg')}/>
                <Text>Tour to Islamabad</Text>
            </View>
           
<View style={styles.loginbtn}/>
<View style={styles.registerbtn}/>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",

    },
    loginbtn:{
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerbtn:{
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logo:{
        width: 100,
        height: 100,
       

    },
    logoContainer:{
        position: "absolute",
        top: 50,
        alignItems: "center",
    },
})

export default WelcomScreen;