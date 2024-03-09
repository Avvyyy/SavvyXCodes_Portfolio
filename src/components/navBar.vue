<template>
  <nav class="flex md:flex-row justify-between p-4 md:p-8 bg-pfWhite items-center">
    <h1 class="font-bold font-allura text-5xl animate-pulse">SavvyXCodes</h1>

		<button class="md:hidden" @click="toggleNav">
			<i class="bi bi-list text-6xl font-bold"></i>
		</button>

    <ul class=" bg-pfWhite md:flex justify-evenly md:flex-row gap-3 navLink transition-all duration-300 ease-in-out absolute h-fit w-full  md:static top-16 left-0 w-full md:w-auto p-4" v-show="!navOpen && !isMobile">
      <li>
        <a href="/" class="font-poppins text-xl">About Me</a>
      </li>
      <li>
        <a href="https://www.github.com/Avvyyy/" class="font-poppins text-xl">
          <i class="bi bi-github"></i>
        </a>
      </li>
      <li>
        <a href="https://www/linkedin.com/in/favour-uzochukwu/" class="font-poppins text-xl">
          <i class="bi bi-linkedin"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
	data() {
		return {
			navOpen: true,
		}
	},
	methods: {
		toggleNav() {
			this.navOpen = !this.navOpen
		}
	},
};
</script>
