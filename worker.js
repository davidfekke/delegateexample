function createWorker() {
    if (new.target) 
        throw 'createWorker() must not be called with new';
    
    let delegate;

    function setDelegate(observer) {
        delegate = observer;
    }

    function doWorkForDelegate() {
        console.log('Doing something');
        setTimeout(() => {
            const time = new Date();
            const currentTime = time.getTime();
            delegate.setStatus(currentTime);
        }, 5000);
    }

    function sayHelloToMe(name) {
        delegate.setStatus(`Hello ${name}`);
    }

    return Object.freeze({
        setDelegate,
        doWorkForDelegate,
        sayHelloToMe
    });
}

export default createWorker;
