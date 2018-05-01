# GraphQL book list Client

This is just a sample code following [a tutorial on YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f) thanks to [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg).

## Running the project
To run this project you'll need nodejs and npm installed on your system. You should be able to run this on your linux, windows and mac machine.

### 1. Clone the project, than cd into the project directory:

```
$ git clone https://github.com/nagyfej/graphql-booklist-client.git
$ cd graphql-booklist-client
```

### 2. Install dependencies
```
npm install
```

### 3. Set up the graphQL server

The server is in a different project. To set up the graphQL server, [follow the install instructions](https://github.com/nagyfej/graphql-playlist-server). By default it will listen on localhost:4000.

### 4. Set up the server connection

Create a local copy from the .env file:
```
$ cp default.env .env
```
If you use the server project, you won't have to change the server URL.

### 5. Start the development server
```
npm start
```

### 6. Check out the sample application
Visit `http://localhost:3000` to play around with your new graphql client.
