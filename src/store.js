import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
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
      selectedId: null,
      maxId: 3,
    };
  },
  getters: {
    getProject(state) {
      // console.log(state.selectedId);
      // console.log(
      //   state.projects.filter((project) => project.id === state.selectedId)
      // );
      return state.projects.filter(
        (project) => project.id === state.selectedId
      );
    },
  },
  mutations: {
    setProject(state, projectPayload) {
      const index = state.projects.findIndex(
        (project) => project.id === projectPayload.id
      );
      if (index != -1) {
        state.projects[index] = projectPayload;
      }
    },
    getProject(state, id) {
      state.selectedId = id;
    },
    addProject(state, project) {
      state.maxId += 1;
      project.id = state.maxId;
      state.projects.push(project);
      console.log(state.projects, state.maxId);
    },
  },
  actions: {
    // async fetchProject({ commit }, { id }) {
    //   const res = await fetch("http://localhost:3000/projects/" + id);
    //   const data = await res.json();
    //   commit("setProject", data);
    // },
    getProject({ commit }, id) {
      commit("getProject", id);
    },
    pushProject({ commit }, project) {
      commit("setProject", project);
    },
    addProject({ commit }, project) {
      console.log(project);
      commit("addProject", project);
    },
  },
});

export default store;
