let box = document.querySelector(".box") ;

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'].sort(() => Math.random() - 0.5) ;
let numbers = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8].sort(() => Math.random() - 0.5) ;

let object1 = {};

alphabet.forEach((element, index) => {
  object1[element] = numbers[index];
  pick = document.createElement("div") ;
  pick.className = element ;
  box.appendChild(pick) ;

});



let items = document.querySelectorAll(".box div")
let moves = 0 ;
let [second , minute] = [0 , 0] ;

let starter = false ;
items.forEach((ele) => {
    ele.addEventListener("click" , (e) => {
        
        // avoid error while double clicking  on the same item
        if(e.target.className.length ===1){
            e.target.innerHTML = object1[e.target.className] ;
        }
        
        e.target.classList.add("clicked") ;
        e.target.style.color = "white" ;
        e.target.style.background = "grey" ;
        let countor = document.querySelectorAll(".clicked") ;

        // add moves count
        moves = moves + 1
        document.querySelector(".moves .number").innerHTML = moves ;

        if(countor.length === 2){
            
            // add class to matches ;
            if(countor[0].innerHTML === countor[1].innerHTML){
                countor[0].classList.replace("clicked" , "success") ;
                countor[1].classList.replace("clicked" , "success") ;
                let target = document.querySelectorAll('.success') ;
                countor[0].style.background = "blue" ;
                countor[1].style.background = "blue" ;
                countor[0].style.color = "white" ;
                countor[1].style.color = "white" ;

                
                // game complete 
                if(target.length === 16){
                    let notification = document.createElement("div")
                    let timing = document.querySelector(".time .number").innerText ;
                    let moving = document.querySelector(".moves .number").innerText;
                    notification.className = "notification"
                    notification.innerHTML = `<span>Game Completed in ${timing} with ${moving} Moves</span>
                     <button class= "restart" ><a href= "/Memory-game/">Restart</a></button>`
                    document.body.insertBefore(notification , box) ;

                    // stop the time
                    starter = "done" ;


                }

            
                

            }else{
                // hide if they don't match ;
                setTimeout(()=>{
                    countor.forEach((ele) => {
                        countor[0].style.background = "black" ;
                        countor[1].style.background = "black" ;
                        ele.classList.remove("clicked") ;
                        ele.innerHTML = "" ;
                    })
    
                } , 500) ;
            }

        }


        // timer 
        if(starter == false){
            starter = true ;
            const myInterval = setInterval(mytimer, 1000);

            function mytimer(){

                if(starter == "done"){
                    clearInterval(myInterval) ;
                }else{
                    second = second+1
                    if (second === 60){
                        minute = minute + 1 ;
                        second = 0 ;
                        console.log('time up') ;
                    }
                    let string = ((minute < 10) ? '0' : '') + minute + ':'+ ((second < 10) ? '0' : '') + second
                    document.querySelector(".time .number").innerHTML = string ;

                }
                
            }
            
        }




    })
})



