<template>
  <filter-nav @handleFilter="handleFilter"></filter-nav>
  <div>
    <project-com
      v-for="project in filteredProjects"
      :key="project.id"
      :project="project"
      @toggle-status="toggleStatus"
      @delete-project="deleteProject"
    >
    </project-com>
  </div>
</template>

<script>
import FilterNav from "../components/FilterNav.vue";
import ProjectCom from "../components/ProjectCom.vue";
export default {
  components: {
    FilterNav,
    ProjectCom,
  },
  data() {
    return {
      currentTab: "view-all",
    };
  },
  methods: {
    handleFilter(currentTab) {
      this.currentTab = currentTab;
    },
    toggleStatus(itemId) {
      const index = this.projects.findIndex((project) => project.id === itemId);
      if (index !== -1) {
        this.projects[index].status = !this.projects[index].status;
      }
    },
    deleteProject(itemId) {
      const index = this.projects.findIndex((project) => project.id === itemId);
      if (index !== -1) {
        this.projects.splice(index, 1);
      }
    },
  },
  computed: {
    filteredProjects() {
      const projects = this.$store.state.projects;
      if (this.currentTab === "view-all") {
        return projects;
      } else if (this.currentTab === "completed") {
        return projects.filter((project) => project.status === true);
      } else if (this.currentTab === "ongoing") {
        return projects.filter((project) => project.status === false);
      }
      return projects;
    },
  },
  created() {
    this.projects = this.$store.state.projects;
  },
};
</script>
