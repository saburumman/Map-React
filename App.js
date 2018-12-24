import React, {Component} from 'react';
import { StyleSheet,   View   } from 'react-native';


import LoginForm from './app/components/pages/LoginForm';
import SignUpForm from './app/components/pages/SignUpForm';
import Maps from './app/components/pages/Maps';
import SettingBar from './app/components/pages/SettingBar';

export default class App extends React.Component {


    render() {
        return (
                <View style={styles.container}>
                <map/>
                </View> 
    );
}
}
const styles = StyleSheet.create({
    wrapper:{
        flex:1,
    },
    container:{
        flex: 1, 
    },
});