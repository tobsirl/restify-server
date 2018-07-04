import restify from 'restify';
import mongoose from 'mongoose';

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

// Connect to database
mongoose
  .connect('mongodb://localhost:27017/restify-item')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(3000, function() {
  console.log('%s listening at %s', server.name, server.url);
});
