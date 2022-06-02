

export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
    }




    get Template() {
        return `

            <div>
            <img class="img-flex" src="${this.opened ? this.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScm3HUndxkOppL9CGjwjSPJuiAZGeXYVV7Zw&usqp=CAU"}" alt="">
            <h4>${this.tag}</h4>
          </div>




`
    }



}