<script>
  import FeatureFlagsHelper from './featureFlagsHelper'

  export let flags = {}
  export let on = ''
  export let off = ''

  function showSlot(on, off) {
    if (on) {
      return FeatureFlagsHelper(flags).isFlagEnabled(on)
    }
    if (off) {
      return !FeatureFlagsHelper(flags).isFlagEnabled(off)
    }
    return false
  }
</script>

{#if showSlot(on, off)}
  <slot />
{/if}

<style></style>
