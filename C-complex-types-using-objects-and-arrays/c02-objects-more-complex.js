/**
* You can see that objects allow you to group together related information.
*
* Object can be combined from primitive values, but you can have objects inside the objects.
*/

// Little more complex object:
const user = {
	name: 'John',
	lastName: 'Smith',
	address: {
		village: 'Willoughby',
		shireCounty: 'Lincolnshire',
		house: {
			no: 23
		},
		district: '' // good practice to have whole shape since begining
	},
	isRegistered: true
};

// #1 Task:
// Print on console - the "no" of the house form user:
console.log(user.address.house.no)

// #2 Task:
// Add "district" "East Lindsey" to the user address
user.address.district = 'East Lindsey'

console.log(user.address);
console.log(user.address.district);