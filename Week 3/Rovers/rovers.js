var Rover = {
  position: [0,0], 
  direction: prompt("direccion?").toUpperCase()
}
function goForward(rover) {
switch(Rover.direction) {
    case 'N':
      Rover.position[1]++
      break;
    case 'E':
      Rover.position[0]++
      break;
    case 'S':
      Rover.position[1]--
      break;
    case 'W':
      Rover.position[0]--
      break;

  }
}
goForward("N");
console.log(Rover.position);
console.log(Rover.direction);





