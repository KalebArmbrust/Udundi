<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="flex h-screen w-full bg-[url('../src/assets/Coding-Challenge-Image.png')] bg-cover bg-center from-[#611818]">
    <div>
      <h1 class="Title">Explore</h1>
      <div grid grid-cols-2 gap-4>
        <img src="../assets/Plus.png" alt="Plus Sign">
        <h3>More Details</h3>        
      </div>
    </div>
    <div>
      <img src="../assets/Facebook.svg" alt="Facebook Icon">
      <img src="../assets/Instagram.svg" alt="Instagram Icon">
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
</style>
