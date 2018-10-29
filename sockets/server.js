const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port: 9090})

let clients = []

wss.on('connection', (connection) => {
  clients.push(connection)
  broadcast({username: "admin", message: "A USER HAS ENTERED THE ROOM"})

  connection.on('message', (message) => {
    const data = JSON.parse(message)
    broadcast(data)
  })
})

setInterval(cleanUP, 100)

function broadcast (message){

  const data = JSON.stringify(message)

  clients.forEach(client => client.send(data))

}

function cleanUP(){

  const clientsLeaving = clients.filter(client => client.readyState === client.CLOSED)
  clients = clients.filter(client => client.readyState !== client.CLOSED)
  clientsLeaving.forEach(client => broadcast({username: admin, message: "A USER HAS LEFT THE ROOM"}))
}
