import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//import App from './App';


const App = () => {
return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums!'} />
            <AlbumList />
        </View>
    );
};

AppRegistry.registerComponent('albums', () => App);
