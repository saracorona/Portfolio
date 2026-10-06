<script setup>
import { onMounted, ref } from 'vue'

import { skills } from '@/data/portfolio'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const listRef = ref(null)
const { animateFadeUp } = useScrollAnimation()

onMounted(() => {
  if (listRef.value) {
    animateFadeUp(listRef.value.children, { stagger: 0.08 })
  }
})
</script>

<template>
  <section id="skills" class="skills">
    <ul ref="listRef" class="skills__list">
      <li v-for="skill in skills" :key="skill.name" class="skills__item">
        <SkillBadge :name="skill.name" :category="skill.category" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  display: block;
  width: 100%;

  &__list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  &__item {
    display: block;
  }
}
</style>
