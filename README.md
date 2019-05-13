## Highlights

- Free hosting (github)
- Easy to edit
- Responsive theme
- Interactive menu:
    - Filter by category and tags
    - Star your favourites
- Focus on mobile accessibility.


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
