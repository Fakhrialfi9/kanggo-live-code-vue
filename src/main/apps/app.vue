<template>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import { dataProfiles } from '@/data/user.js'
export default {
  name: 'appsComponent',
  props: {},
  components: {
    RouterView
  },
  data() {
    return {}
  },
  methods: {},
  watch: {},

  mounted() {
    // set user profile (Selected profile)
    const selectedProfile = dataProfiles.find((profile) => profile.role === 'admin')

    // get user profile bedasarkan selected profile
    if (selectedProfile) {
      localStorage.setItem('userProfile', JSON.stringify(selectedProfile))
    }
  },
  created() {}
}
</script>