import { ProxyState } from "../AppState.js";

const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/gifts",
    timeout: 12000

})



class SandboxService {


    async createGift(data) {

        const res = await sandBoxApi.post("", data)
        console.log("creating a gift", data);
    }



    async getGifts() {

        const res = await sandBoxApi.get()
        console.log("hopefully get stuff", res.data);
        ProxyState.gifts = res.data
        console.log(ProxyState.gifts);
    }
}




export const sandboxService = new SandboxService()