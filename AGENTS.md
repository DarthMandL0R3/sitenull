# AGENTS.md

## Project Type
Hugo static site generator project.

## Quick Commands
```bash
hugo server          # Run dev server
hugo build          # Build site
hugo new <file>     # Create new content
```

## Structure
- `archetypes/` - Content templates
- `content/` - Site content (Markdown)
- `layouts/` - HTML templates (currently empty)
- `static/` - Static assets (currently empty)
- `themes/` - Hugo themes (currently empty)
- `hugo.toml` - Site configuration

## Current State
Minimal Hugo project with default config. No themes, content, or layouts installed yet.

## Notes
- Config is at `hugo.toml` (not `config.toml`)
- Default archetype uses TOML front matter

## Installed Skills

### hugo (jackspace/claudeskillz@hugo)
Comprehensive Hugo knowledge for static site development. Key capabilities:
- **Hugo Extended installation** (required for SCSS/Sass support)
- **YAML configuration** (recommended over TOML for CMS compatibility)
- **Theme installation** via Git submodules (PaperMod recommended)
- **Tailwind CSS v4 integration** with Hugo Pipes
- **Sveltia CMS integration** (recommended over TinaCMS)
- **Cloudflare Workers deployment** with wrangler
- **9 documented issues** with solutions (version mismatch, baseURL errors, etc.)

**Use when**: Setting up Hugo projects, integrating themes, configuring CMS, deploying, troubleshooting build errors.

### web-design-guidelines (vercel-labs/agent-skills@web-design-guidelines)
Web design best practices and UI/UX guidelines.

**Use when**: Designing site layouts, creating responsive designs, implementing modern web aesthetics.

### firecrawl (firecrawl/cli@firecrawl)
Web scraping and content extraction tool. Capabilities:
- **Search**: Find pages on topics without specific URLs
- **Scrape**: Extract content from URLs (static and JS-rendered)
- **Map**: Find specific subpages within large sites
- **Crawl**: Bulk extract content from site sections
- **Interact**: Click buttons, fill forms, handle pagination, login
- **Monitor**: Watch pages for changes over time

**Use when**: Extracting content from Instagram, Facebook, LinkedIn, paywalled sites, or any web scraping needs.

### agent-browser (vercel-labs/agent-browser@agent-browser)
Fast browser automation CLI for AI agents. Capabilities:
- **Navigate**: Open websites and interact with pages
- **Fill forms**: Complete form fields automatically
- **Click buttons**: Interact with page elements
- **Take screenshots**: Capture page visuals
- **Extract data**: Pull structured data from pages
- **Login**: Handle authentication flows
- **Electron apps**: Automate desktop apps (VS Code, Slack, Discord)

**Use when**: Complex browser interactions, form submissions, authentication required, or scraping needs login.

### playwright-cli (microsoft/playwright-cli@playwright-cli)
Microsoft's browser automation framework. Capabilities:
- **Cross-browser**: Chromium, Firefox, WebKit support
- **Reliable selectors**: Accessibility-tree based element selection
- **Auto-wait**: Intelligent waiting for elements
- **Network interception**: Mock requests, modify responses

**Use when**: Cross-browser testing, complex interactions, network-level control needed.

## Critical Rules
- **Always use Hugo Extended** (not Standard) - required for SCSS/Sass
- **Use YAML configuration** (`--format yaml`) for better CMS compatibility
- **Add themes as Git submodules** - easier updates and version control
- **Never commit `public/` directory** - it's build output
- **Pin Hugo version in CI/CD** - prevents version mismatch errors

## Web Scraping Workflow
For extracting content from Instagram, Facebook, LinkedIn, or paywalled sites:

### Prerequisites
```bash
# Install firecrawl CLI
npx -y firecrawl-cli@1.19.6 init -y --browser

# Install agent-browser
npm install -g agent-browser && agent-browser install

# Install playwright-cli (if needed)
npm install -g @playwright/test
```

### Usage Pattern
1. **Start with firecrawl** for static/JS-rendered content
   ```bash
   firecrawl scrape "https://example.com" -o output.md
   ```

2. **Use agent-browser** for login-required content
   ```bash
   agent-browser navigate "https://instagram.com"
   agent-browser login --site instagram
   agent-browser extract --format json
   ```

3. **Use playwright-cli** for complex multi-step interactions
   ```bash
   playwright-cli open "https://linkedin.com"
   playwright-cli fill --selector "input[name='email']" --value "user@example.com"
   playwright-cli click --selector "button[type='submit']"
   ```

4. **Escalation pattern**:
   - Static content → `firecrawl scrape`
   - JS-rendered → `firecrawl scrape` (handles SPAs)
   - Login required → `agent-browser` with authentication
   - Complex flows → `playwright-cli` for full control

## Development Workflow
1. Install Hugo Extended: `brew install hugo` (macOS) or download from GitHub
2. Create new site: `hugo new site my-site --format yaml`
3. Add theme: `git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod`
4. Configure hugo.yaml (see hugo skill for templates)
5. Create content: `hugo new content posts/my-post.md`
6. Run dev server: `hugo server`
7. Build for production: `hugo --minify`
