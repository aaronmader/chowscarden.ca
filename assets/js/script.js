// var menu = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
var menu = {
	"items": [
		{
			"category": "Combination Platter",
			"name": "CP #1: Honey Garlic Spare Ribs",
			"description": "Egg Roll<br>Chicken Chow Mein<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #2: Sweet & Sour Pork (Cantonese Style)",
			"description": "Egg Roll<br>Chicken Chow Mein<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #3: Sweet & Sour Chicken Balls",
			"description": "Egg Roll<br>Chicken Chow Mein<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #4: Sweet & Sour Shrimp",
			"description": "Egg Roll<br>Chicken Chow Mein<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #5: Jar Doo Chicken Wings",
			"description": "Egg Roll<br>Chicken Chow Mein<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #6: Sweet & Sour Chicken Balls & Breaded Shrimp",
			"description": "Egg Roll<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #7: Sweet Sour So Guy",
			"description": "Egg Roll<br>Guy Ding<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #8: General Chicken",
			"description": "Egg Roll<br>Vegetables Lo Mein<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #9: Beef Broccoli, and Sesame Chicken",
			"description": "Egg Roll<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "CP #10: Sweet & Sour Chicken Balls",
			"description": "Egg Roll<br>Chicken Lo Mein<br>Chicken Fried Rice<br>Sorry - There will be no substitutions on combination platters",
			"price": "$10.25",
		},
		{
			"category": "Combination Platter",
			"name": "Dinner for Two",
			"description": "Two Egg Rolls (2)<br>Sweet & Sour Chicken Balls<br>Pork Chow Mein<br>Chicken Fried Rice<br>Fortune Cookies<br>Sorry - There will be no substitutions on combination platters",
			"price": "$27.50",
		},
		{
			"category": "Combination Platter",
			"name": "Dinner for Three",
			"description": "Three Egg Rolls (3)<br>Sweet & Sour Pork Cantonese Sauce<br>Mushroom Chow Mein<br>Chicken Fried Rice<br>Guy Ding<br>Fortune Cookies<br>Sorry - There will be no substitutions on combination platters",
			"price": "$36.20",
		},
		{
			"category": "Combination Platter",
			"name": "Dinner for Four",
			"description": "Four Egg Rolls (4)<br>Sweet & Sour Chicken Balls<br>Breaded Shrimp<br>Mushroom Chow Mein<br>Chicken Fried Rice<br>Guy Ding<br>Fortune Cookies<br>Sorry - There will be no substitutions on combination platters",
			"price": "$49.50",
		},
		{
			"category": "Combination Platter",
			"name": "Dinner for Five",
			"description": "Five Egg Rolls (5)<br>Sweet & Sour Chicken Balls<br>Breaded Shrimp<br>Sesame Chicken<br>Sam See Chow Mein<br>Beef with Mixed Vegetables<br>Chicken Fried Rice<br>Fortune Cookies<br>Sorry - There will be no substitutions on combination platters",
			"price": "$64.95",
		},
		{
			"category": "Combination Platter",
			"name": "Dinner for Six",
			"description": "Six Egg Rolls (6)<br>Sweet & Sour Chicken Balls<br>Breaded Shrimp<br>Jar Doo Chicken Wings<br>Chicken Lo Mein<br>Chicken Fried Rice<br>Beef with Broccoli<br>Fortune Cookies<br>Sorry - There will be no substitutions on combination platters",
			"price": "$85.00",
		},







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

var category_choice = null;
var spicy_choice = null;
function my_filterer(item){
	let valid = true
	if (category_choice && item.values().category != category_choice){
		valid = false
	}
	if (spicy_choice && item.values().is_spicy){
		valid = false
	}
	return valid;
}

document.getElementById('category_filter').onchange = function(){
	category_choice = this.options[this.selectedIndex].value
	userList.filter(my_filterer)
}

document.getElementById('exclude_spicy').onchange = function(){
	spicy_choice = this.checked
	userList.filter(my_filterer)
}
