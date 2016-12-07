var express = require('express'),
app = express(),
path = require('path'),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
users = [];

// Set View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.engine('jade', require('jade').__express);

// Set Static path
app.use(express.static(path.join(__dirname, 'public')));

// Connect to Socket
io.sockets.on('connection', function(socket){
	// Set Username
	socket.on('set user', function(data, callback){
		if(users.indexOf(data) != -1){
			callback(false);
		} else {
			callback(true);
			socket.username = data;
			users.push(socket.username);
			updateUsers();
		}
	});

	function updateUsers(){
		io.sockets.emit('users', users);
	}

	socket.on('send message', function(data){
		io.sockets.emit('show message',{msg: data, user: socket.username});
	});

	socket.on('disconnect', function(data){
		if(!socket.username) return;
		users.splice(users.indexOf(socket.username), 1);
		updateUsers();
	});
});

// Index Route
app.get('/', function(req, res){
	res.render('index');
});

server.listen(8000);
console.log('Server Started...');