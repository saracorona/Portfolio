<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { projects } from '@/data/portfolio'
import arrowBack from '@/assets/icons/arrow-back.svg'
import arrowLink from '@/assets/icons/arrow-link.svg'
import arrowNext from '@/assets/icons/arrow-next.svg'

const route = useRoute()

// Gallery column width (px) of the 1440px desktop design. Panel heights are
// authored in rem for that width; on mobile each panel keeps the same aspect
// ratio and everything inside it is expressed relative to the panel width.
const GALLERY_WIDTH = 910

const toPx = (value) => parseFloat(value) * 16
const toCqw = (value) =>
  typeof value === 'string' && value.endsWith('rem')
    ? `${((toPx(value) / GALLERY_WIDTH) * 100).toFixed(3)}cqw`
    : value

const panelStyle = (image) => ({
  '--h': image.height,
  '--ar': (GALLERY_WIDTH / toPx(image.height)).toFixed(4),
  background: image.background,
})

const layerStyle = (layer) => ({
  '--left': layer.left,
  '--top': layer.top,
  '--w': layer.width,
  '--lh': layer.height,
  '--top-m': toCqw(layer.top),
  '--w-m': toCqw(layer.width),
  '--lh-m': toCqw(layer.height),
})

const project = computed(() => projects.find((p) => String(p.id) === route.params.id && p.detail))

const notes = computed(() => [].concat(project.value.detail.note))

const nextProject = computed(() => {
  if (!project.value) return null
  const index = projects.findIndex((p) => p.id === project.value.id)
  return projects[(index + 1) % projects.length]
})

const nextTitle = computed(() => nextProject.value.detail?.title ?? nextProject.value.title)
const nextLinkTag = computed(() => (nextProject.value.detail ? RouterLink : 'div'))
const nextLinkProps = computed(() =>
  nextProject.value.detail
    ? { to: { name: 'project-detail', params: { id: nextProject.value.id } } }
    : {}
)
</script>

<template>
  <div v-if="project" class="project-detail">
    <router-link to="/" class="project-detail__back">
      <img :src="arrowBack" alt="" class="project-detail__back-icon" />
      <span>Back</span>
    </router-link>

    <header class="project-detail__intro">
      <h1 class="project-detail__title">{{ project.detail.title }}</h1>
      <p class="project-detail__subtitle">{{ project.detail.subtitle }}</p>
    </header>

    <div class="project-detail__body">
      <aside class="project-detail__sidebar">
        <img
          v-if="project.detail.logo"
          :src="project.detail.logo"
          alt=""
          class="project-detail__logo"
          :style="project.detail.logoStyle"
        />
        <div class="project-detail__notes">
          <p v-for="(paragraph, i) in notes" :key="i" class="project-detail__note">
            {{ paragraph }}
          </p>
        </div>

        <dl class="project-detail__meta">
          <div class="project-detail__meta-item">
            <dt>Year</dt>
            <dd>{{ project.detail.year }}</dd>
          </div>
          <div class="project-detail__meta-item">
            <dt>Category</dt>
            <dd>{{ project.detail.category }}</dd>
          </div>
          <a
            v-if="project.detail.linkLabel && project.detail.linkUrl"
            :href="project.detail.linkUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="project-detail__link"
          >
            <span>{{ project.detail.linkLabel }}</span>
            <img :src="arrowLink" alt="" class="project-detail__link-icon" />
          </a>
          <span v-else-if="project.detail.linkLabel" class="project-detail__link">
            <span>{{ project.detail.linkLabel }}</span>
            <img :src="arrowLink" alt="" class="project-detail__link-icon" />
          </span>
        </dl>
      </aside>

      <div class="project-detail__gallery">
        <div
          v-for="(image, i) in project.detail.images"
          :key="i"
          class="project-detail__panel"
          :class="{ 'project-detail__panel--borderless': project.detail.borderless }"
          :style="panelStyle(image)"
        >
          <div v-if="image.type === 'layers'" class="project-detail__layers">
            <img
              v-for="(layer, j) in image.layers"
              :key="j"
              :src="layer.src"
              alt=""
              class="project-detail__layer"
              :style="layerStyle(layer)"
            />
          </div>
          <div v-else-if="image.type === 'grid'" class="project-detail__grid">
            <div v-for="(cell, j) in image.cells" :key="j" class="project-detail__grid-cell">
              <img
                :src="cell.src"
                alt=""
                class="project-detail__grid-image"
                :class="{ 'project-detail__grid-image--crop': cell.crop }"
                :style="cell.crop"
              />
            </div>
          </div>
          <video
            v-else-if="image.type === 'video'"
            :src="image.src"
            class="project-detail__panel-image"
            :style="{ objectPosition: image.position || 'center' }"
            autoplay
            loop
            muted
            playsinline
          />
          <img
            v-else
            :src="image.src"
            alt=""
            class="project-detail__panel-image"
            :style="{ objectPosition: image.position || 'center' }"
          />
        </div>
      </div>
    </div>

    <footer v-if="nextProject" class="project-detail__next">
      <p class="project-detail__next-label">Next Project</p>
      <component :is="nextLinkTag" v-bind="nextLinkProps" class="project-detail__next-link">
        <span class="project-detail__next-title-wrap">
          <span class="project-detail__next-title">{{ nextTitle }}</span>
          <span class="project-detail__next-line" aria-hidden="true" />
        </span>
        <img :src="arrowNext" alt="" class="project-detail__next-arrow" />
      </component>
    </footer>
  </div>

  <div v-else class="project-detail project-detail--empty">
    <router-link to="/" class="project-detail__back">
      <img :src="arrowBack" alt="" class="project-detail__back-icon" />
      <span>Back</span>
    </router-link>
    <p class="project-detail__not-found">Project not found.</p>
  </div>
</template>

<style lang="scss" scoped>
.project-detail {
  width: 100%;
  min-height: 100vh;
  padding: 2.5rem 2rem 2rem;
  background-color: rgba(14, 14, 14, 0.95);
  color: var(--color-text);

  &__back {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
  }

  &__back::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.125rem;
    width: 0%;
    height: 1px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &__back span {
    display: inline-block;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: -0.0125em;
    transition: transform 0.3s ease;
  }

  &__back:hover span {
    transform: translateX(2px);
  }

  &__back:hover::after {
    width: 100%;
  }

  &__back-icon {
    display: block;
    width: 1.75rem;
    height: 0.6875rem;
  }

  &__intro {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 68rem;
    margin: 4.5rem 0 0;
  }

  &__title {
    font-family: var(--font-heading);
    font-style: italic;
    font-weight: 400;
    line-height: 1;
    font-size: clamp(2.5rem, 8vw, 8.75rem);
    letter-spacing: -0.02em;
  }

  &__subtitle {
    font-size: 1.25rem;
    letter-spacing: -0.01em;
    color: var(--color-text-muted);
  }

  &__body {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    margin-top: 3.5rem;
  }

  &__sidebar {
    position: sticky;
    top: 2rem;
    align-self: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.5rem;
    height: calc(100vh - 4rem);
  }

  &__logo {
    display: block;
    width: 10rem;
    height: 5rem;
    object-fit: contain;
  }

  &__notes {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 28rem;
  }

  &__note {
    text-indent: 3.75rem;
    font-size: 1rem;
    line-height: 1;
    margin: 0;
  }

  &__note:not(:first-child) {
    text-indent: 0;
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: auto 0 0;
  }

  &__meta-item {
    display: flex;
    flex-direction: column;
  }

  &__meta-item dt {
    font-size: 1rem;
    letter-spacing: -0.01em;
    color: #cbcbcb;
  }

  &__meta-item dd {
    margin: 0;
    font-size: 1rem;
    letter-spacing: -0.02em;
  }

  &__link {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    font-size: 1rem;
    letter-spacing: -0.01em;
  }

  &__link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.125rem;
    width: 0%;
    height: 1px;
    background-color: currentColor;
    transition: width 0.3s ease;
  }

  &__link:hover::after {
    width: 4.5rem;
  }

  &__link-icon {
    display: block;
    width: 1.75rem;
    height: 0.6875rem;
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }

  &__link:hover &__link-icon {
    transform: rotate(180deg) translateX(-0.25rem);
  }

  &__gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__panel {
    width: 100%;
    height: var(--h);
    border: 1px solid #2a2a2a;
    overflow: hidden;
  }

  &__panel--borderless {
    border: 0;
  }

  &__panel-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__layers {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__layer {
    position: absolute;
    display: block;
    left: var(--left);
    top: var(--top);
    width: var(--w);
    height: var(--lh);
    object-fit: cover;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    width: 100%;
    height: 100%;
  }

  &__grid-cell {
    position: relative;
    overflow: hidden;
  }

  &__grid-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__grid-image--crop {
    position: absolute;
    max-width: none;
    object-fit: fill;
  }

  &__next {
    padding: 8rem 0;
  }

  &__next-label {
    font-size: 1.125rem;
    letter-spacing: -0.01em;
    color: var(--color-text-muted);
    margin: 0 0 1rem;
  }

  &__next-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  &__next-title-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__next-title {
    font-family: var(--font-heading);
    font-style: italic;
    font-weight: 400;
    line-height: 1;
    font-size: clamp(2rem, 6vw, 6.25rem);
    letter-spacing: -0.02em;
  }

  &__next-line {
    width: 100%;
    height: 1px;
    margin-top: 0;
    background-color: var(--color-text);
    transform-origin: left;
    transform: scaleX(1);
    transition: transform 0.3s ease;
  }

  &__next-link:hover &__next-line {
    transform: scaleX(0);
  }

  &__next-arrow {
    display: block;
    width: 5rem;
    height: 1.95rem;
    transform: rotate(180deg);
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  &__next-link:hover &__next-arrow {
    transform: rotate(180deg) translateX(1rem);
  }

  &--empty {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__not-found {
    font-size: 1.25rem;
  }

  // Mobile (375px design): single column, sidebar flows above the gallery,
  // panels keep their desktop aspect ratio.
  @media (max-width: 47.9375rem) {
    min-height: 0;
    padding: 2.5rem 1rem 0;

    &__back span {
      font-size: 1.25rem;
      line-height: 1.2;
      letter-spacing: -0.01em;
    }

    &__intro {
      gap: 1rem;
      max-width: none;
      margin-top: 2.5rem;
    }

    &__title {
      font-size: min(19.2vw, 4.5rem);
      line-height: 0.9;
    }

    &__subtitle {
      font-size: 1.125rem;
      line-height: 1.2;
    }

    &__body {
      display: block;
      margin-top: 0;
    }

    &__sidebar {
      position: static;
      height: auto;
      gap: 0.625rem;
      padding-top: 2.5rem;
    }

    &__notes {
      max-width: none;
    }

    &__meta {
      margin: 0;
      padding-top: 2.5rem;
    }

    &__meta-item dt,
    &__meta-item dd,
    &__link,
    &__next-label {
      line-height: 1.2;
    }

    &__gallery {
      gap: 0.625rem;
      padding-top: 2.5rem;
    }

    &__panel {
      height: auto;
      aspect-ratio: var(--ar);
      container-type: inline-size;
    }

    &__layer {
      top: var(--top-m);
      width: var(--w-m);
      height: var(--lh-m);
    }

    &__grid {
      gap: 1.7582cqw;
    }

    &__next {
      padding: 8rem 0;
    }

    &__next-label {
      margin: 0 0 0.625rem;
      font-size: 1rem;
      letter-spacing: -0.01em;
      color: var(--color-text);
    }

    &__next-title-wrap {
      min-width: 0;
    }

    &__next-title {
      font-size: min(10.13333vw, 2.375rem);
    }

    &__next-arrow {
      width: 1.9695rem;
      height: 0.768rem;
    }
  }
}
</style>
