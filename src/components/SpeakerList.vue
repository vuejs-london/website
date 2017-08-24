<template>
  <div class="c-speaker-list">
    <slot></slot>
  </div>
</template>

<style lang="postcss">
.c-speaker-list {
  margin: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &[columns='2'] {
    @media (--tablet-small) {
      display: grid;
      grid-gap: var(--grid-three);
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
