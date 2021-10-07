from flask import Flask
from flask.globals import request
from flask_socketio import SocketIO, emit, join_room, leave_room

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

connected_clients = 0

# Id's of the rooms
rooms = []

# New connection
@socketio.on('connect')
def on_connection():
    global connected_clients
    connected_clients += 1
    print('Client {} connected: {} connected clients'.format(request.sid, connected_clients))

@socketio.on('disconnect')
def on_disconnect():
    global connected_clients
    connected_clients -= 1
    print('Client {} disconnected: {} connected clients'.format(request.sid, connected_clients))

# A socket has requested to join a room
@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    rooms.append(room)
    emit('user_joined', username, to=room, include_self=False)
    print('{} has joined room: {}'.format(username, room))

# A socket has left a room
@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    emit('user_left', username, to=room, include_self=False)
    print('{} has left room: {}'.format(username, room))

# Message received
@socketio.on('send_msg')
def on_message(data):
    username = data['username']
    content = data['content']
    room = data['room']
    print('({}) Message from {}: {}'.format(room, username, content))
    emit('receive_msg', data, to=room, include_self=False, json=True)

# Get the created rooms list and client count
@socketio.on('get_status')
def on_get_status():
    status = {'clients': connected_clients, 'rooms': rooms}
    emit('get_status', status, json=True)

if __name__ == '__main__':
    socketio.run(app)

