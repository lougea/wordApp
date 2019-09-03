<template>
  <div class="dashboard">
    <vega-lite />
    // :data="values" mark="bar" :encoding="encoding"
  </div>
</template>

<script>
import VueVega from 'vue-vega'
import axios from 'axios'

export default {
  components: {},
  props: {
    words: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      receivedWord: [],
      query: null,
      action: null
    }
  },
  methods: {
    async wordCloud() {
      const response = await axios.get(
        `https://us-central1-tappable-louise.cloudfunctions.net/test-httpWordCloud?query=${this.words}`
      )
      const cloudWord = response.data
      console.log(cloudWord)
      console.log(this.action)
    }
  }
}
</script>

<style lang="scss" scoped></style>
