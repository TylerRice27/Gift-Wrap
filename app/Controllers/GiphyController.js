import { ProxyState } from "../AppState.js"
import { giphyService } from "../Services/GiphyService.js"
import { Pop } from "../Utils/Pop.js"



function _drawResults() {
    let template = ''


    //if you draw images to the page this way make sure your carrots dont have spaces.
    ProxyState.giphyResults.forEach(g => {
        template += `
        
        <img data-bs-toggle="modal" data-bs-target="#submit-modal" onclick="app.giphyController.updateModal('${g.url}')"  class="img-fluid  p-1"
            src="${g.url}"
            alt="">


            `

    })

    document.getElementById("results").innerHTML = template

}




export class GiphyController {
    constructor() {
        ProxyState.on("giphyResults", _drawResults)



    }

    async getGiphs() {
        try {
            window.event.preventDefault()
            let form = window.event.target

            //We dont need this for this api because it already in object later
            // let searchData = {
            //     q: form.search.value
            // }


            await giphyService.getGiphs(form.search.value)
            console.log("thing we searched", form.search.value);
            form.reset()

        } catch (error) {
            console.error(error)
            Pop.toast(error.message, "error")
        }

    }

    updateModal(url) {
        document.getElementById("modal-img").innerHTML = `<img class="modal-images"
                src="${url}"
                alt="">`


    }


}