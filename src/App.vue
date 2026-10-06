<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HomeView from '@/views/HomeView.vue'

const route = useRoute()
const isDetailRoute = computed(() => route.name === 'project-detail')
const overlayRef = ref(null)

watch(
  () => route.params.id,
  () => overlayRef.value?.scrollTo({ top: 0 })
)

watch(
  isDetailRoute,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
  { immediate: true }
)
</script>

<template>
  <AppHeader />
  <main>
    <HomeView />
  </main>
  <AppFooter />

  <Transition name="detail-open">
    <div v-if="isDetailRoute" ref="overlayRef" class="detail-overlay">
      <router-view />
      <AppFooter />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
main {
  display: block;
  width: 100%;
}

.detail-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow-y: auto;
}

.detail-open-enter-active {
  transition:
    opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.detail-open-enter-from {
  opacity: 0;
  transform: translateY(-2.5rem);
}

@media (prefers-reduced-motion: reduce) {
  .detail-open-enter-active {
    transition: none;
  }
}
</style>
