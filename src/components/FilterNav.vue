<template>
  <div class="container">
    <div class="col-md-6">
      <ul class="nav justify-content-end">
        <li class="nav-item" style="margin-right: 20px">
          <button
            style="color: gray"
            @click="handleFilter('viewall')"
            :class="{ 'active-button': currentTab === 'viewall' }"
          >
            VIEW ALL
          </button>
        </li>
        <li class="nav-item" style="margin-right: 20px">
          <button
            style="color: gray"
            @click="handleFilter('completed')"
            :class="{ 'active-button': currentTab === 'completed' }"
          >
            COMPLETED
          </button>
        </li>
        <li class="nav-item">
          <button
            style="color: gray"
            @click="handleFilter('ongoing')"
            :class="{ 'active-button': currentTab === 'ongoing' }"
          >
            ONGOING
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "viewall",
    };
  },
  methods: {
    handleFilter(currentTab) {
      this.$emit("handleFilter", currentTab);
      this.currentTab = currentTab;
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  background-color: white;
}

button:hover {
  font-weight: bold;
}

/* Làm đậm chữ của button khi được nhấn */
button:active {
  font-weight: bold;
}
button.active-button {
  font-weight: bold;
}
</style>
