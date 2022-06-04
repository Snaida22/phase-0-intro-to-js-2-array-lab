// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const newcats = [...cats];
    newcats.push(name);
    return newcats
}
function prependCat(name){
    const newcats = [...cats];
    newcats.unshift(name)
    return newcats;
}
function removeLastCat(){
    const newcats= [...cats]
    newcats.pop()
    return newcats;
}
function removeFirstCat(){
    const firstCat=[...cats]
    firstCat.shift()
    return firstCat;
}