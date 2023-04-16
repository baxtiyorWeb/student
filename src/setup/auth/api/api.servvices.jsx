import axios from "axios";

const BASE_URI = "https://63fe8692571200b7b7cc0611.mockapi.io"

export const ApiServices={
    async fetching(url){
        const response = await axios.get(`${BASE_URI}/${url}`)
        return response
    }
}
const BASE_URI2 = "https://63a5c4fcf8f3f6d4abff62b9.mockapi.io"

export const ApiServices2={
    async fetching(url){
        const response = await axios.get(`${BASE_URI2}/${url}`)
        return response

    }
}