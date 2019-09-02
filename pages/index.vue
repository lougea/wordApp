<template>
  <div class="container">
    <select v-model="action" list="action" name="" class="border-b">
      <option>synonyms</option>
      <!-- <option>definition</option> -->
      <option>antonyms</option>
      <!-- <option>examples</option> -->
      <option>rhymes</option>
    </select>
    <h1>of</h1>
    <input
      v-model="query"
      type="text"
      class="border m-2 hover:border-green-700"
      @keypress.enter="see()"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      words: [],
      query: null,
      action: null
    }
  },
  methods: {
    async see() {
      const response = await axios.get(
        `https://us-central1-tappable-louise.cloudfunctions.net/test-httpWordApi?query=${this.query}&action=${this.action}`
      )
      const mots = response.data
      console.log(mots)
      console.log(this.action)
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
