<template>
  <section class="p-6">
  <h1 class="font-bold text-5xl text-pfWhite font-poppins">Favour (Adachukwu) Uzochukwu</h1>
  <div id="typed-output" class="text-pfWhite font-allura text-xl text-3xl"></div>
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
