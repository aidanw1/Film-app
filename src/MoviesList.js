import React from 'react';
import styled from 'styled-components'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Movie from './Movie'

class MoviesList extends React.Component {

state = {
  movies: []
}
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=3ef4a041adda199df1892018f0664af0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      const movies = await res.json()
      this.setState({
        movies: movies.results
      })
    } catch (e) {
      console.log(e)
    }
  }

 
  render() {
    return (
      <MovieGrid>
            {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>   
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div `
display: grid;
padding: 1rem;
grid-template-columns: repeat(3, 1fr);
grid-row-gap: 1rem;
`
