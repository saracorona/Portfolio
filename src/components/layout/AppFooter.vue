<script setup>
import { personal } from '@/data/portfolio'
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__row">
      <p class="app-footer__copyright">
        <span>&copy; 2026 {{ personal.name }}</span>
        <span>All rights reserved</span>
      </p>
      <div class="app-footer__contact">
        <h2 class="app-footer__heading">Contact</h2>
        <div class="app-footer__contact-details">
          <p v-if="personal.phone">{{ personal.phone }}</p>
          <p>
            <a :href="`mailto:${personal.email}`">{{ personal.email }}</a>
          </p>
        </div>
      </div>
    </div>
    <div class="app-footer__name-wrap">
      <p class="app-footer__name">{{ personal.name }}</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
// Above 1440px the footer scales 1:1 with the viewport (1728px design = x1.2);
// the 16-20px type keeps its size, as in the Figma frames.
.app-footer {
  position: relative;
  width: 100%;
  height: max(23.75rem, 26.38889vw);
  padding-top: max(2.5rem, 2.77778vw);
  background-color: var(--color-bg-light);
  color: var(--color-text-dark);
  overflow: hidden;

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 max(2.5rem, 2.77778vw);
  }

  &__copyright {
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }

  &__contact {
    display: flex;
    width: max(20.966rem, 23.29545vw);
    flex-direction: column;
    align-items: flex-start;
    gap: max(1rem, 1.11111vw);
  }

  &__heading {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.0125em;
  }

  &__contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__contact-details p {
    font-size: 1rem;
    color: var(--color-text-dark);
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  &__name-wrap {
    position: absolute;
    top: max(12.125rem, 13.47222vw);
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }

  &__name {
    flex-shrink: 0;
    font-family: var(--font-heading);
    font-style: italic;
    font-weight: 400;
    line-height: 1;
    font-size: max(19.4375rem, 21.59792vw);
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  // Mobile (375px design): Contact only, 240px tall at 375px (64vw), wordmark
  // 60% visible (top at 51.07vw).
  @media (max-width: 47.9375rem) {
    height: 64vw;
    padding-top: 2rem;

    &__row {
      padding: 0 1rem;
    }

    &__copyright {
      display: none;
    }

    &__contact {
      width: auto;
    }

    &__name-wrap {
      top: 51.07vw;
    }

    &__name {
      font-size: 21.59792vw;
    }
  }
}
</style>
