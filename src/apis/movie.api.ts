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
    console.log(`🚀 ~ movie.api.ts:22 ~ getMovie ~ response:`, response)

    return response.data
}
