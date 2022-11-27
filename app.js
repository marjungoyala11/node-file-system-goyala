const add = require('./add')
const read = require('./read')
const write = require('./write')
const present = require('./present')

//get user input
const cmd = process.argv

var note = {}

if(cmd[2] == 'add' ) {
    // build object
    note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
// get old note value
var oldnote = read()
//add note to note.txt
add(note, oldnote)
}

if(cmd[2] == 'read') {
    present(read())
}