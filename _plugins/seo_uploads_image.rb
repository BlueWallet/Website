# frozen_string_literal: true

# Front matter `image:` is a path under /uploads/, same as the post cover.
# jekyll-seo-tag joins a relative path to the page URL, so `image: blog/x.jpg`
# becomes https://bluewallet.io/<slug>/blog/x.jpg and 404s. Make it root-relative
# before render so og:image, twitter:image, and JSON-LD use /uploads/.

Jekyll::Hooks.register [:pages, :posts, :documents], :pre_render do |doc, payload|
  image = doc.data["image"]
  next unless image.is_a?(String)
  next if image.empty?
  next if image.start_with?("/", "http://", "https://")

  image = "/uploads/#{image.delete_prefix("/")}"
  doc.data["image"] = image

  # Pages copy front matter into the payload before this hook. Posts read data live.
  page = payload["page"] if payload.respond_to?(:[])
  page["image"] = image if page.is_a?(Hash)
end
