const { Pool, Client } = require('pg')
require('dotenv').config()
var fs = require('fs');

const pool = new Pool()
const query = fs.readFileSync('./createQuery.txt', 'utf-8')
console.log(query)
pool
	.query(query)
	.then(res => console.log(res))
	.catch(err =>
		setImmediate(() => {
			throw err
		})
	)

