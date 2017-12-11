// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
newDrivers=drivers.slice();
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
  console.log(newDrivers.length);
  return newDrivers.push(name);

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
