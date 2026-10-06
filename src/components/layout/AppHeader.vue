<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

import { personal, specialisations } from '@/data/portfolio'
import arrowLink from '@/assets/icons/arrow-link.svg'
import arrowBack from '@/assets/icons/arrow-back.svg'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const headerRef = ref(null)
const rowRef = ref(null)
const { animateFadeUp } = useScrollAnimation()

const profileOpen = ref(false)
const backRef = ref(null)
const profileRef = ref(null)

const closeProfile = () => {
  profileOpen.value = false
}

const onKeydown = (event) => {
  if (event.key === 'Escape') closeProfile()
}

// Lock the page scroll while the side panel is open.
watch(profileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

let resizeObserver

onMounted(() => {
  if (rowRef.value) {
    animateFadeUp(rowRef.value.children, { y: 16, stagger: 0.08 })
  }

  if (headerRef.value) {
    const setHeaderHeight = () => {
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerRef.value.offsetHeight}px`
      )
    }
    setHeaderHeight()
    resizeObserver = new ResizeObserver(setHeaderHeight)
    resizeObserver.observe(headerRef.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  window.removeEventListener('keydown', onKeydown)
  if (profileOpen.value) document.body.style.overflow = ''
})
</script>

<template>
  <header ref="headerRef" class="app-header">
    <div ref="rowRef" class="app-header__row">
      <p class="app-header__role">{{ personal.role }}</p>

      <button
        ref="profileRef"
        type="button"
        class="app-header__profile"
        aria-haspopup="dialog"
        :aria-expanded="profileOpen"
        @click="profileOpen = true"
      >
        <span>Profile</span>
        <img :src="arrowLink" alt="" class="app-header__profile-icon" />
      </button>

      <div id="skills" class="app-header__col">
        <h2 class="app-header__heading">Specialised in</h2>
        <ul class="app-header__list">
          <li v-for="item in specialisations" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div id="contact" class="app-header__col">
        <h2 class="app-header__heading">Contact</h2>
        <div class="app-header__contact-details">
          <p v-if="personal.phone">{{ personal.phone }}</p>
          <p>
            <a :href="`mailto:${personal.email}`">{{ personal.email }}</a>
          </p>
        </div>
      </div>

      <div id="about" class="app-header__col">
        <h2 class="app-header__heading">About</h2>
        <p class="app-header__bio">{{ personal.about }}</p>
      </div>
    </div>

    <Transition
      name="profile-panel"
      @after-enter="backRef?.focus()"
      @after-leave="profileRef?.focus()"
    >
      <div
        v-if="profileOpen"
        class="profile-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Profile"
      >
        <button ref="backRef" type="button" class="profile-panel__back" @click="closeProfile">
          <img :src="arrowBack" alt="" class="profile-panel__back-icon" />
          <span>Back</span>
        </button>

        <div class="profile-panel__content">
          <section class="profile-panel__section">
            <h2 class="profile-panel__heading">About</h2>
            <p class="profile-panel__text">{{ personal.about }}</p>
          </section>

          <section class="profile-panel__section">
            <h2 class="profile-panel__heading">Specialised in</h2>
            <ul class="profile-panel__text">
              <li v-for="item in specialisations" :key="item">{{ item }}</li>
            </ul>
          </section>

          <section class="profile-panel__section">
            <h2 class="profile-panel__heading">Contact</h2>
            <div class="profile-panel__text">
              <p v-if="personal.phone">{{ personal.phone }}</p>
              <p>
                <a :href="`mailto:${personal.email}`">{{ personal.email }}</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  // Above 1440px the spacing scales 1:1 with the viewport (1728px design = x1.2).
  padding: max(2.5rem, 2.7778vw) 2rem 0;
  background-color: var(--color-bg);

  &__row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;
  }

  &__role {
    grid-column: span 3;
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.0125em;
  }

  &__col {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    gap: max(1rem, 1.1111vw);
  }

  &__heading {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.0125em;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 0;
    list-style: none;
    font-size: 1rem;
    color: var(--color-text-secondary);
    letter-spacing: -0.02em;
  }

  &__col p {
    font-size: 1rem;
    color: var(--color-text-secondary);
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  // 16px at 1440px, 18px at 1728px, then keeps growing with the viewport.
  &__col &__bio {
    font-size: max(1rem, calc(0.69444vw + 6px));
  }

  &__contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__profile {
    display: none;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    font-family: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    // No ring after a mouse/touch click; keyboard focus keeps a visible one.
    &:focus:not(:focus-visible) {
      outline: none;
    }
  }

  // Mobile (375px design): role + "Profile" only, 16px margins.
  @media (max-width: 47.9375rem) {
    padding: 2.5rem 1rem 0;

    &__row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__role {
      font-size: 1.125rem;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    &__col {
      display: none;
    }

    &__profile {
      display: inline-flex;
      align-items: center;
      gap: 0.625rem;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    &__profile-icon {
      display: block;
      width: 1.75rem;
      height: 0.6875rem;
      transform: rotate(180deg);
    }
  }
}

// Mobile "Profile" side panel (375px design): slides in from the right.
.profile-panel {
  display: none;
}

@media (max-width: 47.9375rem) {
  .profile-panel {
    position: fixed;
    inset: 0;
    z-index: 60;
    display: block;
    overflow-y: auto;
    background-color: var(--color-bg);
    color: var(--color-text);

    &__back {
      display: inline-flex;
      align-items: center;
      gap: 0.625rem;
      margin: 2.5rem 0 0 1rem;
      padding: 0;
      border: 0;
      background: none;
      color: inherit;
      font-family: inherit;
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.2;
      letter-spacing: -0.01em;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;

      &:focus:not(:focus-visible) {
        outline: none;
      }
    }

    &__back-icon {
      display: block;
      width: 1.75rem;
      height: 0.6875rem;
    }

    // Vertically centred in the screen, 6px between blocks.
    &__content {
      position: absolute;
      top: 50%;
      left: 1rem;
      right: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.375rem;
      transform: translateY(-50%);
    }

    &__section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 20.966rem;
      padding-top: 2.5rem;
    }

    &__heading {
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    // Every block is four lines tall, as in the frame.
    &__text {
      min-height: 4.8em;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 1rem;
      line-height: 1.2;
      letter-spacing: -0.02em;
      color: var(--color-text-secondary);
    }
  }

  .profile-panel-enter-active,
  .profile-panel-leave-active {
    transition:
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
      opacity 0.6s ease;
  }

  .profile-panel-enter-from,
  .profile-panel-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  @media (prefers-reduced-motion: reduce) {
    .profile-panel-enter-active,
    .profile-panel-leave-active {
      transition: opacity 0.2s ease;
    }

    .profile-panel-enter-from,
    .profile-panel-leave-to {
      transform: none;
    }
  }
}
</style>
