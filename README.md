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


## Setup Instructions

```
# see: https://jekyllrb.com/docs/installation/ubuntu/
sudo apt-get install ruby-full build-essential zlib1g-dev
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
gem install jekyll bundler
```

## Local Deveopment

Run the command: `bundle exec jekyll serve`, and navigate to http://localhost:4000/.
