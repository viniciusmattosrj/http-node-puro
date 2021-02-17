const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO', req.method);
    console.log('HEADERS', req.headers);
    console.log('HTTP VERSÃO', req.httpVersion);

    if (req.method === "POST") {
        res.writeHead(201, {
            'Content-Type': 'application/json'
        });

        res.write('{"message": "Cadastro efetuado com sucesso"}');
    };

    if (req.method === "GET") {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        
        res.write(`
            <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <title>Xablau Tech</title>
                </head>
                <body>
                    <h1>Xablau!</h1>
                </body>
                </html>
        `);
    }
});

srv.listen(process.env.PORT, () => {
    console.log('Servidor Funcionando. \o/ ');
});