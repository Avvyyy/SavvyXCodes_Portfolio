<template>
  <div>
    <h1 class="text-3xl text-pfWhite font-bold">I am Favour Uzochukwu</h1>

    <vue-typed-js :strings="[text1, text2, text3]" class="text-pfWhite">
      <h1 class="typing"></h1>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text1: "VueJs Developer",
      text2: "Microsoft Learn Ambassador",
      text3: "I write compelling content"
    };
  }
};
</script>
