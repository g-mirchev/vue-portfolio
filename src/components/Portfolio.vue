<template>
  <div>
    <section class="portfolio">
      <h1>Portfolio</h1>
      <p>These are some of my sample projects</p>
      <div class="container">
        <div class="row">
          <!-- Projects go here -->
          <div v-for="project in projects" :key="project.id" class="col-md-4">
            <PCard :project="project"></PCard>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import PCard from "./PCard"

export default {
  name: "Portfolio",
  components: {PCard},
  data() {
    return {
      projects: []
    };
  },
  created() {
    axios
      .get("http://localhost:8080/projects.json")
      .then(response => (this.projects = response.data));
  }
};
</script>
<style scoped>
.portfolio {
  background-color: #34345238;
  padding-top: 5%;
  padding-bottom: 10%;
  /* padding:15% */
}
</style>
