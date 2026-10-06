<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
</script>

<template>
  <div class="home">
    <HeroSection />
    <ProjectsSection />
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: block;
  width: 100%;
}
</style>
