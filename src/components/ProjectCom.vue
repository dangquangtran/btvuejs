<template>
  <div class="abc">
    <div :class="project.status ? 'my-div' : 'my-div false'">
      <p>{{ project.title }}</p>
      <div>
        <i class="fa fa-trash" aria-hidden="true" @click="deleteProject"></i>
        <router-link :to="`/projects/${this.project.id}`">
          <i class="fa fa-pencil" aria-hidden="true"></i>
        </router-link>
        <i
          class="fa-solid fa-check"
          aria-hidden="true"
          @click="toggleStatus"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    },
  },
  methods: {
    toggleStatus() {
      this.$emit("toggle-status", this.project.id);
    },
    deleteProject() {
      this.$emit("delete-project", this.project.id);
    },
  },
};
</script>

<style scoped>
.my-div {
  width: 600px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: bisque;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 15px;
  border-left: 5px solid green;
  border-radius: 5px;
}

.abc {
  justify-content: center;
  display: grid;
}

i {
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
}
p {
  margin-top: 1rem;
}

.my-div.false {
  border-left: 5px solid red;
}
</style>
