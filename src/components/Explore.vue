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
  <div class="flex h-screen w-full bg-[url('../assets/Coding-Challenge-Image.png')] bg-cover bg-center static">
    <div class="bg-gradient-to-r from-[#611818] to-[#611818] lg:min-w-[400px] min-w-[185px]"></div>
    <div id="start" class="start" v-if="explore">
      <h1 class="animate-fade-in-down absolute bottom-0 left-0 lg:ml-[190px] lg:mb-[200px] text-[#FFFFFF] font-['Didot'] lg:text-[224px] md:text-[90px] text-[70px] font-bold ml-[30px] mb-[300px]">Explore</h1>
      <div class="absolute bottom-0 left-0 lg:ml-[190px] lg:mb-[200px] flex flex-row ml-[30px] mb-[270px]">
        <button @click="show"><img class="lg:mr-4 mr-2" src="../assets/Plus.png" alt="Plus Sign"></button>
        <h3 class="text-[#FFFFFF] font-Lato lg:text-[25px] text-[18px] font-normal self-center">More Details</h3>
      </div>
    </div>
    <div id="showModal" class="animate-expand flex flex-col absolute bg-white lg:h-[630px] md:h-[70%] md:w-[50%] h-[70%] lg:w-[500px] w-[97%] md:bottom-0 md:left-0 md:ml-[50px] md:mb-[100px] lg:bottom-0 lg:left-0 lg:ml-[300px] mt-[20px] ml-[5px] lg:mb-[100px] p-5 lg:p-8" v-if="showModal">
      <button @click="hide" class="animate-contract"><img class="ml-auto h-[18px] animate-contract" src="../assets/Path.png" alt="Close Modal"></button>
      <h1 class="text-[#611818] font-['Didot'] lg:text-[66px] text-[35px] font-bold">Explore</h1>
      <div class="bg-gradient-to-r from-[#611818] h-[2px] w-[150px] lg:h-[3px] lg:w-[250px] lg:mb-6 mb-2"></div>
      <p class="text-[#282828] font-Lato lg:text-[18px] text-[13px] font-normal tracking-[0.35px] leading-[22px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
        ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
        velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad 
        minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
      </p>
      <button class="px-10 py-2 text-[#FFFFFF] font-Lato lg:text-[18px] text-[15px] bg-gradient-to-r from-[#611818] to-[#A36754] border-1 border-[#979797] mt-[20px] self-start">Read More</button>
    </div>
    <div>
        <img class="absolute lg:bottom-20 bottom-10 lg:right-10 right-[13.5px] mb-7 h-[46px] lg:h-[64px]" src="../assets/Facebook.svg" alt="Facebook Icon">
        <img class="absolute lg:bottom-1 bottom-1 lg:right-9 right-3 lg:mb-6 mb-2 h-[50px] lg:h-[70px]" src="../assets/Instagram.svg" alt="Instagram Icon">
    </div>
  </div>
</template>

<style scoped>
.animate-expand {
  transform-origin: bottom left;
}
</style>
