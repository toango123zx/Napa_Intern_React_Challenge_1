import axios from "axios"
import { DOMAIN } from "../constants"
import { TMovie, TMovieDetail } from "../types"

export const getLisMovie = async (page: number): Promise<TMovie[]> => {
    const response = await axios.get(DOMAIN, {
        params: {
            s: 'man',
            page: page,
        }
    })

    return response.data.Search
}

export const getMovie = async (id: string): Promise<TMovieDetail> => {
    const response = await axios.get(DOMAIN, {
        params: {
            i: id,
            plot: 'full'
        }
    })

    return response.data
}


export const getMoviesByTitle = async (title: string): Promise<TMovie[]> => {
    const response = await axios.get(DOMAIN, {
        params: {
            s: title,
            plot: 'full',
        }
    })

    return response.data.Search
}