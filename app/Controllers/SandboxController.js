import { ProxyState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"
import { Pop } from "../Utils/Pop.js"






export class SandboxController {

    constructor() {
        sandboxService.getGifts()
        ProxyState.on("gifts", this.drawGifts)
        this.drawGifts()
    }

    async createGift() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let formData = {
                tag: form.tag.value,
                url: ProxyState.clickedImgUrl
            }
            sandboxService.createGift(formData)

        } catch (error) {
            console.error(error)
            Pop.toast(error.message, 'error')
        }

    }

    drawGifts() {
        console.log('hitting controller draw');
        let template = ''

        ProxyState.gifts.forEach(g => {
            template += g.Template
            // console.log(g, 'this is what g is in the draw loop');

        });
        document.getElementById("sandbox-results").innerHTML = template
    }


}


