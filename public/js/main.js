$(document).ready(function(){
	var messages = [];
	var socket = io.connect('http://localhost:3000');
	var chatForm = $('#chatForm');
	var message = $('#chatInput');
	var chatWindow = $('#chatWindow');
	var userForm = $('#userForm');
	var username = $('#username');
	var users = $('#users');
	var error = $('#error');

	// Submit User Form
	userForm.submit(function(e){
		e.preventDefault();
		socket.emit('set user', username.val(), function(data){
			if(data){
				$('#userFormWrap').hide();
				$('#mainWrap').show();
			} else {
				error.html('Username is already taken');
			}
		});
	});
	chatForm.submit(function(e){
		e.preventDefault();
		socket.emit('send message',message.val());
		message.val('');

	});

	socket.on('show message',function(data){
          chatWindow.append('<strong>'+data.user+'</strong>'+data.msg+'<br>');
	});

	// Display Usernames
	socket.on('users', function(data){
		var html = '';
		for(i = 0; i < data.length; i++){
			html += '<li class="list-group-item">'+data[i]+'</li>';
		}
		users.html(html);
	});
});