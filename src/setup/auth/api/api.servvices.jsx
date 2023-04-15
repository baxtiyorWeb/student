import axios from "axios";

const BASE_URI = "https://63fe8692571200b7b7cc0611.mockapi.io"

export const ApiServices={
    async fetching(url){
        const response = await axios.get(`${BASE_URI}/${url}`)
        return response
    }
}