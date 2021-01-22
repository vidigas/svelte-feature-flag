function FeatureFlagsHelper(flags) {
  return {
    isFlagEnabled(flagName) {
      const storageFlagName = 'flag' + flagName
      const storageFlagValue = window.localStorage.getItem(storageFlagName)
      //look for flags in localstorage
      if (storageFlagValue) {
        if (storageFlagValue === 'true') {
          return true
        } else {
          return false
        }
      }
      //look for flags in json file
      if (flags[flagName]) {
        return true
      } else {
        return false
      }
    },
  }
}

export default FeatureFlagsHelper
