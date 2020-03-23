import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import {Link} from 'react-router-dom'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w500'

const Movie = ({movie}) => (
                <Link to={`/${movie.id}`}>
                <Overdrive id={movie.id}>
                    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
                </Overdrive>
                </Link>

)
export default Movie

Movie.prototypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    })
}

export const Poster = styled.img`
box-shadow: 0 0 35px white;
`