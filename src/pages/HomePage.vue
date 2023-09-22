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
      projects: [
        {
          id: 1,
          title: "Create new homepage banner",
          details: "abcd",
          status: true,
        },
        {
          id: 2,
          title: "Make marketing email",
          details: "abcd",
          status: true,
        },
        {
          id: 3,
          title: "Update promo links",
          details: "abcd",
          status: false,
        },
      ],
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
      if (this.currentTab === "view-all") {
        return this.projects;
      } else if (this.currentTab === "completed") {
        return this.projects.filter((project) => project.status === true);
      } else if (this.currentTab === "ongoing") {
        return this.projects.filter((project) => project.status === false);
      }
      return this.projects;
    },
  },
};
</script>
