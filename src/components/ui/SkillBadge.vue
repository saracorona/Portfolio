<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <span class="skill-badge" :data-category="category">{{ name }}</span>
</template>

<style lang="scss" scoped>
.skill-badge {
  display: inline-block;
}
</style>
