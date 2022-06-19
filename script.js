document.addEventListener("DOMContentLoaded", function(event) { 
	let world1 = [
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 2],
	[2, 1, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
	[0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1, 1, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0],
	[2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 2, 2, 1, 2],
	[2, 1, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	];

	let world2 = [
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 , 2, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	];

	let world3 = [
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 3, 1, 1, 1, 1, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 1, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 0, 0, 0, 0, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 2, 1, 1, 2, 2, 1, 2, 0, 0, 2, 1, 2],
	[2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 1, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	];

	let world4 = [
	[0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1, 2, 0, 0, 2, 1, 1, 1, 2, 1, 1, 2, 0, 0, 2, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 2, 0, 0, 2, 1, 2, 0, 0, 2, 1, 2, 1, 2, 1, 1, 2, 0, 0, 2, 1, 1, 1, 1, 1, 2],
	[2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	];

	let world5 = [
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
	[2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2],
	[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
	[2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
	];

	let worlds = [world1, world2, world3, world4, world5];
	let world = worlds[Math.floor(Math.random() * 5)];
	let score = 0;
	
	let ghostArr = [
	{
		x: 14,
		y: 9,
		direction: "right",
		name: "ghost1",
		sprite:"assets/redGhost.gif"
	},
	{     
		x: 16,
		y: 9,
		direction: "left",
		name: "ghost2",
		sprite:"assets/yellowGhost.gif"
	},
	{
		x: 14,
		y: 8,
		direction: "top",
		name: "ghost3",
		sprite:"assets/blueGhost.gif"
	},
	{
		x: 16,
		y: 8,
		direction: "down",
		name: "ghost4",
		sprite:"assets/pinkGhost.gif"
	}
	];

	let pacman = {
		life: 3,
		x: 15,
		y: 16,
		direction: "none",
		power: false
	};

	function displayWorld() {
		let display = ["empty", "coin", "brick", "cherry"];
		let output = "";

		for (let i = 0; i < world.length; i++) {
			output += "\n<div class='row'>\n";

			for (let j = 0; j < world[i].length; j++) {
				output += "<div class='"+display[world[i][j]]+"'></div>";
			}

			output += "\n</div>";
		}

		document.getElementById("world").innerHTML = output;
	}

	function displayPacman() {
		document.getElementById("pacman").style.top = pacman.y * 20 + "px";
		document.getElementById("pacman").style.left = pacman.x * 20 + "px";
		document.getElementById("pacman").style.transform = "rotate("+pacman.rotate+"deg)";
	}

	function displayGhost(ghost) {
		document.getElementById(ghost.name).style.top = ghost.y * 20 + "px";
		document.getElementById(ghost.name).style.left = ghost.x * 20 + "px";

		if(pacman.power == false) {
			document.getElementById(ghost.name).style.background = "url('"+ghost.sprite+"')";
		}
		else {
			document.getElementById(ghost.name).style.background = "url('assets/Ghost.gif')";
		}

		document.getElementById(ghost.name).style.backgroundRepeat = "no-repeat";
		document.getElementById(ghost.name).style.backgroundSize = "contain";
		document.getElementById(ghost.name).style.backgroundPosition = "center";
		document.getElementById(ghost.name).style.position ="absolute";
		document.getElementById(ghost.name).style.height = "20px";
		document.getElementById(ghost.name).style.width = "20px";
	}

	function displayScore() {
		document.getElementById("score").innerHTML = score;
	}

	for(let i = 0; i<ghostArr.length; i++) {
		displayGhost(ghostArr[i]);
	}

	function die(ghost) {
		if(ghost.x == pacman.x && ghost.y == pacman.y) {

			if(pacman.power == false) {
				let sound =new Audio('assets/pacdeath.mp3');
				sound.playbackRate=2;
				sound.play();

				if(pacman.life > 0) {
					alert("you Die");
					document.getElementById("pac"+pacman.life).style.display = "none";
				}
				else{
					location.reload();
					alert("Gameover");
				}

				pacman.life--;
				pacman.x = 15;
				pacman.y = 16;
				pacman.direction = "none";
			}
			else{
				score += 100;
				ghost.x = 14;
				ghost.y = 9;
			}
		}
	}

	function move() {
		if(pacman.direction == "left" && world[pacman.y][pacman.x - 1] != 2) {
			pacman.rotate = 180;
			pacman.x--;
		}
		else if(pacman.direction  == "right" && world[pacman.y][pacman.x + 1] != 2) {
			pacman.rotate = 0;
			pacman.x++;
		}
		else if(pacman.direction  == "top" && world[pacman.y - 1][pacman.x] != 2) {
			pacman.rotate = 265;
			pacman.y--;
		}
		else if(pacman.direction  == "down" && world[pacman.y + 1][pacman.x] != 2) {
			pacman.rotate = 90;
			pacman.y++;
		}

		if (world[pacman.y][pacman.x] == 1) {

			world[pacman.y][pacman.x] = 0;

			if(score %20 == 0) {
				let sound =new Audio('assets/eat.mp3');
				sound.playbackRate=2;
				sound.play();
			}

				score += 10;
				displayWorld();
				displayScore();
		}
		else if (world[pacman.y][pacman.x] == 3) {
			world[pacman.y][pacman.x] = 0;
			score += 20;
			displayWorld();
			displayScore();
			pacman.power = true;
			setTimeout(function() {
			pacman.power = false;
			}, 5000)
		}

		for(let i = 0; i<ghostArr.length; i++) {
			die(ghostArr[i]);
		}

		displayPacman();
	}

	function moveGhost(ghost) {
		let moveDirection = ["left", "right", "top", "down"];

		if(ghost.name == "ghost1" && pacman.power == false) {

			if(pacman.x < ghost.x  && world[ghost.y][ghost.x - 1] != 2 ) {
				ghost.direction = "left";
			}
			else if(pacman.x > ghost.x  && world[ghost.y][ghost.x + 1] != 2) {
				ghost.direction = "right";
			}
			else{

				if(pacman.y < ghost.y  && world[ghost.y - 1][ghost.x] != 2) {
					ghost.direction = "top";
				}
				else if(pacman.y > ghost.y  && world[ghost.y + 1][ghost.x] != 2) {
					ghost.direction = "down";
				}
			}
		}
		
		if(ghost.name != "ghost1" && pacman.power == false) {
			if(	(ghost.direction == "top" && world[ghost.y - 1][ghost.x] == 2) ||
				(ghost.direction == "down" && world[ghost.y + 1][ghost.x] == 2) ||
				(ghost.direction == "right" && world[ghost.y][ghost.x + 1] == 2) ||
				(ghost.direction == "left" && world[ghost.y][ghost.x - 1] == 2 )) {
				
				let x = Math.floor(Math.random() * 4);
				ghost.direction = moveDirection[x];
			}
		}

		if(pacman.power) {
			if (pacman.x <= ghost.x  && world[ghost.y][ghost.x + 1] != 2 ) {
				ghost.direction = "right";
			}
			else if (pacman.x >= ghost.x  && world[ghost.y][ghost.x - 1] != 2) {
				ghost.direction = "left";
			}
			else {

				if (pacman.y <= ghost.y  && world[ghost.y + 1][ghost.x] != 2) {
					ghost.direction = "down";
				}
				else if (pacman.y >= ghost.y  && world[ghost.y - 1][ghost.x] != 2) {
					ghost.direction = "top";
				}
			}
		}

		if(ghost.direction == "left" && world[ghost.y][ghost.x - 1] != 2) {
			ghost.x--;
			}
			else if(ghost.direction  == "right" && world[ghost.y][ghost.x + 1] != 2) {
			ghost.x++;
			}
			else if(ghost.direction  == "top" && world[ghost.y - 1][ghost.x] != 2) {
			ghost.y--;
			}
			else if(ghost.direction  == "down" && world[ghost.y + 1][ghost.x] != 2) {
			ghost.y++;
			}
		die(ghost);
		displayGhost(ghost);
	}

	document.onkeydown = function (e) {
		if(e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2) {
			pacman.direction = "left";
		} else if(e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2) {
			pacman.direction = "right";
		} else if(e.keyCode == 38 && world[pacman.y - 1][pacman.x] != 2) {
			pacman.direction = "top";
		} else if(e.keyCode == 40 && world[pacman.y + 1][pacman.x] != 2) {
			pacman.direction = "down";
		}
	};

	for(let i = 0; i<ghostArr.length; i++) {
		setInterval(moveGhost, 250, ghostArr[i]);
	}

	setInterval(move, 150);
	displayWorld();
	displayPacman();
	displayScore();
});