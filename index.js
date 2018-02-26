const pg = require("pg");

const user = "postgres";
const ip = "192.168.99.100";
const port = "32768";
const db = "demo"

const conString = "postgres://" + user + ":@" + ip + ":" + port + "/" + db;

var client = new pg.Client(conString);

client.connect().then((err)=>{

    if(err){

        console.log(err);
    
    }

    client.query('SELECT id FROM testuser').then((result,err)=>{

        if(err){

            console.log(err);
        
        }

        console.log(result.rows[0].id);

        client.end();

    });

});