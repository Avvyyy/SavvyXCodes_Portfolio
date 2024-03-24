<template class="font-poppins">
    <navBar />
    <heroMenu />
    <AboutMe />
</template>

<script>
import navBar from "../src/components/navBar.vue"
import heroMenu from "./components/heroMenu.vue";
import AboutMe from "./components/aboutMe.vue"
export default {
  components: {
    navBar,
    heroMenu,
    AboutMe
  }
}
</script>

<style>
  section{
    margin-bottom: 12em;
    padding: 1.5rem;
  }
</style>