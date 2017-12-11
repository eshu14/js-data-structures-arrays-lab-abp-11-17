// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
let newDrivers=[];
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
  newDrivers=drivers.slice();
   return(newDrivers.push(name));
}
function prependDriver(name){
  newDrivers=drivers.slice();
  //alert(newDrivers.length);
  return newDrivers.unshift(name);
}
function removeLastDriver(){
  newDrivers=drivers.slice();
  //alert(newDrivers.length);
  return newDrivers.pop();
}
function removeFirstDriver(){
  newDrivers=drivers.slice();
  return newDrivers.shift();
}
 
