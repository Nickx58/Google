class Observer {
    constructor() {
        this.subscriber = [];
    }

    subscribe(fn) {
        this.subscriber.push(fn);
    }

    unSubscribe(fn) {
        this.subscriber = this.subscriber.filter(item => item !== fn);
    }

    broadcast(data) {
        for (let i = 0; i < this.subscriber.length; i++) {
            this.subscriber[i](data);
        }
    }
}