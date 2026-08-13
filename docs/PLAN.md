# Personal Website Build Plan

## Project Overview

**Client**: Abrar Khalish Kamarulzaman  
**Role**: Cloud DevOps Engineer @ FWD Insurance  
**Location**: Greater Kuala Lumpur  
**GitHub**: [DarthMandL0R3](https://github.com/DarthMandL0R3)

---

## Design Direction

### Aesthetic: Hybrid Terminal/CLI

A blend of retro terminal aesthetics and modern SaaS dark-mode design:

- **Background**: Deep slate (#0a0a0f) with subtle grid pattern
- **Primary Accent**: Neon cyan (#00d4ff) for highlights and CTAs
- **Secondary Accent**: Neon green (#00ff88) for status indicators
- **Tertiary Accent**: Orange (#ff6b35) for warnings/tags
- **Typography**: Monospace (JetBrains Mono / Fira Code) for headings, Inter for body
- **Cards**: Glass-morphism with subtle borders and glow effects

### Layout: Bento Grid

Skills, certifications, and metrics organized in clean rectangular blocks with varying sizes for visual hierarchy.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Hugo (Extended) |
| Styling | Tailwind CSS v4 |
| Deployment | Cloudflare Pages |
| Version Control | Git + GitHub |
| CMS | Sveltia CMS (optional, for blog) |

---

## Site Structure

```
/
├── index.html          # Hero + About
├── tech-stack/         # Interactive bento grid
├── projects/           # Architecture cards
├── certifications/     # Badge grid
├── experience/         # Timeline
├── contact/            # Social + form
└── blog/               # Optional future section
```

---

## Phase 1: Project Scaffold & Navigation

**Goal**: Full site structure with placeholder content you can navigate

### Deliverables
- [ ] Hugo project initialized with YAML config
- [ ] Tailwind CSS v4 integrated
- [ ] Base layout with navigation
- [ ] All section pages created
- [ ] Placeholder content in each section
- [ ] Responsive navigation (mobile hamburger)
- [ ] Dark mode theme applied
- [ ] `hugo server` running successfully

### Files to Create
```
├── hugo.yaml                    # Site configuration
├── tailwind.config.js           # Tailwind config
├── postcss.config.js            # PostCSS config
├── assets/
│   └── css/
│       └── main.css             # Tailwind entry point
├── layouts/
│   ├── _default/
│   │   ├── baseof.html          # Base template
│   │   └── index.html           # Home page
│   ├── partials/
│   │   ├── nav.html             # Navigation
│   │   ├── footer.html          # Footer
│   │   └── head.html            # HTML head
│   └── shortcodes/
│       └── status-badge.html    # Live status component
├── content/
│   ├── _index.md                # Home
│   ├── tech-stack.md            # Tech stack
│   ├── projects.md              # Projects
│   ├── certifications.md        # Certifications
│   ├── experience.md            # Experience
│   └── contact.md               # Contact
└── static/
    └── images/                  # Placeholder images
```

---

## Phase 2: Hero Section (Hybrid Terminal)

**Goal**: Terminal-style hero with animated typing effect

### Components
- [ ] Animated CLI typing effect (`whoami`, `kubectl get pods`)
- [ ] Live status badge with green dot
- [ ] Social links row (GitHub, LinkedIn, Email)
- [ ] Subtle matrix/grid background animation
- [ ] Responsive layout (stacks on mobile)

### Technical Implementation
- CSS animations for typing cursor
- Minimal JS for multi-command sequence
- CSS keyframes for background grid pulse

---

## Phase 3: Tech Stack (Bento Grid)

**Goal**: Interactive skill categories in bento layout

### Grid Layout
```
┌───────────────────────────────────────┐
│           Cloud (Large)               │
│      AWS • Azure • GCP               │
├───────────────┬───────────────────────┤
│  Containers   │       IaC             │
│  K8s • Docker │  Terraform • Ansible  │
├───────────────┼───────────────────────┤
│    CI/CD      │    Monitoring         │
│ GitHub Actions│  Prometheus • Grafana │
├───────────────┴───────────────────────┤
│           Operating Systems           │
│      Linux • Ubuntu • Windows         │
└───────────────────────────────────────┘
```

### Each Block Contains
- [ ] Tool/category icon
- [ ] Tool names
- [ ] Proficiency indicator (dots/bars)
- [ ] Hover effect with glow

---

## Phase 4: Projects (Architecture Cards)

**Goal**: Visual cards with architecture diagrams

### Card Structure
- [ ] Project name
- [ ] Architecture diagram (SVG placeholder)
- [ ] Tech tags
- [ ] GitHub link
- [ ] Description
- [ ] Hover expand effect

### Projects to Feature
1. **Azure Platform Automation** - Main focus
2. **oVirt Engine Backup** - Shell script
3. **Linux Admin Guide** - Documentation
4. **Zabbix Agent Installer** - Automation script
5. **Troubleshooting Guide** - Knowledge base

---

## Phase 5: Certifications & Experience

### Certifications Grid
- [ ] AWS Certified DevOps Engineer (placeholder)
- [ ] Kubernetes Administrator (placeholder)
- [ ] Azure certifications (placeholder)
- [ ] Other relevant certs

### Experience Timeline
- [ ] FWD Insurance - Current role
- [ ] Previous positions (from LinkedIn)
- [ ] Company logos
- [ ] Role descriptions
- [ ] Key achievements

---

## Phase 6: Polish & Deploy

### Polish
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Smooth scroll navigation
- [ ] Page transitions
- [ ] SEO meta tags
- [ ] Open Graph tags
- [ ] Favicon

### Cloudflare Pages Deploy
- [ ] wrangler.jsonc configured
- [ ] GitHub Actions workflow
- [ ] Custom domain setup (optional)
- [ ] SSL certificate

---

## Reference Sites

| Site | Element to Reference |
|------|---------------------|
| [kuanhoong.github.io](https://kuanhoong.github.io) | Terminal aesthetic, certifications grid |
| [brittanychiang.com](https://brittanychiang.com) | Clean layout, project cards |
| [misskecupbung.github.io](https://misskecupbung.github.io) | Bento grid, tech stack layout |
| [amanpathak.com](https://amanpathak.com) | DevOps focus, architecture diagrams |

---

## Build Order

1. **Phase 1** → Scaffold (click-through shell)
2. **Phase 2** → Hero (terminal effect)
3. **Phase 3** → Tech Stack (bento grid)
4. **Phase 4** → Projects (cards)
5. **Phase 5** → Certifications + Experience
6. **Phase 6** → Polish + Deploy

---

## Notes

- Each phase builds on the previous
- User will test navigation after each phase
- Content will be placeholder until Phase 5
- PDF resume could not be read - details from LinkedIn/GitHub only
