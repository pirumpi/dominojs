module.exports = (server) => {
    const io = require('socket.io')(server);

    io.on('connection', socket => {
        console.log('Player Online');


        socket.on('disconnect', () => {
            console.log('Player offline');
        })
    });
};
