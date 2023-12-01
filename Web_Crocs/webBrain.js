import myJson from "./cardList.json" assert {type: 'json'};

let container = document.getElementById("container");
let body = document.body;
body.style.display = "contents";
body.style.fontFamily = "Arial";

function buildHeader(){
    let header = document.createElement("div");
    header.style.backgroundColor = "black";
    header.style.width = "100%";
    header.style.height = "25px";
    header.style.padding = "10px 0 0 30px";
    header.style.fontSize = "14px";
    header.style.fontWeight = "bold";

    let headerNotice = document.createElement("a");
    headerNotice.href = "https://www.crocs.com.vn/en";
    headerNotice.text = "FREE SHIPPING for bills from 500,000vnd"
    headerNotice.style.color = "white";
    headerNotice.style.marginRight = "50%";

    let headerRegister = document.createElement("a");
    headerRegister.href = "https://www.crocs.com.vn/en/account/register";
    headerRegister.text = "REGISTER TO GET VND 100,000"
    headerRegister.style.color = "white";

    let headerSignin = document.createElement("a");
    headerSignin.href = "https://www.crocs.com.vn/en/account";
    headerSignin.text = "ACCOUNT"
    headerSignin.style.color = "white";
    headerSignin.style.paddingLeft = "50px";

    header.appendChild(headerNotice);
    header.appendChild(headerRegister);
    header.appendChild(headerSignin);

    return header;
}

let cartList = [];
function addItemToCartList(crocs){
    let itemPosition = cartList.findIndex((itemInCart) => {
        return itemInCart.id == crocs.id;
    });

    if(itemPosition === -1){
        crocs.quantityInCart = 1;
        cartList.push(crocs);
    }else{
        if(cartList[itemPosition].quantityInCart == cartList[itemPosition].quantity){
            alert("Sản phẩm hết hàng");
        }else{
            cartList[itemPosition].quantityInCart += 1;
        }
    }

    console.log(cartList);

}

function buildCardInCart(card){
    let checkout = document.createElement("div");
    checkout.style.height = "80%";
    checkout.style.width  = "90%";
    checkout.style.display = "flex";
    let itemInCart = document.createElement("span");
    Object.assign(itemInCart.style, {
        "background-color": "white",
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "width": "40%",
        "height": "90%",
        "padding": "1%",
        "text-align": "center",
        "font-family": "arial",
    });
    itemInCart.innerHTML = `<img src=${card.img} alt="crocs" style="width:20%">
    <p style="padding-right: 2px; padding-left: 2px; font-size: small">${card.itemName}</p>
    <p>${card.price}</p>
    <p>Số lượng: ${card.quantityInCart}</p>`;
    checkout.appendChild(itemInCart);

    overlay.appendChild(checkout);
}

function totalMoney(){
    let total = 0;
    for(let i = 0; i < overlayList.length; i++){
        let totalEach = parseFloat(overlayList[i].price) * parseFloat(overlayList[i].quantityInCart);
        total += totalEach;
    }
    alert(`Tổng số tiền đơn hàng: ${total}`);
    console.log(total);
}

let overlayList = [];
function buildNavbar(){
    let navBar = document.createElement("div");
    navBar.style.display = "flex";
    navBar.style.backgroundColor = "white";
    navBar.style.borderColor = "black"
    navBar.style.borderStyle = "ridge";
    navBar.style.borderWidth = "thin"
    navBar.style.width = "100%";
    navBar.style.height = "70px";
    navBar.style.padding = "5px 10px 5px 30px";

    let logo = document.createElement("img");
    logo.src = "https://www.crocs.com.vn/cdn/shop/files/logo-no-tag_153x.png?v=1672210564";
    logo.style.height = "60px";
    logo.style.width = "150px";
    logo.style.paddingRight = "4%";
    navBar.appendChild(logo);

    let option = [
        "WOMEN",
        "MEN",
        "KIDS",
        "JIBBITZ™ CHARM",
        "FEATURE",
        "SALE"
    ];

    let optionBox = document.createElement("div");
    optionBox.style.display = "flex";
    optionBox.style.justifyContent = "space-between";

    for (let i = 0; i<option.length; i++){
        let optionButton = document.createElement("button");
        optionButton.innerHTML = option[i];
        optionButton.style.paddingRight = "5%";
        optionButton.style.backgroundColor = "white";
        optionButton.style.color = "black";
        optionButton.style.fontSize = "90%";
        optionButton.style.fontWeight = "bold";
        optionButton.style.border = "none";
        optionBox.appendChild(optionButton);
    }
    navBar.appendChild(optionBox);

    let searchBox = document.createElement("input");
    searchBox.style.marginLeft = "23%";
    searchBox.style.marginTop = "5px";
    searchBox.style.width = "350px";
    searchBox.style.height = "50px";
    searchBox.style.borderWidth = "thin";
    searchBox.style.borderColor = "black";
    searchBox.placeholder = "Search";



    navBar.appendChild(searchBox);


    
    function on(){
        if(overlayList.length == 0){
            for(let i=0; i<cartList.length; i++){
                overlayList.push(cartList[i]);
                buildCardInCart(cartList[i]);
            }
        }
            
        if(overlayList.length < cartList.length){
            let n = cartList.length - overlayList.length;
            let temp = overlayList.length;
            for(let i = 0; i < n; i++){
                overlayList.push(cartList[temp]);
                buildCardInCart(overlayList[temp]);
                temp++;
            }
        }
        
        overlay.style.display = "grid";
        overlay.style.position = "fixed";
        overlay.style.justifyContent = "space-between";
    }

    function off(){
        overlay.style.display = "none";
    }


    let overlay = document.getElementById("overlay");
    let buttonDiv = document.createElement("div");
    buttonDiv.style.margin = "2%";
    buttonDiv.style.height = "100%";
    buttonDiv.style.width = "100%";
    buttonDiv.style.display = "flex";
    let buttonX = document.createElement("button");
    
    buttonX.style.backgroundColor = "white";
    buttonX.style.color = "black";
    buttonX.style.height = "30%";
    buttonX.style.width = "15%";
    buttonX.innerText = "Close";
    buttonX.addEventListener("click", () => {
        off();
    })
    buttonDiv.appendChild(buttonX);
    
    let placeOder = document.createElement("button");
    placeOder.style.marginLeft = "5px";
    placeOder.style.backgroundColor = "white";
    placeOder.style.color = "black";
    placeOder.style.height = "30%";
    placeOder.style.width = "15%";
    placeOder.innerText = "Place oder";
    placeOder.style.position = "bottom";
    placeOder.addEventListener("click", () => {
        totalMoney();
    })
    buttonDiv.appendChild(placeOder);

    Object.assign(overlay.style, {
        "position" : "fixed",
        "display": "none",
        "width": "80%",
        "height": "80%",
        "top": "0",
        "left": "0",
        "right": "0",
        "bottom": "0",
        "margin": "auto",
        "background-color": "rgb(0,0,0,0.5)",
        "z-index": "2"
    });
    
    overlay.appendChild(buttonDiv);
    
    let cart = document.createElement("img");
    cart.src = "https://theme.hstatic.net/200000067244/1000685399/14/cart.svg?v=3694";
    cart.style.width = "25px";
    cart.style.marginLeft = "1.5%";

    cart.addEventListener("click", () =>{
        if(cartList.length == 0){
            alert("Không có sản phẩm nào trong giỏ hàng");
        }else{
            cart.onclick = on();   
        }
    });
    


    navBar.appendChild(cart);

    let icon_flag = document.createElement("img");
    icon_flag.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png";
    icon_flag.style.width = "28px";
    icon_flag.style.height = "18px";
    icon_flag.style.marginTop = "28px"
    icon_flag.style.marginLeft = "1%";
    navBar.appendChild(icon_flag);

    return navBar;
}

function buildBody(){
    let description = document.createElement("div");
    description.style.margin = "3%";


    let paragraph = document.createElement("div");
    let p1 = document.createElement("h3");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p2.style.fontSize = "17px";
    p3.style.fontSize = "20px";
    p3.style.textAlign = "right";

    p1.textContent = "COMFORT IN EVERY PAIR OF WOMEN'S CLOGS";
    p2.textContent = "From our classic clogs to patterned bistro clogs, you are sure to find a style you love.";
    p3.textContent = "View all 135 items";

    paragraph.appendChild(p1);
    paragraph.appendChild(p2);
    paragraph.appendChild(p3);


    description.appendChild(paragraph);
    return description;
}


let listOfCard = [...myJson];
class item {
    constructor(id, quantity, quantityInCart, itemName, price, img, description){
        this.id = id;
        this.quantity = quantity;
        this.quantityInCart = parseInt(quantityInCart);
        this.itemName = itemName;
        this.price = price;
        this.img = img;
        this.description = description
    }
}



let itemList = document.createElement("div");
itemList.style.marginLeft = "30%"
itemList.style.display = "grid";
itemList.style.justifyContent = "space-between";
itemList.style.gridGap = "1rem";
itemList.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";




function buildItemC(crocs){
    let itemCard = document.createElement("div");
    Object.assign(itemCard.style, {
        "box-shadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "width": "80%",
        "height": "90%",
        "text-align": "center",
        "font-family": "arial",
    });
    itemCard.innerHTML = `<img src=${crocs.img} alt="Denim Jeans" style="width:70%">
    <p style="padding-right: 2px; padding-left: 2px;">${crocs.itemName}</p>
    <h3>${crocs.price}</h3>
    <p>${crocs.description}</p>`;


    let buttonAddToCart = document.createElement("button");
    buttonAddToCart.innerText = "Add to cart";
    Object.assign(buttonAddToCart.style, {
        "border": "none",
        "outline": "0",
        "padding": "12px",
        "color": "white",
        "background-color": "#000",
        "text-align": "center",
        "cursor": "pointer",
        "width": "100%",
        "font-size": "18px"
    })


    buttonAddToCart.addEventListener('click', () => {
        addItemToCartList(crocs);
    })
   
    itemCard.appendChild(buttonAddToCart);
    return itemCard; 
}


for(let i = 0; i<listOfCard.length; i++){
    let crocs = new item( 
        listOfCard[i].id,
        listOfCard[i].quantity,
        0,
        listOfCard[i].itemName,
        listOfCard[i].price,
        listOfCard[i].img,
        listOfCard[i].description
    );
    let card = buildItemC(crocs);
    itemList.appendChild(card);
}


let paragraph = document.createElement("div");
paragraph.style.padding = "20px";
paragraph.style.marginLeft = "30%";
paragraph.style.textAlign = "left";
let p1 = document.createElement("h3");
let p2 = document.createElement("p");
p2.style.fontSize = "17px";

p1.textContent = "Clogs for Women";
p2.textContent = "Whether you're looking to find a new pair of your most favorite Classic Clogs or you're looking for a new go-to pair of clogs with all the comfort you expect without compromising style - we've got the pair for you. Explore different styles including simple solid colors to animal print, find your perfect pair for any occasion or outfit - even find women's comfortable clogs to wear to work!";

paragraph.appendChild(p1);
paragraph.appendChild(p2);


let footer = document.createElement("div");
footer.style.backgroundColor = "black";
footer.style.width = "100%";
footer.style.height = "auto";
footer.style.fontWeight = "bold";

let footer1 = document.createElement("div");
footer1.style.color = "white";
footer1.style.height = "40px";
footer1.style.textAlign = "center";
footer1.style.padding = "2% 7% 2% 7%";
footer1.textContent = "JOIN CROCS CLUB & GET VND 100,000 OFF FOR YOUR FIRST PURCHASE";
footer.appendChild(footer1);

let footer2 = document.createElement("div");
footer2.style.borderStyle = "solid";
footer2.style.borderLeft = "none";
footer2.style.borderRight = "none";
footer2.style.borderWidth = "1px";
footer2.style.borderColor = "white";
footer2.style.padding = "2% 7% 2% 7%";

let account = document.createElement("a");
account.style.color = "white";
account.style.textDecoration = "none";
account.href = "https://www.crocs.com.vn/en/account";
account.textContent = "ACCOUNT";
account.style.marginRight = "10%";
footer2.appendChild(account);

let storeLocation = document.createElement("a");
storeLocation.style.color = "white";
storeLocation.style.textDecoration = "none";
storeLocation.href = "https://www.crocs.com.vn/en/pages/he-thong-cua-hang-crocs-vietnam";
storeLocation.textContent = "STORE LOCATOR";
storeLocation.style.marginRight = "10%";
footer2.appendChild(storeLocation);


let icon_flag = document.createElement("img");
icon_flag.src = "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png";
icon_flag.style.width = "28px";
icon_flag.style.height = "18px";
icon_flag.style.marginTop = "28px"
icon_flag.style.marginLeft = "1%";
footer2.appendChild(icon_flag);
footer.appendChild(footer2);


// let footer3 = document.createElement("div");
// let footer4 = document.createElement("div");



let newHeader = buildHeader();
let newNavBar = buildNavbar();
let newBody = buildBody();
container.appendChild(newHeader);
container.appendChild(newNavBar);
container.appendChild(newBody);
container.appendChild(itemList);
container.appendChild(paragraph);
container.appendChild(footer);
