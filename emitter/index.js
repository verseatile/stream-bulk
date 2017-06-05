// event emitter testing
const EventEmitter = require('events')
const util = require('util')

// const emitter = new EventEmitter();

// emitter.on('cheddar', () => {
// 	console.log('i just had some cheddar brah')
// })

//emitter.emit('cheddar')

//* passes second arguement into the prototype of the first
util.inherits(Funk, EventEmitter);

function Funk() {
	/***
	grabs parent properties of another object and
	places them inside. would go inside of another function
	or class to inherit properties that arent prototypes.
	If they were prototypes, use util.inherits.
	similar to 'super()' for classes
	***

	Person.call(this)
	*/
	this.style = "TYPE WILD";
}

Funk.prototype.squad = function(data) {
	console.log(`${this.style} but we out here!`);
	this.emit('cheddar', {uno: "wavy", dos: "jones"});
}



brah.on('cheddar', function(data){
	console.log(`AYE WE GOT THE DATA: ${data.uno} X ${data.dos}`);
})

brah.squad();
console.log(brah.style)
