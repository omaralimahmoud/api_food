   let allRespise=[]
   let deatels={}
   async function room(treem)
{
    let respise= await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${treem}`)
      
     let x=  await respise.json()
     allRespise= await  x.recipes
      we()



}
   

   function we()
   {
       let cartona=``
       for (let i= 0; i < allRespise.length; i++) {
           let myId="'"+allRespise[i].recipe_id+"'"
           cartona+=` 
           <div class="col-md-4 "onclick=" details(${myId})"   >
           <div class="resp">
             <img src="${allRespise[i].image_url}" class="w-100">
                 <h2 class="py-1">${allRespise[i].title}</h2>
        
                 <p>${allRespise[i].publisher}</p>

                 
                 </div>

           </div>`
           document.getElementById("best").innerHTML=cartona
       }
   }
   
let btn=document.getElementById("btnSearch")
let serch=document.getElementById("search")


btn.addEventListener("click",function(){
    room(serch.value)
})


 async function details(id)
{
     let respise=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      
     deatels=await respise.json()
       deatels=await deatels.recipe
       
       deatilsto()
}


function deatilsto()
{
    let cartona2=``

     for (let  pe of deatels.ingredients) {
      cartona2+= ` <li class="d-flex align-items-center font-weight-bold"><span class="fa-li"><i class="fas fa-utensil-spoon"></i></span>${pe}</li>`
     }

   let cartona=`<div class="recpiedate py-4">

    <h4>${deatels.title}</h4>
    <img src="${deatels.image_url}" class="w-100">
    <ul class="fa-ul  align-items-center py-3">
    ${cartona2}
     
   </ul>
  </div>`
  document.getElementById("recpiedate").innerHTML=cartona;
}








