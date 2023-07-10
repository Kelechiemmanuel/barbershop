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

    // slideShow function
    var slideshows = document.querySelectorAll('[data-component="slideshow"]');

    slideshows.forEach(initSlideShow);

    function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); 

    var index = 0, time = 5000;
    slides[index].classList.add('active');  

    setInterval( () => {
        slides[index].classList.remove('active');
        index++;

        if (index === slides.length) index = 0; 
        
        slides[index].classList.add('active');

    }, time);
    }


    // carousel slide
    $(document).ready(function(){
        $("#myCarousel").carousel({interval: 4000, wrap: true});
          
        $(".item1").click(function(){
          $("#myCarousel").carousel(0);
        });
        $(".item2").click(function(){
          $("#myCarousel").carousel(1);
        });
        $(".item3").click(function(){
          $("#myCarousel").carousel(2);
        });
        $(".item4").click(function(){
          $("#myCarousel").carousel(3);
        });
          
      
        $(".left").click(function(){
          $("#myCarousel").carousel("prev");
        });
        $(".right").click(function(){
          $("#myCarousel").carousel("next");
        });
      });
