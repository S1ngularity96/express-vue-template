const { Server } = require('socket.io')
class Socket {
    constructor(server) {
        if (!Socket.instance) {
            this.io = new Server(server, { cors: { origin: '*' }, transports: ["websocket"] })
            Socket.instance = this;
            this.onConnection();
        }
        return Socket.instance;
    }

    onConnection() {
        this.io.on('connection', client => {
            console.log(`Client connected ${client.id}`);
        })
    }

    emit(topic, msg) {
        this.io.emit(topic, msg);
    }

    echo(id, data) {
        console.log(id)
        console.log(data)
    }


}

module.exports = Socket;
