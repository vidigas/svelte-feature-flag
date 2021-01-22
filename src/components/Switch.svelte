<script>
  export let value = false
  export let name
  export let changeAction
</script>

<label class="switch">
  <input type="checkbox" bind:checked={value} on:change={(e) => changeAction(e.target.checked, name)} />
  <span class="slider" />
</label>

<style>
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 22px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 22px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
</style>
