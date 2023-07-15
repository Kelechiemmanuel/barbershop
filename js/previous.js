// navigator slide
function openNav(){
    document.querySelector('#myNav').style.width = '100%'
}
function closeNav() {
    document.querySelector('#myNav').style.width = '0';
}


// help slide
function slideShow() {
    document.getElementById('slide').style.width = '0';
}
function openHelp() {
    document.getElementById('slide').style.width = '70%';
}

// livechat popps
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById('slide').style.width = '0';
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }



// livechat
window.onload =()=>{


    var chatbody = document.getElementsByClassName("chat_body")[0],  
    inp = document.getElementsByClassName("in")[0],  
    send = document.getElementsByClassName("send")[0], cc = 0, sender = null,d = 0;  
    
    const res = [
     "we will get back to you",
      "for how long?",
     "Yes I will try",
    "Glad you agree with me",
    "Hey!",
    "our team are working on it"  
     ];
     
        function msg_div(user,text,pos,temp){
       
        if(temp){
            temp = "temp";
        }else{
           temp = ""; 
        }
        style = "rt";
        if(pos =="left"){
         style = "lf";   
        }
           return `<div class="msg `+temp+`">
            <div class="msg-`+style+` `+pos+`">
                `+text+`
            </div>
              <div class="clear"></div>
            <div class="sender `+pos+`">`+user+`</div>
            <div class="clear"></div>
        </div>  `;
        }
        function remove_re_typing(){
            var msg   = document.getElementsByClassName("msg");
       for(let z = 0; z < msg.length ;z++)  {
       
           if(msg[z].className.includes("temp")){
       msg[z].remove();        
           }
       }
        }
        function bot_res(v,t){
          setTimeout(()=>{
    remove_re_typing();
     chatbody.innerHTML =  chatbody.innerHTML +  msg_div("help",v,"right",0); 
    chatbody.scrollTop =   chatbody.scrollHeight;      
    },t);      
        }
        
    function bot_typing(){
       chatbody.innerHTML =  chatbody.innerHTML +  msg_div("help","Typing...","right",1);    
    chatbody.scrollTop =   chatbody.scrollHeight;
     
    }    
    
    
    function AI(i){
     i= i.toLowerCase();
        const query = [
            ["your name","are you","you"],
         ["your age","how old"],  
     ["can you","will you"],
         ["ok","alright","k","cool"],
    ["hi","hello","morning","afternoon","evening","good","hey"],
    ["how are","what's up","you are"]        
        ];
        
        for(k in query){
            for(g in query[k]){
           if(i.includes(query[k][g])){
          bot_typing();
          return  bot_res(res[k],2000);
          d= 0;
      }     
            }
        }
    
      switch (d){
          case 0:
          d += 1;
          bot_typing();
          return  bot_res(sender+", I don't understand your input.",2000);
          
          break;
          default :
        d = 0;  
        bot_typing();
        
        return  bot_res("Here are list of what you can ask me<br><ul><li>Whats your name?</li><li>How old are you?</li><li>can you sing?</li></ul><p>Help add a response you are expecting under the comment section to improve the AI</p>",2000);  
          
      }
        
    }
        
    bot_typing();
       
    bot_res("Glad to have you here.",2000);
     
     send.addEventListener("click",function(){
     this.disabled = true;
     if(inp.value !=""){
      if(cc == 0){ 
      cc += 1;
      sender = inp.value;
      bot_typing(2000);
       bot_res(""+inp.value+"",2000); 
        setTimeout(()=>{
        s = "";
        if(sender != null){
            s =  sender+", ";
        }
         bot_typing(4000);
        // bot_res(s+"If you want to learn how I was programmed watch my makeup on youtube with <a href='https://youtu.be/Eirbgz8hy8s'>this link</a>",4000);
        },4000)  
      }else{
      let tt = inp.value;
          chatbody.innerHTML =  chatbody.innerHTML +  msg_div(sender,inp.value,"left");    
    chatbody.scrollTop =   chatbody.scrollHeight; 
    setTimeout(()=>{
      AI(tt);   
      },2000);
      remove_re_typing();
      }   
     }
     this.disabled = false;
     inp.value = "";
     });
        
        
    }

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


