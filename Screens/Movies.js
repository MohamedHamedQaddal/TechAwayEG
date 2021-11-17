import React from 'react'; 
import { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import MovieCard from '../Components/MovieCard'
import axiosInstance from '../Network/Axios';


const { width, height } = Dimensions.get('window')

const Movies = ({ navigation }) => {

    const [movies, setMovies] = useState([]);

    const clickHandler = (item) => {
        navigation.navigate('MovieDetails', {item})
    }

    useEffect(() => {

        async function fetchMovies() {
            const response = null
            try {
                response = await axiosInstance.get('/json/movies.json');
                setMovies(response.data);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchMovies();
        
        }, [])

    return (
        <View>
            <FlatList 
                data={movies}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return(
                        <TouchableOpacity onPress={() => this.clickHandler(item)} style={styles.container}>
                            <MovieCard item={item} style={styles.card}/>
                        </TouchableOpacity>
                    ); 
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card:{
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    }
});

export default Movies