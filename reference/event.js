const EventEmitter = require('events');

class Event extends EventEmitter{
  message(name) {
    console.log(`Hello world ${name}`)

    this.emit('event1', 5);
  }
}

module.exports = Event;
//(used in eventHandle.js)


// const emitter = new EventEmitter();

// emitter.on('event1', (res)=>console.log(`Event listened .. ${res.name}`));
// // emitter.on('event1', (res)=>console.log(res));

// emitter.emit('event1', {id: 1, name: 'JohnDoe'});
// //we can pass any value, function,object while emitting an event