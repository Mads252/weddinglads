import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
    databaseURL: "https://playground-315a0-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, "movies")


const  inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

const liste = document.getElementById("ønske_list")

addButtonEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    push(moviesInDB, inputValue)
    
    
    clearInput()
    
    
})



// Enter
inputFieldEl.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-button").click();
  }
});


onValue(moviesInDB, function(snapshot){
    

    if (snapshot.exists()){

        let itemsarray = Object.entries(snapshot.val())

    clearShoppingListEl()
        
   for (let i= 0; i < itemsarray.length; i++) {
        let currentItem = itemsarray[i]
        let currentItemId = currentItem[0]
        let currentItemValue = currentItem[1]
    tilføjTingTilListe(currentItem)
   } 


    } else {
            liste.innerHTML = "Ingen ting tilføjet"

    }
   

})

function clearShoppingListEl() {
    liste.innerHTML = ""
}

function clearInput(){
    inputFieldEl.value = ""
}

function tilføjTingTilListe(item){

    
    let newEl = document.createElement("li")
    newEl.className = "ønskelist_style";
    let itemId = item[0]
    let itemValue = item[1]
    newEl.textContent = itemValue
    liste.append(newEl)
    newEl.addEventListener("click", function(){
            let etNavnJegIkkeVed = ref(database, `movies/${itemId}`)
            remove(etNavnJegIkkeVed)
    })

}
