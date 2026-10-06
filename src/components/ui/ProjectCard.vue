<script setup>
import { onMounted, ref } from 'vue'

import { useScrollAnimation } from '@/composables/useScrollAnimation'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const shotsRef = ref(null)
const { animateFadeUp } = useScrollAnimation()

onMounted(() => {
  if (shotsRef.value) {
    animateFadeUp(shotsRef.value.children, { stagger: 0.15 })
  }
})
</script>

<template>
  <article class="project-card">
    <header class="project-card__header">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__category">{{ project.category }}</p>
    </header>

    <div ref="shotsRef" class="project-card__shots">
      <div v-for="(shot, i) in project.shots" :key="i" class="project-card__shot">
        <div
          class="project-card__media"
          :style="{ '--h': shot.height, '--hm': shot.mobileHeight, '--w': shot.width }"
        >
          <img
            :src="shot.image"
            :alt="project.title"
            class="project-card__image"
            :style="{ objectPosition: shot.position }"
          />
        </div>
        <span class="project-card__index">{{ project.number }}</span>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.project-card {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__header {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    margin-bottom: 0.5rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: -0.02em;
    color: var(--color-text);
  }

  &__category {
    font-size: 1rem;
    letter-spacing: -0.02em;
    color: var(--color-text-secondary);
  }

  &__shots {
    display: flex;
    gap: 1rem;
  }

  &__shot {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__media {
    position: relative;
    width: var(--w, 100%);
    height: var(--h);
    overflow: hidden;
  }

  &__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__index {
    align-self: flex-end;
    font-family: var(--font-heading);
    font-style: italic;
    font-size: 1.125rem;
    color: var(--color-text);
  }

  // Mobile (375px design): tighter spacing; cell heights scale with the
  // viewport (--hm is the height in px at 375px).
  @media (max-width: 47.9375rem) {
    &__header {
      gap: 0.0761rem;
      margin-bottom: 0.3044rem;
    }

    &__shots {
      gap: 0.625rem;
    }

    &__shot {
      gap: 0.3044rem;
    }

    &__media {
      width: 100%;
      height: calc(var(--hm) / 3.75 * 1vw);
    }

    &__index {
      font-size: 1rem;
    }
  }
}
</style>
