## Highlights

- Free hosting (github)
- Easy to edit
- Responsive theme
- Interactive menu:
    - Filter by category and tags
    - Star your favourites
- Focus on mobile accessibility.


## Todo:

- menu:
    - create a json object representing the menu
        - name
        - description (optional)
        - price
        - category
        - tags (ex: spicy)
    - create a template to render each menu item (using vue.js?)
    - enable some basic filtering options (list.js?)
        - category
        - tags (as checkboxes)
    - enable toggling of favourites (check/uncheck a heart icon, or maybe just a checkbox or maybe both?)
        - store in window.localStorage
    - include a 'call now' button to place your order.
        - takes you to a simple (non-interactive), text list of your favourite/checked items, and the phone number.
- can I embed google reviews?
- Main menu:
    - Directions
    - Order Take-out
    - Menu


## Local Deveopment

Run the command: `docker-compose up -d`, and navigate to http://localhost:4000/.
