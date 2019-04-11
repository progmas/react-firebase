import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null }

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyAe7SIsMGd6MUJWFjjGBqin_5dg6jl1I94',
            authDomain: 'authentication-6ff7c.firebaseapp.com',
            databaseURL: 'https://authentication-6ff7c.firebaseio.com',
            projectId: 'authentication-6ff7c',
            storageBucket: 'authentication-6ff7c.appspot.com',
            messagingSenderId: '492577843974'
          });
        firebase.auth().onAuthStateChanged((user)=>{
            if (user){
                this.setState({ loggedIn: true });
            }
            else {
                this.setState({ loggedIn: false });
            }
        })
    }
    
    renderContent(){
        switch(this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={()=> firebase.auth().signOut()}>
                        Log out
                    </Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render(){
        return (
            <View>
                <Header headerText="Authentication" />
                { this.renderContent() }
            </View>
        )
    }
}

export default App;