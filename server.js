// const http = require('http');

// const server = http.createServer((req, res) => {

//      if (req.url === '/') {
//         res.writeHead(200, { 'content-Type': "text/plain" })
//         return res.end("Welcome to our Webbserver")
//      }
//      res.writeHead(404, { 'content-Type': "text/plain" })
//      res.end("404. Page is not a part of our webbserver")
// })

// const port = 3000
// server.listen(3000, () => {
//     console.log("Server is running on port 3000")
// })


const http = require('http')

const server = http.createServer((req, res) => {

    if(req.url === '/contact'){
        res.writeHead(200, { 'Content-Type ': "text/plain" })
        return res.end(`
        Contact us on
        Name: -----
        Phone: -----
        Email: -----
        `);
    }
    res.writeHead(404, { 'content-Type': "text/plain" })
    res.end("404. Page is not a part of our webbserver")
})

const port = 3000;
server.listen(port, () => {
    console.log("Server is runing on port 3000")
})