var allques=document.querySelectorAll('.ques');
var ans= document.querySelectorAll('.ans');
for(var ques of allques){
    ques.addEventListener(
        "click",
        function(){
            this.classList.toggle('quesclick');
            this.children[0].nextElementSibling.classList.toggle('showans');
            if(this.children[0].children[0].innerHTML==`<i class="fa-solid fa-plus"></i>`){
            this.children[0].children[0].innerHTML=`<i class="fa-solid fa-minus"></i>`;  
            }     
            else if(this.children[0].children[0].innerHTML==`<i class="fa-solid fa-minus"></i>`){
                this.children[0].children[0].innerHTML=`<i class="fa-solid fa-plus"></i>`
            }
        }
    )
}