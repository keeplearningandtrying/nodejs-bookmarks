<template>
  <div class="hello">
    <div>
      <p v-for="bm in bookmarks">
        {{bm.url}}
      </p>
    </div>
  </div>
</template>

<script>
import { api } from '../services/api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      bookmarks: []
    }
  },
  mounted: function () {
    this.fetchBookmarks()
  },
  methods: {
    fetchBookmarks: function () {
      api.get('bookmarks')
        .then(response => {
          console.log(response)
          this.bookmarks = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
