function bufferEmptyException() {};
function bufferFullException() {};

var Buffer = function(size) {
  this.elements = [];
  this.size = size;
  this.head = 0;
  this.tail = 0;
}

var circularBuffer = function(size) {
  return new Buffer(size);
};

Buffer.prototype.moveHead = function() {
  this.head = (this.head + 1) % this.size;
}

Buffer.prototype.headValue = function() {
  return this.elements[this.head];
}

Buffer.prototype.read = function() {
  var result = this.headValue();
  if(result) {
    this.elements[this.head] = undefined;
    this.moveHead();
    return result;
  } else {
    throw new bufferEmptyException();
  }
}

Buffer.prototype.write = function(input) {
  if (this.tail === this.head && this.headValue()) {
    throw new bufferFullException();
  }

  if(input) {
    this.elements[this.tail] = input;
    this.tail = (this.tail + 1) % this.size;
  }
}

Buffer.prototype.forceWrite = function(input) {
  if(input) {
    this.elements[this.head] = input;
    this.tail = this.head;
    this.moveHead();
  }
}

Buffer.prototype.clear = function() {
  this.elements = [];
}

module.exports.circularBuffer = circularBuffer;
module.exports.bufferEmptyException = bufferEmptyException;
module.exports.bufferFullException = bufferFullException;
