import mqtt from 'mqtt'

export default (topic, callback) => {
  let client = mqtt.connect({port: 9001, host: '120.24.55.58', keepalive: 2000})
  client.subscribe(`dt2014/web/${topic}`)
  client.on('message', (topic, message) => {
    let data = JSON.parse(message.toString())
    callback(data)
  })
}
