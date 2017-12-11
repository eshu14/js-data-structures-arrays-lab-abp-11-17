// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
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
  let newDrivers=drivers.slice();
  return newDrivers.push(name);
}
function prependDriver(name){
  let newDrivers=drivers.slice();
  return newDrivers.unshift(name);
}
function removeLastDriver(){
  let newDrivers=drivers.slice();
  newDrivers.pop(name);
  return drivers;

}
function removeFirstDriver(){
  let newDrivers=drivers.slice();
  return newDrivers.shift(name);
}
