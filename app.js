const express = require("express")
const app = express()
const PORT = 4000
const {createPool} = require("mysql")
const pool = createPool({
    host: "mysql_database",
    user: "nodejs_user",
    password: "12345",
    connectionLimit: 10
})
pool.query("select * from nodejs_db.test",(err, res)=>{
    return console.log(res)
})
app.get('/', (req, res) => {
    res.send('Connection Success to DB')
})

app.listen(PORT, () => {
    console.log('Example app listening at http://localhost:'+PORT)
})