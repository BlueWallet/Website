# frozen_string_literal: true

# Front matter `image:` is a path under /uploads/, same as the post cover.
# jekyll-seo-tag joins a relative path to the page URL, so `image: blog/x.jpg`
# becomes https://bluewallet.io/<slug>/blog/x.jpg and 404s. Make it root-relative
# before render so og:image, twitter:image, and JSON-LD use /uploads/.

Jekyll::Hooks.register [:pages, :posts, :documents], :pre_render do |doc|
  image = doc.data["image"]
  next unless image.is_a?(String)
  next if image.empty?
  next if image.start_with?("/", "http://", "https://")

  doc.data["image"] = "/uploads/#{image.delete_prefix("/")}"
end
