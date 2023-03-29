<script>
export default {
  data() {
    return {
      showModal: false,
      explore: true,
    }
  },

  methods: {
    show(event) {
      this.showModal = true;
      this.explore = false;
    },
    hide(event) {
      this.showModal = false;
      this.explore = true;
    },
  },
}

</script>

<template>
  <div class="flex h-screen w-full bg-[url('../src/assets/Coding-Challenge-Image.png')] bg-cover bg-center static">
    <div class="bg-gradient-to-r from-[#611818] to-[#611818] min-w-[400px]"></div>
    <div id="start" class="start" v-if="explore">
      <h1 class="animate-fade-in-down absolute bottom-0 left-0 ml-[190px] mb-[200px] text-[#FFFFFF] font-['Didot'] text-[224px] font-bold">Explore</h1>
      <div class="absolute bottom-0 left-0 ml-[190px] mb-[200px] flex flex-row">
        <button @click="show"><img class="mr-4" src="../assets/Plus.png" alt="Plus Sign"></button>
        <h3 class="text-[#FFFFFF] font-Lato text-[25px] font-normal self-center">More Details</h3>
      </div>
    </div>
    <div id="showModal" class="flex flex-col absolute bg-white h-[630px] w-[500px] bottom-0 left-0 ml-[300px] mb-[100px] p-8" v-if="showModal">
      <button @click="hide"><img class="ml-auto" src="../assets/Path.png" alt="Close Modal"></button>
      <h1 class="text-[#611818] font-['Didot'] text-[66px] font-bold">Explore</h1>
      <div class="bg-gradient-to-r from-[#611818] h-[3px] w-[250px] mb-6"></div>
      <p class="text-[#282828] font-Lato text-[18px] font-normal tracking-[0.35px] leading-[22px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad 
        minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>
      <button class="px-10 py-2 text-[#FFFFFF] font-Lato text-[18px] bg-gradient-to-r from-[#611818] to-[#A36754] border-1 border-[#979797] mt-[20px] self-start">Read More</button>
    </div>
    <div>
        <img class="absolute bottom-20 right-10 mb-10" src="../assets/Facebook.svg" alt="Facebook Icon">
        <img class="absolute bottom-1 right-9 mb-6" src="../assets/Instagram.svg" alt="Instagram Icon">
    </div>
  </div>
</template>

<style scoped>

</style>
