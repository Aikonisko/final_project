import {useQuery} from "@tanstack/react-query";
import axios from "axios";

const topAnimeUrl = "https://api.jikan.moe/v4/top/anime";
const getTopAnime = async () => {
    const response = await axios.get(topAnimeUrl);
    return response.data;
}

export const UseGetTopAnime = () => {
    const {isLoading, data} = useQuery(['allAnime'], getTopAnime);
    return {data, isLoading}
}