<script setup>
import { onMounted, ref } from 'vue'

import { personal } from '@/data/portfolio'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const sectionRef = ref(null)
const { animateFadeUp } = useScrollAnimation()

onMounted(() => {
  animateFadeUp(sectionRef.value)
})
</script>

<template>
  <section id="about" ref="sectionRef" class="about">
    <p class="about__bio">{{ personal.bio }}</p>
  </section>
</template>

<style lang="scss" scoped>
.about {
  display: block;
  width: 100%;
}
</style>
