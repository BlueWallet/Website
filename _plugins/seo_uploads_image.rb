# frozen_string_literal: true

# Front matter `image:` is a path under /uploads/ (the post cover uses the same
# value). jekyll-seo-tag otherwise joins a relative path to the page URL, so
# `image: blog/x.jpg` becomes https://bluewallet.io/<slug>/blog/x.jpg and 404s.
# Resolve those paths from /uploads/ before og:image, twitter:image, and JSON-LD.

module Jekyll
  class SeoTag
    class ImageDrop
      private

      def build_absolute_path
        path = raw_path
        return path unless path.is_a?(String) && absolute_url?(path) == false

        unless path.start_with?("/")
          path = "/uploads/#{path.delete_prefix("/")}"
        end

        filters.absolute_url(path)
      end
    end
  end
end
