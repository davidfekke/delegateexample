
function parent() {
    return this;
}

function child() {
    //parent.call(this);
    return this;
}

child.prototype = Object.create(parent.prototype);

parent.prototype.doWorkForChild = function() {
    console.log('Doing something');
    setTimeout(() => {
        const time = new Date();
        const currentTime = time.getTime();
        this.setStatus(currentTime);
    }, 5000);
}

parent.prototype.sayHelloToMe = function(name) {
    this.setStatus(`Hello ${name}`);
}

parent.prototype.setStatus = function(status) {
    console.log('setStatus called');
}

child.prototype.start = function() {
    console.log('Starting child');
    this.sayHelloToMe('Parent');
    this.doWorkForChild();
}

child.prototype.print = function() {
    console.log('Printing child');
}

child.prototype.setStatus = function(status) {
    console.log(`Current Status: ${status}`);
}

const childInstance = new child();
childInstance.start();
