<script>
  import Switch from '../components/Switch.svelte'
  import { onMount } from 'svelte'

  export let flags = {}

  let flagsValues = flags

  onMount(() => {
    for (var flagName of Object.keys(flags)) {
      const storageFlagName = 'flag' + flagName
      const storageFlagValue = window.localStorage.getItem(storageFlagName)
      if (storageFlagValue) {
        if (storageFlagValue === 'true') {
          flagsValues[flagName] = true
        } else {
          flagsValues[flagName] = false
        }
      }
    }
  })

  function enableDisableFlag(value, flag) {
    if (flagsValues[flag] !== value) {
      flagsValues[flag] = value
      const storageFlagName = 'flag' + flag
      if (value) {
        window.localStorage.setItem(storageFlagName, 'true')
      } else {
        window.localStorage.setItem(storageFlagName, 'false')
      }
    }
  }
</script>

<div class="pannel-container">
  <h3>Flags Controller</h3>
  <div class="v-space" />
  {#each Object.keys(flags) as flag}
    <div class="flag-container">
      {flag}
      <Switch value={flagsValues[flag]} changeAction={enableDisableFlag} name={flag} />
    </div>
    <div class="v-space" />
  {/each}
</div>

<style>
  h3 {
    font-size: 32px;
    margin-bottom: 18px;
  }

  .pannel-container {
    padding: 30px 60px;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(238, 239, 240);
  }

  .flag-container {
    display: flex;
    width: 300px;
    font-size: 24px;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid orange;
    border-radius: 10px;
    padding: 15px;
  }

  .v-space {
    height: 25px;
  }
</style>
