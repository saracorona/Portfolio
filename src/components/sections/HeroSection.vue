<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

import { personal } from '@/data/portfolio'

const noteRef = ref(null)
const nameRef = ref(null)
const nameWords = personal.name.split(' ')

onMounted(() => {
  gsap.from([noteRef.value, nameRef.value], {
    opacity: 0,
    y: 40,
    duration: 0.9,
    ease: 'power2.out',
    stagger: 0.15,
  })
})
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero__grid">
      <p ref="noteRef" class="hero__note">{{ personal.bio }}</p>
    </div>
    <div class="hero__name-wrap">
      <h1 ref="nameRef" class="hero__name">
        <span v-for="(word, i) in nameWords" :key="i" class="hero__name-word">{{ word }}{{ i < nameWords.length - 1 ? ' ' : '' }}</span>
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  min-height: calc(100vh - var(--header-height, 0px));
  background-color: var(--color-bg);

  &__grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;
    padding: 0 2rem;
  }

  &__note {
    grid-column: 1 / 4;
    margin: 0 0 0.25rem;
    text-indent: max(3.75rem, 4.16667vw);
    font-family: var(--font-body);
    font-size: max(1rem, calc(0.69444vw + 6px));
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--color-text);
  }

  &__name-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 0;
    overflow: hidden;
  }

  &__name {
    flex-shrink: 0;
    font-family: var(--font-heading);
    font-style: italic;
    font-weight: 400;
    line-height: 1;
    font-size: max(19.5rem, 21.66667vw);
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  // Mobile (375px design): 4 columns / 16px margins, note centred in the
  // screen, name stacked on two lines (134px = 35.73vw at 375px).
  @media (max-width: 47.9375rem) {
    position: relative;
    min-height: calc(100vh - var(--header-height, 0px));
    min-height: calc(100svh - var(--header-height, 0px));

    &__grid {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(50vh - 1.5625rem - var(--header-height, 0px));
      top: calc(50svh - 1.5625rem - var(--header-height, 0px));
      grid-template-columns: repeat(4, 1fr);
      padding: 0 1rem;
    }

    &__note {
      margin: 0;
      font-size: 0.875rem;
    }

    &__name-wrap {
      justify-content: flex-start;
      padding: 0 1rem 2rem;
      overflow: visible;
    }

    &__name {
      font-size: 35.73333vw;
      line-height: 0.7;
    }

    &__name-word {
      display: block;
    }
  }
}
</style>
