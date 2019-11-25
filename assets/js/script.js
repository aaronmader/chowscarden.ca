// var menu = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
var menu = {
	"items": [
		{
			"category": "Lunch Special",
			"name": "Sweet and Sour Chicken Balls with Chicken Fried Rice",
			"description": "Served with Egg Roll. 11am - 3pm.",
			"price": "$8.00",
		},
		{
			"category": "Lunch Special",
			"name": "Sweet and Sour Pork with Chicken Fried Rice",
			"description": "Served with Egg Roll. 11am - 3pm.",
			"price": "$8.00",
		},
		{
			"category": "Lunch Special",
			"name": "General Chicken with Chicken Fried Rice",
			"description": "<i class='fas fa-pepper-hot'></i> Served with Egg Roll. 11am - 3pm.",
			"price": "$8.00",
			"is_spicy": true,
		},
		{
			"category": "Combination Platter",
			"name": "General Chicken with Chicken Fried Rice",
			"description": "<i class='fas fa-pepper-hot'></i> Served with Egg Roll. 11am - 3pm.",
			"price": "$8.00",
			"is_spicy": true,
		},
	]
}
// console.log(JSON.stringify(menu))
// console.log(menu)

var options = {
  	valueNames: [ 'category', 'name', 'description', 'price', 'tags' ],
  	// Since there are no elements in the initial list, this will be used as template.
  	item: '<div class="menu_item"><div class="price"></div><div class="category"></div><h3 class="name"></h3><div class="description"></div></div>'
};

var userList = new List('menu', options, menu.items);

document.getElementById('category_filter').onchange = function(){
	let v = this.options[this.selectedIndex].value
	if(v){
		userList.filter(function(item){
			if (item.values().category == v) {
			   return true;
			} else {
			   return false;
			}
		})
	}else{
		userList.filter()
	}
}

document.getElementById('exclude_spicy').onchange = function(){
	let v = this.checked
	if(v){
		userList.filter(function(item){
			if (item.values().is_spicy) {
			   return false;
			} else {
			   return true;
			}
		})
	}else{
		userList.filter()
	}
}
