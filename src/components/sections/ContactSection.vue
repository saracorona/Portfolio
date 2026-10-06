<script setup>
import { personal } from '@/data/portfolio'
</script>

<template>
  <section id="contact" class="contact">
    <a :href="`mailto:${personal.email}`" class="contact__email">{{ personal.email }}</a>
    <ul class="contact__links">
      <li class="contact__link-item">
        <a :href="personal.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </li>
      <li class="contact__link-item">
        <a :href="personal.github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  display: block;
  width: 100%;

  &__links {
    display: flex;
    list-style: none;
  }

  &__link-item {
    display: block;
  }
}
</style>
