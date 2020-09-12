# [minimal-categorized Jekyll theme](https://github.com/ItsMeaga1n/minimal-categorized/)

[![LICENSE](https://img.shields.io/badge/license-MIT-lightgrey.svg)](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-%3E%3D%203.9-blue.svg)](https://jekyllrb.com/)
[![Ruby gem](https://img.shields.io/gem/v/minimal-mistakes-jekyll.svg)](https://rubygems.org/gems/minimal-mistakes-jekyll)

minimal-categorized is a flexible Jekyll theme, designed for sites with content easily aggregated into categories. Demo is available [here](https://itsmeaga1n.github.io/minimal-categorized/).

![layout examples](screenshot.png)

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "minimal-categorized"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: minimal-categorized
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install minimal-categorized

## Usage

This theme is based on separating content into categories, which is later shown on separated sites designated to the specific content type.

As for now, theme allows to use two main categories that will be displayed on home screen and more categories displayed only in menu to further separate content. Those are defined in `_data/menu.yml`.

Structure of `_data/menu.yml`:
TODO

Structure of `_data/metaData.yml`:
TODO

## Contributing

Bug reports and pull requests are welcome on [GitHub](https://github.com/ItsMeaga1n/minimal-categorized). This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `minimal-categorized.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

