const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ app: 'api1-cloud', message: 'สวัสดี DevOps', version: '1.0.0' }));
});

server.listen(port, () => console.log(`api1-cloud listening on http://localhost:${port}`));