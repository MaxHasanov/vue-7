<template>
  <div class="list">
    <ul class="list_title">
      <li class="title-left">Date</li>
      <li class="title-cntr">Category</li>
      <li class="title-right">Count</li>
    </ul>
    <div v-for="item of list" :key="item.id" class="list_item">
      <div>{{ item.id }}</div>
      <div> {{ item.data }} </div>
      <div> {{ item.category }} </div>
      <div> {{ item.count }}$ </div>
      <span class="dot" @click="callContextMenu($event, item)">&#10247;</span>
      <ContextMenu></ContextMenu>
    </div>
  </div>
</template>

<script>
import ContextMenu from './ContextMenu.vue';
export default {
  name: 'List',
  components: {
    ContextMenu,
  },
  mounted() {
    this.$context.EventEmitter.$on("show", this.show);
  },
  computed: {
    list() {
      return this.$store.getters.getPaymentsList
    },
  },
  methods: {
    callContextMenu(event, item) {
      this.$context.show(event.currentTarget, item);
    }
  },
};
</script>

<style lang="scss">
.list {
  width: 780px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #ddd;
  padding: 4px 0;
  box-sizing: border-box;

  &_title {
    list-style-type: none;
    display: flex;
    // justify-content: space-around;
    font-weight: bold;
    padding: 0;
  }



  &_item {
    display: flex;
    justify-content: space-around;
    padding: 10px 25px;
  }
}

.title-left {
  margin-left: 210px;
}

.title-cntr {
  margin-left: 130px;
}

.title-right {
  margin-left: 88px;
}

.context-menu {
  cursor: pointer;
  text-decoration: none;
}

.dot {
  cursor: pointer;
}
</style>