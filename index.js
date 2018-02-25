const pg = require("pg");

const user = "postgres";
const ip = "192.168.99.100";
const port = "32772";
const db = "demo"

const conString = "postgres://" + user + ":@" + ip + ":" + port + "/" + db;

var client = new pg.Client(conString);

client.connect(function(err){

    if(err){

        console.log(err);
    
    }

    client.query('SELECT id FROM testuser',function(err,result){

        if(err){

            console.log(err);
        
        }

        console.log(result.rows[0].id);

        client.end();

    });

});