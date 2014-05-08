/**
 * Created by TK on 2014. 5. 6..
 */
var fs = require("fs");


fs.readdir(".",function(status, data){
    console.log(data[0]);
});