<template>
  <div class="about">
    <h1>SMART Health Card</h1>
    <section>
      This project allow you to create a
      <a href="https://smarthealth.cards/en/" target="_blank"
        >SMART Health Card</a
      >.
    </section>
    <section class="important">
      <h4>IMPORTANT</h4>
      <p>This project has an educational purpose only.</p>
      <p>A real SMART Health Card should be issued by health institution.</p>
    </section>
    <section>
      <h4>References</h4>
      <ul>
        <li>
          <a href="https://support.apple.com/en-us/HT212752" target="_blank">
            https://support.apple.com/en-us/HT212752
          </a>
        </li>
        <li>
          <a href="https://spec.smarthealth.cards/" target="_blank">
            Framework Specification
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.important {
  @apply text-xl font-bold;
}
a:hover {
  @apply underline decoration-blue-500 decoration-1;
}

h1 {
  @apply text-2xl font-bold;
}

.about {
  @apply flex flex-col justify-center;
  section {
    @apply mb-8;
    h4 {
      @apply text-xl mb-2 font-bold relative;
      &:after {
        content: " ";
        @apply block w-full border-b-2 border-amber-400;
      }
    }
  }
}

li {
  @apply list-disc list-inside;
}
</style>
