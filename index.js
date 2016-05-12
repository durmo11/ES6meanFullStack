exports.handler = function(event, context) {
  console.log('Loading event');
var AWS = require('aws-sdk');
//var dynamodb= new AWS.DynamoDB({ endpoint: new AWS.Endpoint('http://localhost:8000') });
AWS.config.update({
  region:"us-east-1",
  endpoint: "http://localhost:8000",
});

var dynamodb = new AWS.DynamoDB();
    console.log("Request received:\n", JSON.stringify(event));
    console.log("Context received:\n", JSON.stringify(context));

    var tableName = "local.aws.dynamo";
    var item = {
       "TableName": tableName,
           "Item": {
               "clientName": {
                   "S": event.clientName
               },
               "description":{
                   "S":event.description
               }
           }
   };

    dynamodb.putItem(item, function(err, data) {
        if (err){
            console.log(JSON.stringify(err, null, 2));
            context.fail('ERROR: Dynamo failed: ' + err);
        } else {
            console.log(JSON.stringify(data, null, 2));
            console.log('Dynamo Success: ' + JSON.stringify(data, null, '  '));
            context.succeed('SUCCESS');
        }
    });
}
