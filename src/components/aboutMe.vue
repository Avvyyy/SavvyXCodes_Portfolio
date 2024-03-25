<template>
  <section>
    <h2 id="aboutMe" class="text-pfWhite font-bold text-3xl text-center">
      About Me
    </h2>
    <p class="text-pfBlack m-auto bg-pfWhite text-center w-3/4 h-3/4">
      I am a Computer Science Major at Babcock University. When I am not
      writing codes, you can find me writing about life or "writing
      documentation for my codes"
    </p>

    <!-- Technologies Used -->
    <div class="technologies w-1/2 m-auto">
      <transition-group name="neon-light" tag="div">
        <ul class="flex justify-between gap-8 neon-light-icon">
          <li v-for="icon in icons" :key="icon.icon" class="flex flex-col items-center justify-evenly text-pfWhite" :class="font_size">
            <Icon :icon="icon.icon" />
            {{ icon.name }}
          </li>
        </ul>
      </transition-group>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        { icon: 'mdi:github', name: 'Github' },
        { icon: 'mdi:vuejs', name: 'VueJS' },
        { icon: 'mdi:language-html5', name: 'HTML5' },
        { icon: 'mdi:language-css3', name: 'CSS' },
        { icon: 'mdi:language-javascript', name: 'Javascript' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
        { icon: 'mdi:language-python', name: 'Python' },
        { icon: 'mdi:microsoft-azure', name: 'Azure' }
      ],
      font_size: 'text-lg',
    };
  }
};
</script>

<style>
.neon-light-icon {
  animation: neon-light-animation 5s linear infinite;
}

@keyframes neon-light-animation {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  50% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(40%);
    opacity: 0;
  }
}

/* Vue.js transition classes */
.neon-light-enter-active, .neon-light-leave-active {
  transition: opacity 1000s;
}

.neon-light-enter, .neon-light-leave-to {
  opacity: 0;
}
</style>
