# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "rzs-main-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["alex-zaplik"]
  spec.email         = ["zaplikpl@gmail.com"]

  spec.summary       = "This is a short summary"
  spec.homepage      = "TODO: Put your gem's website or public repo URL here."
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.6.2"

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
