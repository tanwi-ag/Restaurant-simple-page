const arr = [
    {
        id:1,
        name:"Buttermilk Pancakes",
        category:"breakfast",
        price:"$12.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/img1.jpg"
    },
    {
        id:2,
        name:"Chapati",
        category:"dinner",
        price:"$5.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/chapati.jpg"
    },
    {
        id:3,
        name:"Milk and Cornflakes",
        category:"breakfast",
        price:"$15.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/milk.jpg"
    },
    {
        id:4,
        name:"Fried Rice",
        category:"lunch",
        price:"$22.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/fried.jpg"
    },
    {
        id:5,
        name:"Vegetable Salad",
        category:"lunch",
        price:"$17.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/salad.jpg"
    },
    {
        id:6,
        name:"Oreo shake",
        category:"shakes",
        price:"$10.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/shake1.jpg"
    },
    {
        id:6,
        name:"Raspberry Mojito",
        category:"shakes",
        price:"$9.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/rmojito.jpg"
    },
    {
        id:7,
        name:"Paneer do pyaza",
        category:"dinner",
        price:"$18.15",
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit metus nunc, eget vehicula lorem commodo ut.Quisque cursus nec ante nec ullamcorper."
        ,img: "images/paneer.jpg"
    }
]
const allFood = document.querySelector(".all-food")
const all = document.querySelector("#all")
const breakfast = document.querySelector("#breakfast")
const lunch = document.querySelector("#lunch")
const shakes= document.querySelector("#shakes")
const dinner = document.querySelector("#dinner")

window.addEventListener("DOMContentLoaded",function(){
    displayItems(arr);
})
all.addEventListener('click',function(){
    displayItems(arr);
})
breakfast.addEventListener('click',function(){
    const arr1 = arr.filter(item => item.category === "breakfast");
    displayItems(arr1);
})
lunch.addEventListener('click',function(){
    const arr1 = arr.filter(item => item.category === "lunch");
    displayItems(arr1);
})
shakes.addEventListener('click',function(){
    const arr1 = arr.filter(item => item.category === "shakes");
    displayItems(arr1);
})
dinner.addEventListener('click',function(){
    const arr1 = arr.filter(item => item.category === "dinner");
    displayItems(arr1);
})
function displayItems(arr){
    let display = arr.map(function(item){
        return `<div class="food">
        <img class="img1" src=${item.img} alt="">
        <div class="item-info">
        <header>
        <div class="name">${item.name}&nbsp &nbsp<span>${item.price}</span></div>
        <div class="underline-2"></div>
        </header>
        <p class="info">${item.info}</p>
        </div>
        <div class="two-button">
                <button class="add">ADD</button>
                <button class="remove">REMOVE</button>
            </div>
    </div> `;
    });
    display = display.join("");
    allFood.innerHTML = display;
}
