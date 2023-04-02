<template>
  <nav class="nav">
    <div class="logo">
      <img
        src="https://smarthealth.cards/Assets/Images/logo_header.svg"
        alt="logo"
      />
    </div>

    <div class="items">
      <router-link to="/">Home</router-link>
      <router-link to="/card">Card</router-link>
    </div>
  </nav>
  <main class="content">
    <router-view />
  </main>
</template>

<style lang="scss">
.nav {
  @apply h-32 text-slate-100 flex w-full items-center lg:px-60 px-4;
  .logo {
    @apply mr-5;
  }

  .items {
    @apply flex text-teal-900;
    a {
      @apply mx-2;
      &.router-link-active {
        @apply font-bold underline decoration-amber-500 decoration-4;
      }

      &:hover {
        @apply text-cyan-600 transition transition-all;
      }
    }
  }
}
#app {
  @apply absolute bottom-0 left-0 right-0 top-0 flex flex-col;
}
.content {
  @apply lg:px-60 px-4 w-full h-fit h-full;
}
</style>
