# WineCellar
A wine cellar application which includes the basic CRUD operations

Server Side Setup

  How to make the project
  1.	install mongodb
  2.	install node
  3.	store server in a xyz folder
  4.	install the mongo driver in this xyz folder
  5.	install express also in this folder (I guess this could be somewhere else)

  Running the project
  1.	Start cmd-> go to mongo bin (will be in program files)
  2.	Enter "mongod --dbpath \<project folder path\>" in command prompt, this will start the server with where the database is located.
      This denotes the project in the folder path. This keeps database at the server code end
  4.	Open another cmd -> go to \<project folder path ]> -> node \<server.js\>
  5.	This starts the node based web server
  6.	Now for the client end code (could be through curl or wamp)


Running a client on localhost
1. Start wamp
2. Store the front end code in the www folder of wamp
3. Open localhost/projectName….
4. To refresh the front end after change do a ctrl+F5
