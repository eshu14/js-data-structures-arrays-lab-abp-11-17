// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
const newDrivers=drivers.slice();
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
  let newDrivers=drivers.slice(0);
  newDrivers=newDrivers.push(name);
  return newDrivers;
}
function prependDriver(name){
  let newDrivers=drivers.slice(0);
  newDrivers= newDrivers.unshift(name);
  return drivers;
}
function removeLastDriver(){
  let newDrivers=drivers.slice();
  newDrivers=newDrivers.pop();
  

}
function removeFirstDriver(){
  let newDrivers=drivers.slice(0);
  return newDrivers.shift();
}
