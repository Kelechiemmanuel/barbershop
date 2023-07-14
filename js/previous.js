function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("No Such Page Found.");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';   
    }
    ele.style.display = 'block';
}

        // Array to store the cart items
        let cartItems = [];

// Function to add items to the cart
function addToCart(name, image) {
    cartItems.push({ name: name, image: image });
    displayCartItems();
    document.querySelector('.show-con1').style.display = 'flex';
}

// Function to remove items from the cart
function removeFromCart(index) {
    cartItems.splice(index, 1);
    displayCartItems();
}

// Function to clear the cart
function clearCart() {
    cartItems = [];
    displayCartItems();
}

// Function to display the cart items
function displayCartItems() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        li.appendChild(img).style.width = '100px';
        li.appendChild(img).style.height = '100px';
        li.appendChild(img).style.objectFit = 'cover';
        li.appendChild(img).style.borderRadius = '50px';
        li.appendChild(img).style.marginRight = '3px';
        li.appendChild(img).style.marginTop = '20px';
        const p = document.createElement('p');
        p.textContent = item.name;
        li.appendChild(p).style.color = 'white';
        li.appendChild(p).style.marginRight = '20px';
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            removeFromCart(i);
        };
        li.appendChild(removeButton).style.background = 'none';
        li.appendChild(removeButton).style.border = '1px solid white';
        li.appendChild(removeButton).style.color = 'white';
        li.appendChild(removeButton).style.marginBottom = '10px';
        li.appendChild(removeButton).style.marginRight = '10px';
        li.appendChild(removeButton).style.padding = '7px';
        cartItemsList.appendChild(li).style.listStyle = 'none';
    }
}