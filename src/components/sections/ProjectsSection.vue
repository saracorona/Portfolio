<script setup>
import { projects } from '@/data/portfolio'
import ProjectCard from '@/components/ui/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="projects">
    <ul class="projects__grid">
      <li v-for="project in projects" :key="project.id" class="projects__item">
        <router-link
          v-if="project.detail"
          :to="{ name: 'project-detail', params: { id: project.id } }"
          class="projects__link"
        >
          <ProjectCard :project="project" />
        </router-link>
        <ProjectCard v-else :project="project" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.projects {
  width: 100%;
  padding: var(--spacing-section);
  background-color: var(--color-bg);

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
    // 1184px = the 1440px design width minus the 128px side padding: frames
    // stop growing there and extra screen width becomes side margin.
    max-width: 74rem;
    margin: 0 auto;
    list-style: none;
  }

  // The short delay on the way back keeps the others dimmed while the pointer
  // crosses the gap between the two images of the same project.
  &__item {
    display: block;
    transition: opacity 0.3s ease 0.12s;
  }

  &__link {
    display: block;
  }

  // Mobile (375px design): a single column of project blocks.
  @media (max-width: 47.9375rem) {
    padding: 3.75rem 1rem;

    &__grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      max-width: none;
    }
  }
}
</style>

<!-- Unscoped: the hover target (.project-card__media) lives in ProjectCard.
     Desktop only: the other projects dim when the pointer is over an image. -->
<style lang="scss">
@media (min-width: 48rem) {
  .projects__grid:has(.project-card__media:hover)
    .projects__item:not(:has(.project-card__media:hover)) {
    opacity: 0.3;
    transition-delay: 0s;
  }
}
</style>
