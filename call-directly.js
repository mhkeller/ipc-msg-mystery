var spawn = require('child_process').spawn


var child = spawn('node', 
                ['child.js'],
                {stdio: 
                  ['inherit', 'inherit', 'inherit', 'ipc']
                })

child.on('close', function (code) {
  console.log('Closed with code: ', code)
})

child.on('message', function (message) {
  console.log('Message received from child: ', message)
})
