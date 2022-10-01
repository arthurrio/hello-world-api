var express = require('express'), app = express(), port = 3000;
let countCalls = 0;

app.get('/', function (req, res) {

    res.end(`
    <body style="background-color: darkslategray">
        <div style="color:blanchedalmond; position: fixed; top: 30%;  left: 46.5%; transform: translate(-50%, -50%); text-align: center">
            <h1>Wellcome!</h1>
            <h2>Server is Up</h2>
            <p>Endpoint: <a href="http://localhost:3000/hello-world">/hello-world</a></p>
        </div>
    </body>`);})

app.get('/hello-world', function (req, res) {
    countCalls++;
    console.log(`Hello Wolrd - ${countCalls}`)
    res.end(`
    <body style="background-color: darkslategray">
        <div style="color:blanchedalmond; position: fixed; top: 30%;  left: 46.5%; transform: translate(-50%, -50%); text-align: center">
             <h1>Hello Wolrd - ${countCalls}</h1>
        </div>
    </body>`);

})

var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Server is running at address ${host}:${port}`);
});