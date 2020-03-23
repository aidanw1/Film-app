import React from 'react';
import styled from 'styled-components'
import { Poster } from './Movie'
import Overdrive from 'react-overdrive'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154'
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'
export default class MovieDetail extends React.Component {

state = {
  movie: {},
}
  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?api_key=3ef4a041adda199df1892018f0664af0&language=en-US`)
      const movie = await res.json()
      this.setState({
        movie,
      })
    } catch (e) {
      console.log(e)
    }
  }

 
  render() {
      const { movie } = this.state
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
        <Overdrive id={movie.id}>
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
            <h1>{movie.name}</h1>
            <h3>Release Date: {movie.first_air_date}</h3>
            <p>{movie.overview}</p>
        </div>

        </MovieInfo>
      </MovieWrapper>   
    );
  }
}

const MovieWrapper = styled.div `
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: cover;
`

const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`
