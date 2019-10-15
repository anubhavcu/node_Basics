const EventEmitter = require('events');
const uuid = require('uuid');
//uuid is used for rand id generation - install using 'npm install uuid'

class Logger extends EventEmitter{
  log(msg){
    this.emit('event0', {id: uuid.v4(), message: msg})
  }
}

module.exports = Logger;

const logger = new Logger();
logger.on('event0',data => console.log('Event Listened ...' , data));

logger.log('Hello world');
logger.log('Hi');
logger.log('Hello');