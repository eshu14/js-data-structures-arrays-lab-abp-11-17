// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
let newDrivers=drivers.slice();
function destructivelyAppendDriver(name){
  return drivers.push(name);
}
function destructivelyPrependDriver(name){
  return drivers.unshift(name);
}
function destructivelyRemoveLastDriver(){
  return drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  return drivers.shift();
}
function appendDriver(name){
   alert(newDrivers.push(name));
}
function prependDriver(name){
  return newDrivers.unshift(name);
}
function removeLastDriver(){
  return newDrivers.pop();
}
function removeFirstDriver(){

  return newDrivers.shift();
}
