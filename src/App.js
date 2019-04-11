import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyAe7SIsMGd6MUJWFjjGBqin_5dg6jl1I94',
            authDomain: 'authentication-6ff7c.firebaseapp.com',
            databaseURL: 'https://authentication-6ff7c.firebaseio.com',
            projectId: 'authentication-6ff7c',
            storageBucket: 'authentication-6ff7c.appspot.com',
            messagingSenderId: '492577843974'
          });
    }
    
    render(){
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        )
    }
}

export default App;