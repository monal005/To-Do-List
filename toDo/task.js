
let Listitems=[];
let  startIndex; 


function task()
{
    // localStorage.setItem("name",('#input').value);
    // let lsname=localStorage.getItem('name');
    // console.log(lsname);
   
    let val=document.getElementById("input").value;
    document.getElementById("input").value=""
   if(val.length === 0){
    alert("Cannot  be empty");
   }
   else{
        let t=document.createElement("li");
        t.draggable=true;
        // t.setAttribute('data-index')
        let g =document.createElement('p');
        g.textContent=`${val}`;
        g.id="g1"
        // g.className="dragable"
        console.log(g);
        t.id="t1"
        t.className=" text-uppercase px-2 droptarget "
        t.appendChild(g);
    //    g.draggable=true;
         let btn2=document.createElement("button");
         btn2.className="btn  btn-primary";
         btn2.id="btn-del2";

         let text2 = document.createTextNode("Finished");
        btn2.appendChild(text2)
        t.appendChild(btn2);


    let btn3=document.createElement("button");
         btn3.className="btn  btn-danger";
         btn3.id="btn-del3";

         let text3 = document.createTextNode("Pause");
        btn3.appendChild(text3)

        t.appendChild(btn3);



        let btn = document.createElement("button");
        btn.className="btn btn-warning";
        btn.id="btn-del"
        let text = document.createTextNode("Delete");

        btn.appendChild(text);
        t.appendChild(btn);
        
        
        document.getElementById("newtask").insertAdjacentElement("afterbegin",t);
        
        btn.addEventListener('click',()=>{
            document.getElementById("newtask").removeChild(t);
            
            
        })

        btn3.addEventListener('click',()=>{
            txt.textContent="paused";
            txt.className="text-danger";
            btn3.disabled="true"
            btn4.disabled=false
           
            // let start = document.createElement("button");
            // start.className="btn btn-primary";
            // let txtt=document.createTextNode="start";
            // start.append(txtt);
            // t.append(start)
        })

        btn2.addEventListener('click',()=>{
            g.style.textDecoration="line-through";
            g.style.textDecorationColor="red";
            txt.textContent="Completed";
            txt.className="text-success";
            btn3.disabled=true;
            btn4.disabled=true;
        })
       
        
        // btn3.addEventListener("dblclick",()=>{
        //     txt.textContent="In Progress"
        //     text3.textContent="Pause"
        // })
        // let nt=document.getElementById("newtask");
        
        let btn4= document.createElement("button");
        btn4.className="btn btn-primary"
        let txt4=document.createTextNode("Start");
        btn4.appendChild(txt4);
        t.appendChild(btn4);
        btn4.addEventListener("click",()=>{
            txt.textContent="In Progress"
            txt.className="text-primary"
            btn4.disabled="true";
            btn3.disabled=false
        })


         let txt=document.createElement("p");
        txt.textContent=""
        txt.className="text-primary";
        t.appendChild(txt);

        // addEventListeners();

        // Listitems.push(t);
        // console.log(Listitems);
   }





//    function addEventListeners(){

//     const draggables = document.querySelectorAll(".dragable")
//     const dlist=document.querySelectorAll("#newtask li")


//     draggables.forEach((draggable) =>{
//         draggable.addEventListener('dragstart',dragStart);
        
//     })

//     dlist.forEach(item=>{
//         item.addEventListener('dragover',dragOver);
//         item.addEventListener('dragdrop',dragDrop);
//         item.addEventListener('dragenter',dragEnter);
//         item.addEventListener('dragleave',dragLeave);
        
//     })

//    }

   document.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData("text1",e.target.id);
    e.target.style.opacity="0.4";    

})

//     dragStart(){
    // console.log('event: Drag Start');
    //  startIndex = +this.closest('li').getAttribute('data-index')
    //  console.log(startIndex + "is startindex");

//    }

//    document.addEventListener('dragover',(e)=>{
//     // console.log('event: Drag Over');
//     e.preventDefault()
//    })


//     function dragEnter(){
//     // console.log('event: Drag Enter');
//     // this.classList.add('over')

//    }
   
//    function dragLeave(){
//     // console.log('event: Drag Leave');
//     // this.classList.remove('over')
//    }
//    function dragDrop(){
//     // console.log('event: Drag Drop');
//     // this.classList.add('over');
//     const dragEndIndex=+this.getAttribute('data-index');
//     swapItems(startIndex,dragEndIndex);
//    }

//    function swapItems(fromIndex,toIndex){
//     const a=    Listitems[fromIndex].querySelector('.dragable');
//     const b=    Listitems[toIndex].querySelector('.dragable');

//     Listitems[fromIndex].appendChild(b);
//     Listitems[toIndex].appendChild(a);
//    }


document.addEventListener("drag", function(event) {
    // document.getElementById("demo").style.color = "red";
  });
  
  
  document.addEventListener("dragend", function(event) {
    // document.getElementById("demo").innerHTML = "Finished dragging the p element.";
    event.target.style.opacity = "1";
  });
  
  
  document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
    //   event.target.style.border = "3px dotted red";
    }
  });
  
  
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });
  
  
  document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
  });
  
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
    //   document.getElementById("demo").style.color = "";
    //   event.target.style.border = "";
      var data = event.dataTransfer.getData("Text1");
      event.target.appendChild(document.getElementById(data));
    }
  });
}
function DAll(){
            let del=document.getElementById("deleteAll");
            let nt=document.getElementById("newtask")
            del.addEventListener("click",()=>{
                document.getElementById("task").removeChild(nt)
            })
            window.location.reload();
    
        }