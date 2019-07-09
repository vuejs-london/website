<template>
  <div class="c-speaker-list">
    <slot></slot>
  </div>
</template>

<style lang="postcss">
.c-speaker-list {
  display: grid;
  margin: 0;
  margin-top: var(--grid-four);
  grid-gap: var(--grid-three);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &[columns='2'] {
    @media (--tablet-small) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
