<template>
  <div class="d-flex justify-content-center align-items-center">
    <ul class="nav justify-content-end">
      <li class="nav-item" style="margin-right: 20px">
        <router-link to="/" class="router">
          <p
            :class="{ color: activeButton === 'projects' }"
            @click="setActiveButton('projects')"
          >
            Projects
          </p>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/add" class="router">
          <p
            :class="{ color: activeButton === 'add' }"
            @click="setActiveButton('add')"
          >
            Add a New Projects
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeButton: "projects", // Khởi tạo biến để theo dõi button đang được chọn
    };
  },
  methods: {
    setActiveButton(buttonName) {
      this.activeButton = buttonName;
    },
  },
};
</script>

<style scoped>
.router {
  text-decoration: none;
}
p {
  color: gray;
}
p.color {
  border-bottom: 3px solid green;
}
</style>
