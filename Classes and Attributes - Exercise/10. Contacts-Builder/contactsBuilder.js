class Contact{
    constructor(firsName, lastName, phone, email) {
        this.firstName = firsName; 
        this.lastName = lastName; 
        this.phone = phone; 
        this.email = email;
        this._online = false; 
    }

    render(id){
        const article = document.createElement("article"); 
        const divTitle = document.createElement("div"); 

        if(this._online){
            divTitle.classList.add("online");
        } else {
            divTitle.classList.remove("online");
        }

        const button = document.createElement("button"); 
        const divInfo = document.createElement("div"); 
        const spanPhone = document.createElement("span"); 
        const spanEmail = document.createElement("span");
        
        divInfo.style.display = "none"
        
        divTitle.textContent = `${this.firstName} ${this.lastName}`;
        button.textContent = "\u2139";
        
        button.addEventListener("click", () => {
            if(divInfo.style.display === "none"){
                divInfo.style.display = "block"
            } else {
                divInfo.style.display = "none"
            }
        })
        
        spanPhone.textContent = `\u260E ${this.phone}`;
        spanEmail.textContent = `\u2709 ${this.email}`;
        
        divTitle.classList.add("title");
        divInfo.classList.add("info")
        
        divTitle.appendChild(button);
        divInfo.appendChild(spanPhone);
        divInfo.appendChild(spanEmail); 
        article.appendChild(divTitle); 
        article.appendChild(divInfo);
        
        this.article = article; 
        this._divTitle = divTitle;
        document.getElementById(id).appendChild(article);
    }
    get online(){
        return this._online;
    }
    set online(value){
        this._online = value;
        if(this._divTitle){
            if (this.online){
                this._divTitle.classList.add("online");
            } else {
                this._divTitle.classList.remove("online");
            }
        }
        
    }
}

let data = {
    firstName: 'Ivan',
    lastName: 'Ivanov',
    phone: '0888 123 456',
    email: 'i.ivanov@gmail.com'
};

let contact;
contact = new Contact(data.firstName, data.lastName, data.phone, data.email)
contact.online = true;
