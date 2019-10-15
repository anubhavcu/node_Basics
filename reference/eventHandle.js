const Event = require('./event');

const obj = new Event();

obj.on('event1', res => console.log(res))

obj.message('Anubhav');