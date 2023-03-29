const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js')
const bodyParser = require('body-parser')

/* config body-parser */
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    console.log('root!')
})




app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})