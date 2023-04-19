/*=============== SHOW MENU ===============*/


const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () =>{
    const header = document.getElementById('my-header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('scrollup')
						: scrollUp.classList.remove('scrollup')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line ' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line ' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
   // reset: true 
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo,
            .footer__description, footer__content, .footer__info`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`, {origin: 'left'})
sr.reveal(`.about__img, .recently__img`, {origin: 'right'})
sr.reveal(`.gallery_section`, {origin: 'top'})
sr.reveal(`.store__card`, {interval: 100})


// ========== EMPIEZA CODIGO PARA TIENDA.HTML =========

/*============= CAMBIAR PRECIOS ==============*/
// Cambiar lienzo 20x20
const select = document.getElementById('select-20x20');
const span = document.getElementById('price_20x20');

select.addEventListener('change',function(){

    switch(select.value){
        case 'value1':
            span.textContent = '$1150';
            break;
        case 'value2':
            span.textContent = '$1450';
            break;
    }
});

// Cambiar lienzo 25x30
const select_2530 = document.getElementById('select-25x30');
const span_2530 = document.getElementById('price_25x30');

select_2530.addEventListener('change',function(){

    switch(select_2530.value){
        case 'value1':
            span_2530.textContent = '$1400';
            break;
        case 'value2':
            span_2530.textContent = '$1800';
            break;
        case 'value3':
            span_2530.textContent = '$2200';
            break;
        case 'value4':
            span_2530.textContent = '$2950';
            break;
    }

});

// Cambiar lienzo 30x40
const select_3040 = document.getElementById('select-30x40');
const span_3040 = document.getElementById('price_30x40');

select_3040.addEventListener('change', function(){

    switch(select_3040.value){
        case 'value1':
            span_3040.textContent = '$1700';
            break;
        case 'value2':
            span_3040.textContent = '$2450';
            break;
        case 'value3':
            span_3040.textContent = '$2980';
            break;
        case 'value4':
            span_3040.textContent = '$3450';
            break;
        case 'value5':
            span_3040.textContent = '$4950';
            break;

    }
});

// Cambiar Lienzo 40x40
const select_4040 = document.getElementById('select-40x40');
const span_4040 = document.getElementById('price_40x40');

select_4040.addEventListener('change', function(){

    switch(select_4040.value){
        case 'value1':
            span_4040.textContent = '$2300';
            break;
        case 'value2':
            span_4040.textContent = '$3550';
            break;
        case 'value3':
            span_4040.textContent = '$3980';
            break;
        case 'value4':
            span_4040.textContent = '$4750';
            break;
        case 'value5':
            span_4040.textContent = '$5600';
            break;
        case 'value6':
            span_4040.textContent = '$5980';
            break;
    }
});

// Cambiar lienzo 40x60

const select_4060 = document.getElementById('select-40x60');
const span_4060 = document.getElementById('price_40x60');

select_4060.addEventListener('change', function(){

    switch(select_4060.value){
        case 'value1':
            span_4060.textContent = '$3280';
            break;
        case 'value2':
            span_4060.textContent = '$4250';
            break;
        case 'value3':
            span_4060.textContent = '$4950';
            break;
        case 'value4':
            span_4060.textContent = '$5850';
            break;
        case 'value5':
            span_4060.textContent = '$6750';
            break;
        case 'value6':
            span_4060.textContent = '$6980';
            break;
        case 'value7':
            span_4060.textContent = '$7450';
            break;
    }
});

//  Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
// Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close Cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Cart Working JS
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// REESCRIBIR 

function ready(){
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
    }
  // Quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // Add to cART
  var addCart = document.getElementsByClassName("add-product");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }



}



function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}

// Quantity Changed

function quantityChanged(event){
  var input = event.target;
  if(isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updatetotal();
}

// Add TO cart

function addCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var title = shopItem.getElementsByClassName('store-name')[0];
    var price = shopItem.getElementsByClassName('store-price')[0];
    var productImg = shopItem.getElementsByClassName('store__img')[0];
    var description = shopItem.getElementsByClassName('store__description')[0];
    var selector = description.getElementsByTagName('select')[0];
    var selectedOption = selector.options[selector.selectedIndex];
    var quantity = selectedOption.text;
    var descriptionText = description.innerText.split(':')[0];
    addProductToCart(title.innerText,price.innerText,productImg.src,quantity,descriptionText);
    updatetotal();
   
  }

  function addProductToCart(title, price, productImg,descriptionText) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
       
    for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText === title) {
        alert("You have already add this item to cart");
        return;
      }
    }
    var cartBoxContent = `
                          <img src="${productImg}" alt="" class="cart-img">
                          <div class="detail-box">
                              <div class="cart-product-title">${title}</div>
                              <span class="persons-number">Personas: ${descriptionText}</span>
                              <div class="cart-price">${price}</div> 
                              <input type="number" value="1" class="cart-quantity" style="border: none";>
                          </div>
                        
                          <i class="ri-delete-bin-7-fill cart-remove" id="remove-cart"></i>
                          
                          
                          `;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
      .getElementsByClassName("cart-remove")[0]
      .addEventListener("click", removeCartItem);
    cartShopBox
      .getElementsByClassName("cart-quantity")[0]
      .addEventListener("change", quantityChanged);
  }




  var total = 0;
// Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    total=0;
    for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var price = 0;
      if (priceElement !== undefined) {
        price = parseFloat(priceElement.innerText.replace("$", ""));
      }
    var quantity = 0;
    if (quantityElement !== undefined) {
        quantity = quantityElement.value;
    }
      total = total + price * quantity;
    }
    // If price Contain some Cents Value
    total = Math.round(total * 100) / 100;
  
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
  

// Paypal Button

       
function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'silver',
      layout: 'horizontal',
      label: 'pay',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"description":"Artebymm","amount":{"currency_code":"MXN","value":total}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
        
        // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

        // Show a success message within this page, e.g.
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>Gracias por tu pago!</h3>';
        var cartContent = document.getElementsByClassName("cart-content")[0];
        while (cartContent.hasChildNodes()) {
            cartContent.removeChild(cartContent.firstChild);
        }
        updatetotal();
        // Or go to another URL:  actions.redirect('thank_you.html');
        

            // Reload the page after a short delay
        setTimeout(function() {
          location.reload();
        }, 3000); // Wait for 3 seconds before reloading


      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');
}
initPayPalButton();


//Show 20x20

function open20x20() {
  document.getElementById("myNav").style.width = "100%";
}

function close20x20() {
  document.getElementById("myNav").style.width = "0%";
}

//Show 25x30

function open25x30() {
  document.getElementById("myNav-two").style.width = "100%";
}

function close25x30() {
  document.getElementById("myNav-two").style.width = "0%";
}

//Show 30x40

function open30x40() {
  document.getElementById("myNav-three").style.width = "100%";
}

function close30x40() {
  document.getElementById("myNav-three").style.width = "0%";
}

//Show 40x40

function open40x40() {
  document.getElementById("myNav-four").style.width = "100%";
}

function close40x40() {
  document.getElementById("myNav-four").style.width = "0%";
}

//Show 40x60

function open40x60() {
  document.getElementById("myNav-five").style.width = "100%";
}

function close40x60() {
  document.getElementById("myNav-five").style.width = "0%";
}


//Incrementar valor

