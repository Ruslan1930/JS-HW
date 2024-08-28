const hasLicence = true;
const age = 19;
// правильно ли давать возрасту const, или все таки лучше задавать let, так как возраст может увеличиваться?
const isDrunk = false;
const canDrive = (hasLicence && age > 18 && !isDrunk);
console.log (`Пользователь может вести машину: ${canDrive ? 'Может': 'Не может'}`);