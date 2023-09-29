<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="title">TITLE</label>
        <textarea id="title" rows="1" v-model="project.title"></textarea>
        <div style="text-align: left; display: block"></div>
      </div>
      <div class="form-group">
        <label for="detail">DETAIL</label>
        <textarea id="detail" rows="3" v-model="project.details"></textarea>
        <div style="text-align: left; display: block"></div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" @click="onSubmit">
          Add Project
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {},
    };
  },
  methods: {
    onSubmit() {
      const newProject = {
        title: this.project.title,
        details: this.project.details,
        status: false,
      };
      this.$store.dispatch("addProject", newProject);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 900px;
  display: flex;
  flex-direction: column;
  background-color: aqua; /* Màu nền trắng */
  padding: 20px; /* Khoảng cách giữa nội dung và viền form */
  border-radius: 10px; /* Bo góc form */
}

.form-group {
  margin-bottom: 10px;
}

/* Căn trái cho tất cả các label trong form */
form label {
  text-align: left;
  display: block;
  width: 100%; /* Đảm bảo label rộng bằng form */
  margin-bottom: 5px; /* Khoảng cách giữa label và input */
}

textarea {
  width: 100%;
}
button {
  background-color: green;
}
</style>
