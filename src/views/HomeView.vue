<template>
  <div class="home">
    <List></List>
    <button class="add-new-item" @click="clicked">ADD NEW COST +</button>
    <Popup v-if="isPopupActive"></Popup>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import Popup from '@/components/popup.vue'

export default {
  name: 'HomeView',
  components: { List, Popup, },
  data() {
    return {
      isPopupActive: false,
    }
  },
  methods: {
    clicked() {
      this.isPopupActive = !this.isPopupActive;
    }
  }
}
</script>

<style lang="scss">
.add-new-item {
  margin: 20px 0;
  padding: 3px;
  width: 200px;
  border-radius: 7px;
  height: 35px;
}
</style>