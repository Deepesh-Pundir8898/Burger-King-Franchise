// const food =document.querySelectorAll(".input")
// const btn=document.querySelector(".order");
// const orderItemsContainer=document.querySelector(".order-items");

// const increment =document.querySelectorAll(".increment")
// const decrement =document.querySelectorAll(".decrement")
// const quantity =document.querySelectorAll(".quantity")






// let orderItems=[];

// orderItemsContainer.style.display="none";

// function getRandomTime(){
//     return Math.floor(Math.random() * 5000) + 6000 //random time between 2 to 7 sec
// }

// function getRandomOrderId(){
//     return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
// }



// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     checkedOrder();
// })

// function checkedOrder(){
//     food.forEach((item)=>{
//         if(item.checked){
//             orderItems.push(item.value);            
//         }
//     })

//     if(orderItems.length == 0){
//         alert("Please select at least one food item");
//         return;
//     }else{
//         animateButton();
//     }

//     orderItems.forEach((foodItem) => {
//         displayOrder(foodItem);
//     });

//     orderItems = [];
//     orderItemsContainer.style.display = "flex";
   
// }

// function animateButton() {
//     document.querySelectorAll('.order').forEach(button => {
//         if (!button.classList.contains('animate')) {
//             button.classList.add('animate');
//             setTimeout(() => {
//                 button.classList.remove('animate');
//             }, 10000); 
//         }
//     });
// }

// function displayOrder(foodItem) {
//     const promise = new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve();
//         }, getRandomTime());
//     });

//     promise.then(function () {
//         const orderId = getRandomOrderId();
//         const foodImageUrl = getFoodImageUrl(foodItem);

//         const orderItemHTML = `
//             <div class="order-item">
//                 <img src="${foodImageUrl}" alt="${foodItem}" />
//                 <div id="orderId">Order ID: 
//                     <span id="orderIdValue">${orderId}</span>
//                 </div>
//             </div>`;

//         orderItemsContainer.insertAdjacentHTML('beforeend', orderItemHTML);
//     });
// }

// function getFoodImageUrl(foodItem) {
//     switch (foodItem) {
//         case 'Burger':
//             return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
//         case 'Fries':
//             return 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
//         case 'Drink':
//             return 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
//         default:
//             return 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';
//     }
// }


const foodItems = document.querySelectorAll(".food-item");
const btn = document.querySelector(".order");
const orderItemsContainer = document.querySelector(".order-items");

let orderItems = [];

// Initially hide the order items container
orderItemsContainer.style.display = "none";

function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 6000; // random time between 6 to 11 sec
}

function getRandomOrderId() {
    return Math.floor(Math.random() * 1000) + 100;  // random ID between 100 to 1099
}

// Add event listeners to the increment and decrement buttons
foodItems.forEach((foodItem) => {
    const incrementBtn = foodItem.querySelector(".increment");
    const decrementBtn = foodItem.querySelector(".decrement");
    const quantityDisplay = foodItem.querySelector(".quantity");
    let quantity = 0;

    incrementBtn.addEventListener("click", () => {
        quantity++;
        quantityDisplay.textContent = quantity;
    });

    decrementBtn.addEventListener("click", () => {
        if (quantity > 0) {
            quantity--;
            quantityDisplay.textContent = quantity;
        }
    });
});

// When the order button is clicked
btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkedOrder();
});

function checkedOrder() {
    foodItems.forEach((foodItem) => {
        const checkbox = foodItem.querySelector(".input");
        const quantity = parseInt(foodItem.querySelector(".quantity").textContent);
        const price =parseInt(foodItem.querySelector(".price").textContent);

        if (checkbox.checked && quantity > 0) {
            orderItems.push({ name: checkbox.value, price: price ,quantity: quantity });
        }
    });

    if (orderItems.length === 0) {
        alert("Please select at least one food item with a quantity greater than 0");
        return;
    } else {
        animateButton();
    }

    orderItems.forEach((foodItem) => {
        displayOrder(foodItem);
    });

    let totalAmount =0
    orderItems.forEach((foodItem) => {
        totalAmount +=foodItem.quantity*foodItem.price;
    });
    
    // const orderItemAmount=`<div class="totalAmount">${totalAmount}</div>`

    // orderItemsContainer.insertAdjacentHTML('beforeend', orderItemAmount);
    // Clear the order items after display
    orderItems = [];
    orderItemsContainer.style.display = "flex";
}

function animateButton() {
    document.querySelectorAll('.order').forEach(button => {
        if (!button.classList.contains('animate')) {
            button.classList.add('animate');
            setTimeout(() => {
                button.classList.remove('animate');
            }, 10000); 
        }
    });
}

function displayOrder(foodItem) {
    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, getRandomTime());
    });

    promise.then(function () {
        const orderId = getRandomOrderId();
        const foodImageUrl = getFoodImageUrl(foodItem.name);

        console.log(foodItem);
        const orderItemHTML = `
            <div class="order-item">
                <img src="${foodImageUrl}" alt="${foodItem.name}" />
                <div id="orderId">Order ID <br> 
                    <span id="orderIdValue">${orderId}</span>
                </div>
                <div class="price">Price <br> ₹${foodItem.price}</div>
                <div class="quantity-display">Quantity <br> ${foodItem.quantity}</div>
                <div class="amount">Amount <br> ₹${foodItem.price*foodItem.quantity}</div>
            </div>`;

        orderItemsContainer.insertAdjacentHTML('beforeend', orderItemHTML);
    });
}

function getFoodImageUrl(foodItem) {
    switch (foodItem) {
        case 'Burger':
            return 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60';
        case 'Fries':
            return 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
        case 'Drink':
            return 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60';
        default:
            return 'https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';
    }
}



