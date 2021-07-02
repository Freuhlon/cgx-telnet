const telnetlib = require('telnetlib');

const server = telnetlib.createServer({}, (c) => {
    c.on('negotiated', () => {
        c.write('Connecté au server telnet');
    });

    c.on('data', (data) => {
        c.write(data);
    });
});

server.listen(23);
