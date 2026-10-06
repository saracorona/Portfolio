# Portfolio

Personal portfolio site — Vue 3 + Vite, single page, hash-based routing, GSAP scroll animations.

## Commands

```bash
npm install      # install dependencies
npm run dev       # start the dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
npm run lint       # lint + autofix .js/.vue files
npm run format     # format the project with Prettier
```

## Folder map

```
src/
  assets/
    scss/
      _variables.scss   # design tokens (colors, fonts, spacing) — empty, fill in yourself
      _reset.scss        # minimal CSS reset
      main.scss          # global styles, imports the partials above
    fonts/                # local font files
    images/               # images used across the site
  components/
    layout/
      AppHeader.vue       # fixed nav, smooth-scrolls to section ids
      AppFooter.vue
    sections/
      HeroSection.vue     # #hero — name/role, GSAP intro animation
      AboutSection.vue    # #about — bio, scroll-triggered fade-in
      SkillsSection.vue   # #skills — list of SkillBadge, staggered scroll animation
      ProjectsSection.vue # #projects — list of ProjectCard
      ContactSection.vue  # #contact — email + social links
    ui/
      ProjectCard.vue     # single project, receives a `project` prop
      SkillBadge.vue       # single skill badge, receives `name` + `category` props
  composables/
    useScrollAnimation.js # useScrollAnimation() -> { animateFadeUp } (GSAP + ScrollTrigger)
  data/
    portfolio.js           # all site content: personal info, skills, projects
  router/
    index.js               # single route, hash history
  views/
    HomeView.vue            # renders all sections in order
  App.vue
  main.js
```

## Adding a new project

Open [src/data/portfolio.js](src/data/portfolio.js) and add an object to the `projects` array, following the existing shape:

```js
{
  id: 4,
  title: 'Project name',
  description: 'Short description.',
  tags: ['Vue.js', 'SCSS', 'GSAP'],
  url: '',      // live URL or repo link, optional
  image: '',    // path to an image in src/assets/images, optional
}
```

`ProjectsSection.vue` renders one `ProjectCard` per entry automatically — no other changes needed.

## Styling

All components ship with structural styles only (layout, position, sizing) — no colors, fonts, or visual design. Fill in `src/assets/scss/_variables.scss` and `:root` in `src/assets/scss/main.scss` with your own design tokens, then layer visual styles into each component's `<style scoped>` block.
