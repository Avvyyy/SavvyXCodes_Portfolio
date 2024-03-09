<template>
  <div id="typed-output" class="bgWhite"></div>
</template>

<script>
import { onMounted } from 'vue';
import Typed from 'typed.js';

export default {
  mounted() {
    const options = {
      strings: ['Hello, world!', 'Welcome to Vue.js.'],
      typeSpeed: 50,
      backSpeed: 50,
    };

    new Typed('#typed-output', options);
  },
}
</script>
