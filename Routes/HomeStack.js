import Movies from '../Screens/Movies'
import MovieDetails from '../Screens/MovieDetails'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


const screens = {
  Movies:{
    screen: Movies
  },
  MovieDetails:{
    screen: MovieDetails
  }
}

const StackNavigator = createStackNavigator(screens)

const HomeStack = createAppContainer(StackNavigator)

export default HomeStack