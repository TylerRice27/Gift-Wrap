import { ProxyState } from "../AppState.js";

const giphyApi = axios.create({
    baseURL: "http://api.giphy.com/v1/gifs/search",

})



let params = {

    api_key: 'l3oT26SSDBJmyUFKKwau5kQDQNuGRSvE',
    rating: 'pg',
    q: 'Lions',
    limit: 10




}


class GiphyService {


    async getGiphs(search) {
        params.q = search
        console.log(params.q);
        const res = await giphyApi.get('', { params })
        console.log("Getting giphs from api", res.data);

        //This we mapped all of the array objects into an array of Giphyimg objects
        //because all we wanted was the url
        ProxyState.giphyResults = res.data.data.map(g => new Giphyimg(g))

        console.log("give me results now", ProxyState.giphyResults);

    }

    updateClicked(url) {
        ProxyState.clickedImgUrl = url
        console.log('this is the new clicked img url', ProxyState.clickedImgUrl);
    }

}

//This class narrows down the item we get from the original array. Original array was Giphy

class Giphyimg {
    constructor(giph) {
        this.url = giph.images.downsized.url

    }
}







export const giphyService = new GiphyService()
