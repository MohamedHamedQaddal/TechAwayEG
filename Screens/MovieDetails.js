import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native'


const { width, height } = Dimensions.get('window')

const MovieDetails = ({navigation}) => {
    
    const {image, title, rating, genre} = navigation.getParam(item);
    
    return(
        <View>
            <Image style={styles.image}>{image}</Image>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.genre}>{genre}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    genre: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    rating: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'
    }
});

export default MovieDetails