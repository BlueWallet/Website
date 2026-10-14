# frozen_string_literal: true

# Front matter `image:` stays a path under /uploads/ (`blog/x.jpg`). Templates
# prefix that themselves. jekyll-seo-tag must not read a rewritten copy of the
# same field, or those prefixes become /uploads//uploads/. Resolve the social
# URL here, and give templates one filter that collapses a repeated /uploads/.

require "jekyll-seo-tag"

module Jekyll
  module UploadsImage
    module_function

    def normalize(input)
      return if input.nil?

      path = input.to_s.strip
      return if path.empty?
      return path if path.start_with?("http://", "https://")
      return path if path.start_with?("/") && !path.match?(%r{\A/uploads(?:/|$)}i)

      stripped = path.dup
      stripped.sub!(%r{\A/uploads/+}i, "") while stripped.match?(%r{\A/uploads/+}i)
      stripped.sub!(%r{\Auploads/+}i, "") while stripped.match?(%r{\Auploads/+}i)
      stripped = stripped.sub(%r{\A/+}, "")
      return path if stripped.empty?

      "/uploads/#{stripped}"
    end
  end

  module UploadsImageFilter
    def uploads_src(input)
      Jekyll::UploadsImage.normalize(input)
    end
  end
end

Liquid::Template.register_filter(Jekyll::UploadsImageFilter)

module Jekyll
  class SeoTag
    class ImageDrop
      private

      def build_absolute_path
        path = raw_path
        return path unless path.is_a?(String) && absolute_url?(path) == false

        filters.absolute_url(Jekyll::UploadsImage.normalize(path))
      end
    end
  end
end
