<<<<<<< HEAD
E-Chat : Built a complete Chat application using Node, Express and Socket.IO(Javascript library for relatime web applications) . It is a real time chat app .

Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for node.js. Both components have a nearly identical API. Like node.js, it is event-driven.

Socket.IO primarily uses the WebSocket protocol with polling as a fallback option,[2] while providing the same interface. Although it can be used as simply a wrapper for WebSocket, it provides many more features, including broadcasting to multiple sockets, storing data associated with each client, and asynchronous I/O.

It can be installed with the npm tool.

Socket.IO provides the ability to implement real-time analytics, binary streaming, instant messaging, and document collaboration.[5] Notable users include Microsoft Office, Yammer, and Zendesk.[6]

Socket.IO handles the connection transparently. It will automatically upgrade to WebSocket if possible. This requires the programmer to only have Socket.IO knowledge.

Socket.IO is not a WebSocket library with fallback options to other realtime protocols. It is a custom realtime transport protocol implementation on top of other realtime protocols. Its protocol negotiation parts cause a client supporting standard WebSocket to not be able to contact a Socket.IO server. And a Socket.IO implementing client cannot talk to a non-Socket.IO based WebSocket or Long Polling Comet server. Therefore, Socket.IO requires using the Socket.IO libraries on both client and server side.

=======
# E-Chat
  It is a real time chat application and works with web sockets. Here the Users will be able to see messages of the other users online and chat with them without any kind of refresh of the browser based on the concept of instant messaging.
>>>>>>> 0ffe2c11d1d646aec3a9eb53f3042f1c4330a605
