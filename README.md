# SVELTE FEATURE FLAGS

Feature flags ( also known as feature toggle) functionality for svelte based apps.

## Install

to install this module run:

```bash
 npm i svelte-feature-flag --save-dev
```

## Usage

 Create a json file at the root level of your project.
 In this file you will declare the features you want to switch on and off.

## flags.json

 ```bash
{
  "feature-a" : true,
  "feature-b" : false
}
```

To be able to import json files in .svelte files you'll need [@rollup/plugin-json](https://www.npmjs.com/package/@rollup/plugin-json)

## Flags Panel

Add the flags panel to a custom route in order to switch the features on and off

You'll need to pass the flags.json as a prop to FlagsPanel component.

Example:

```html
<script>
  import { FlagsPanel } from 'svelte-feature-flag'
  import flags from '../../flags.json'
</script>
<style></style>

<FlagsPanel {flags} />
```

<img src="https://user-images.githubusercontent.com/14443974/105445334-78debd80-5c4e-11eb-9919-7bd613df853c.png" width="300">

## Feature Flag

  There are two ways one can use the feature flags.

1: In the html using the FeatureFlag component.

```html
<script>
import { FeatureFlag } from 'svelte-feature-flag';
import flags from '../../flags.json';

</script>

<style></style>

<FeatureFlag on="feature-a" {flags} >
  <FeatureA />
</FeatureFlag>
```

2: In the Javascript part using the FeatureFlagsHelper:

```html
<script>
import {FeatureFlagsHelper } from 'svelte-feature-flag';
import flags from '../../flags.json';

function handleClick() {
  if(FeatureFlagsHelper(flags).isFlagEnabled("feature-b")) {
    alert("feature b enabled")
  } else {
    alert("feature b not enabled")
  }
}
</script>

<style></style>

<button on:click={handleClick}>
Click me
</button>
```
