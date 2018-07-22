<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.presenter.catUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="presenter.title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A CAT
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Presenter from '@/presenters/postpresenter'
export default {
  data () {
    return {
      presenter: new Presenter(this)
    }
  },
  mounted () {
    this.presenter.init()
  },
  methods: {
    postCat () {
      this.presenter.postCat()
    },
    pushNewCat (newCat) {
      return this.$root.$firebaseRefs.cat.push(newCat)
    },
    backToHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.waiting {
  padding: 10px;
  color: #555;
}
</style>