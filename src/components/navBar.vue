<template>
  <nav class="flex justify-between opacity-90 fixed top-0 items-center p-6 bg-pfWhite w-full">
    <h2 class="font-bold font-allura text-3xl md:text-5xl animate-pulse">SavvyXCodes</h2>

    <button @click="toggleNav" class="md:hidden">
      <i class="bi bi-list text-6xl font-bold"></i>
    </button>

    <!-- Apply horizontal spacing with md:space-x-4 for desktop -->
    <ul :class="isOpen ? 'flex flex-col absolute w-full bg-pfWhite top-20 left-0 p-4 ' : 'hidden'" class="md:flex md:flex-row md:relative md:w-auto md:space-x-4 md:top-0">
      <li>
        <a href="#" @click="scrollToAboutMe" class="text-2xl">
          About Me
        </a>
      </li>

      <li>
        <a href="https://www.github.com/Avvyyy/" class="text-2xl">
          <i class="bi bi-github"></i>
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/favour-uzochukwu/" class="text-2xl">
          <i class="bi bi-linkedin"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import aboutMe from './aboutMe.vue';
export default {
  data() {
    return {
      isOpen: false,
    }
  },

  components: {
    aboutMe,
  },

  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
    //Function to scroll to the "About Me" section when the about me button is clicked
    scrollToAboutMe() {
      const aboutMeSection = document.getElementById('aboutMe');
      if (aboutMeSection) {
        aboutMeSection.scrollIntoView({behavior: 'smooth'});
      }
    }
  },
}
</script>
