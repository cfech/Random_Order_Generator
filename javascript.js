var list = document.getElementById("list")
var randBtn = document.getElementById("randomBTN")
var historyList = document.getElementById("oldList")
var count = 0

const getRandomDraftOrder = () => {
    console.log("clicked")
    var members = ["Connor", "Dan", "Evan", "Vito", "Ethan", "Andreas", "Alec"]
    var newArr = members.slice()
    console.log("getRandomDraftOrder -> newArr", newArr)
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        // console.log(newArr)
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        console.log(newArr)
    }
    //console.log(newArr)
    addToPage(newArr)
    addHistory(newArr)
}

const addToPage = (a) => {
    list.textContent = ""
    for (let i = 0; i < a.length; i++) {
        let name = document.createElement("li")
        name.textContent = a[i]
        list.append(name)
    }
}

const addHistory = (b) =>{
    var oldListDiv = document.createElement("div")
    let oldList = document.createElement("ol")
    let hr = document.createElement("hr")
    count++
    for (let i = 0; i < b.length; i++) {
        let name = document.createElement("li")
        name.textContent = b[i]
        oldList.append(name)
    }
   
    oldListDiv.append(count, hr, oldList )
    historyList.prepend(oldListDiv)

}

randBtn.addEventListener("click", getRandomDraftOrder)
