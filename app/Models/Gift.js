

export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened ?? false
    }




    get Template() {
        return `

            <div class='col pb-5'>
            <img class="gift-images img-flex" src="${this.opened ? this.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScm3HUndxkOppL9CGjwjSPJuiAZGeXYVV7Zw&usqp=CAU"}" alt="">
            <h4>${this.tag}</h4>
          </div>




`
    }



}