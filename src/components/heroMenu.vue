<template>
  <section class="bg-aboutMeBackground h-screen w-full bg-center bg-cover bg-no-repeat pt-40">
    <div class="flex flex-col">
      <h1 class="font-bold text-5xl text-pfWhite font-poppins mb-3">Favour (Adachukwu) Uzochukwu</h1>
      <p class="font-semibold text-xl text-pfPink">GenZ Tech Baddie</p>
      <div id="typed-output" class="text-pfWhite font-allura md:text-4xl text-2xl"></div>

    </div>
</section>
</template>

<script>
import { onMounted, ref } from 'vue';
import Typed from 'typed.js';

export default {
  mounted() {
    const options = {
      strings: ['Call me a GenZ Tech Guru...', 'I am creative!', 'I am open to learning!', 'I will definitely bring your webapp to life!'],
      typeSpeed: 50,
      backSpeed: 50,
    };

    new Typed('#typed-output', options);
  },
}
</script>
