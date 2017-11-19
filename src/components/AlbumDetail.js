import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumnailContainerStyle}>
                    <Image style={styles.thumnailStyle} source={{ uri: props.album.thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: props.album.image }} style={styles.imageStyle} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.album.url)} >
                    Buye this
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumnailStyle: {
        height: 50,
        width: 50
    },
    thumnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    }
};

export default AlbumDetail;
