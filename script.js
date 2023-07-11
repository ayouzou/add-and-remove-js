// document.querySelector('#push').onclick=function(){
//     if(document.querySelector('#newtask  input').value.length==0){
//         alert('please enter a task')
//     }
//     else{
//         document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;
//         var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }
let btn=document.getElementById("push");
let txt =document.getElementById("txt");
let tasks=document.getElementById("tasks");



function push(){
    if(txt.value.length==0){
        alert('plese enter a task')
    }else{
            tasks.innerHTML+=`
                 <div class="task">
                <span id="taskname">
                    ${txt.value}
                </span>
               <button class="delete" onclick="delete1()" id="delete">
                   <i class="far fa-trash-alt"></i>
               </button>
           </div>
            `
    }
}
function delete1(){
    let crt_task=document.querySelectorAll(".delete");
     for(var i=0 ; i<crt_task.length;i++){
        crt_task[i].onclick=function(){
            this.parentNode.remove();
        }
     }
}