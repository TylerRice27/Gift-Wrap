import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";

const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/gifts",
    timeout: 12000

})



class SandboxService {


    async createGift(data) {

        const res = await sandBoxApi.post("", data)
        console.log("creating a gift", data);
        ProxyState.gifts = ProxyState.gifts
    }



    async getGifts() {
        console.log("running get gifts from sandboxservice");
        const res = await sandBoxApi.get()
        console.log("hopefully get stuff", res.data);
        ProxyState.gifts = res.data.map(g => new Gift(g))
        console.log(ProxyState.gifts);
    }
}




export const sandboxService = new SandboxService()