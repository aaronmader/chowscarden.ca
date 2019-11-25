var menu = {
	"menu": [
		{
			"category": "",
			"name": "",
			"description": "",
			"price": 123.32,
			"tags": []
		},
	]
}
var json_string = JSON.stringify(menu);
document.getElementById('my_textarea').innerHTML = json_string
