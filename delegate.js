
import createWorker from './worker.js';

const worker = createWorker();

function createDelegate() {
    
    function start() {
        console.log('Starting delegate');
        worker.sayHelloToMe('Delegate');
        worker.doWorkForDelegate();
    }

    function print() {
        console.log('Printing delegate');
    }

    function setStatus(status) {
        console.log(`Current Status: ${status}`);
    }

    const instance = Object.freeze({
        start,
        print,
        setStatus
    });

    worker.setDelegate(instance);

    return instance;
}

const delegate = createDelegate();

delegate.start();
//worker.sayHelloToMe('Delegate');
