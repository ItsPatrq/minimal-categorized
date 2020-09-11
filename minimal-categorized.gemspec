# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "minimal-categorized"
  spec.version       = "0.0.1"
  spec.authors       = ["Patryk Bieszke"]
  spec.email         = ["bieszke.patryk@gmail.com"]

  spec.summary       = "minimal-categorized is a Jekyll theme for GitHub Pages"
  spec.homepage      = "http://127.0.0.1:4000/about.html"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(pages|assets|_layouts|_includes|_sass|_data|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
