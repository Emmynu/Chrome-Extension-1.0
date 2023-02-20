// Array
 myLeeds  = []

 const fromLocal = JSON.parse(localStorage.getItem("myleads"))
// localStorage.clear()

if(fromLocal) {
    myLeeds = fromLocal
    array()
}

// deletebutton

function deleteb(){
    localStorage.clear()
    myLeeds = []
    array()
}

//save button

 function save(){
     myLeeds.push(document.getElementById("input-el").value)
     document.getElementById("input-el").value = " "
     localStorage.setItem("myleads", JSON.stringify(myLeeds))
     array()
 }

//  Loop

 function array(){
     let listItem = ""
     for(i = 0; i<myLeeds.length; i++){
         listItem +=
         `
         <li>
         <a target='_blank' href ='${myLeeds[i]}'>
         ${myLeeds[i]}
         </a>
         </li>`
     } 
     document.getElementById("ul-el").innerHTML = listItem
 }

