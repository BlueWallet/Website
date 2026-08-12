# BlueWallet Website

Static site for [bluewallet.io](https://bluewallet.io), built with [Jekyll](https://jekyllrb.com/).

## Prerequisites

- **Ruby** 3.x (tested with Ruby 3.4)
- **Bundler** (`gem install bundler`)

## Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/BlueWallet/Website.git
cd Website
bundle install
```

Always run Jekyll through Bundler so the correct gem versions from `Gemfile.lock` are used:

```bash
bundle exec jekyll <command>
```

## Development

Start a local development server. Jekyll defaults to the `development` environment, which skips production-only features such as Google Analytics.

```bash
bundle exec jekyll serve
```

The site is served at [http://localhost:4000](http://localhost:4000). Jekyll watches for file changes and rebuilds automatically.

Useful options:

```bash
# Preview unpublished drafts from _drafts/
bundle exec jekyll serve --drafts

# Bind to all interfaces (useful for testing on other devices on your network)
bundle exec jekyll serve --host 0.0.0.0

# Use a different port
bundle exec jekyll serve --port 4001
```

**Note:** Changes to `_config.yml` are not picked up while the server is running. Restart `jekyll serve` after editing the config.

## LiveReload

Jekyll has built-in LiveReload support. It injects a small script into pages and refreshes the browser when the site is rebuilt.

```bash
bundle exec jekyll serve --livereload
```

By default:

- The site is served on port **4000**
- LiveReload listens on port **35729**

If the LiveReload port is already in use, pick another one:

```bash
bundle exec jekyll serve --livereload --livereload-port 35730
```

No browser extension is required — Jekyll handles reloads automatically.

## Production

Production deploys are built automatically by GitHub Actions on every push to `master` (see [`.github/workflows/pages.yml`](.github/workflows/pages.yml)). The workflow runs:

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

and publishes `_site/` to GitHub Pages. You do not need to commit `_site/`.

To preview a production build locally:

```bash
JEKYLL_ENV=production bundle exec jekyll build
bundle exec jekyll serve --skip-initial-build --no-watch
```

Or:

```bash
cd _site && python3 -m http.server 4000
```

### One-time GitHub Pages setup

In the repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## Project layout

| Path | Description |
|------|-------------|
| `_config.yml` | Site configuration |
| `_posts/` | Blog posts |
| `_docs/` | Documentation pages |
| `_data/` | YAML data files (navigation, features, etc.) |
| `_includes/` | Reusable HTML/Liquid partials |
| `_layouts/` | Page layouts |
| `_sass/` | SCSS stylesheets |
| `assets/` | CSS, JavaScript, and images |
| `_site/` | Generated output (do not edit) |

## Troubleshooting

**`Could not find jekyll-...` or gem errors**

Run `bundle install` in the project root.
