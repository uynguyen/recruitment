try{
	var myArgs = process.argv; //Get arguments from user

	if(myArgs.length < 3){
		console.log("The number of argument is invalid !");
		return;
	}
	var inSku = myArgs[2];

	// Read Synchrously
	var fs = require("fs");
	var contents = fs.readFileSync("orders.json");
	var data = JSON.parse(contents);

	var result = 0;

	for(var key in data.rows) {
		var order = data.rows[key].doc.order_items;
		for(var index_order_item in order){
		 	if(order[index_order_item].sku == inSku){
		 		result += parseInt(order[index_order_item].qty_ordered);
		 	}
		}
	}

	console.log(result + " times");

}
catch(err){
	console.log("An error occurs: " + err);
}
