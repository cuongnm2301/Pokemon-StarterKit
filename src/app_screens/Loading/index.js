import React, { Component } from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    View,
    Text
} from 'react-native';

class HomeScreen extends Component {
    componentDidMount() {
        //this._bootstrapAsync();
        setTimeout(() => {
            // Components that are placed inside a React Navigation
            // navigator will receive the `navigation` prop.
            // It's main usage is to trigger navigation events.
            // Right here we're telling it to navigate to the route
            // with the name 'App'.
            this.props.navigation.navigate('App');
        }, 1000);
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        //const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        //this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading screen!</Text>
                {/* <ActivityIndicator />
                <StatusBar barStyle="default" /> */}
            </View>
        );
    }
}

export default HomeScreen;
