<template>
  <div class="popup">
    <select v-model="formData.category">
      <option v-bind:value="cat" v-for="cat, idx of categories" :key="idx" value="">
        {{ cat }}
      </option>
    </select>
    <input v-model="formData.count" type="text">
    <div class="btngroup">
      <button class="btn-add-el" @click="add">Добавить</button>
      <button class="btn-add-el" v-if="mode === 'edit'" @click="onEditClick">EDIT</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Popup',
  data() {
    return {
      mode: this.$route.params.mode, // new 
      formData: {
        id: '',
        category: this.$route.params.category,
        count: this.$route.query.value,
      }
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategoriesList
    },
  },
  methods: {
    add() {
      this.formData.id = this.$store.getters.getId,
        this.formData.data = new Date().toLocaleDateString('ru-RU', { day: "numeric", month: "numeric", year: "numeric", })
      this.$store.commit('addPayment', Object.assign({}, this.formData))
    },
    onEditClick() {
      this.$store.commit("editCostsList", {
        id: +this.$route.query.id,
        category: this.formData.category,
        count: this.formData.count,
        data: new Date().toLocaleDateString('ru-RU', { day: "numeric", month: "numeric", year: "numeric", }),
      })
    },
  },
}
</script>

<style lang="scss">
.popup {
  width: 350px;
  padding: 30px;
  background-color: bisque;
  border: 1px solid black;
  border-radius: 10px;
  position: absolute;
  left: calc(50% - 210px);
  // top: calc(50% + 110px);
}

.btn-add-el {
  padding: 10px 0;
  box-sizing: border-box;
  margin: 10px 0;
  width: 125px;
  border-radius: 7px;
  border: 1px solid gray;
}

.btn-add-el:hover {
  border-color: red;
}
</style>