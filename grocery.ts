class Grocery {
	name: string;
	quantity: number;
	id: string;
	
	constructor(name: string, quantity: number, id: string) {
		this.name = name;
		this.quantity = quantity;
		this.id = id;
	}
}

let milk = new Grocery("Milk", 100, "G001");
let bread = new Grocery("Bread", 150, "G002");
let eggs = new Grocery("Egg", 200, "G003");


var groceries:Grocery[] = new Array(milk, bread, eggs);

function loadTable() {
	var data = "<table style='border: 1px solid black;width:100%'>";
	var data = data + "<tr><th>Id</th><th>Name</th><th>Quantity</th></tr>";
	for (var i=0; i < groceries.length; i++) {
		data = data + "<tr>";
		data = data + "<td align='center'>" + groceries[i].id + "</td>";
		data = data + "<td align='center'>" + groceries[i].name + "</td>";
		data = data + "<td align='center'>" + groceries[i].quantity + "</td>";
		data = data + "</tr>";
	}
	data = data + "</table>";
	document.getElementById("table-data").innerHTML = data;
}