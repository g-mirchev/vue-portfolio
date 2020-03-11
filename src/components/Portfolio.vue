<template>
  <div>
    <section class="portfolio">
      <h1>Portfolio</h1>
      <p>These are some of my sample projects</p>
      <div class="container">
        <div class="row">
          <!-- Projects go here -->
          <div v-for="project in projects" :key="project.id" class="col-md-4">
              <div class="card">
                  <div class="card-head">
                  <img
                      class="img-custome myprojectimage"
                      :src="project.imageurl"> <!-- image url -->
                  <h2 class=myprojectname>
                    {{project.name}} <!-- Title goes here -->
                  </h2>
                  </div>
                  <hr />
                  <div class="card-body">
                  <p class="myprojectdescribtion">
                    {{project.describtion}} <!-- Describtion goes here -->
                  </p>
                  <form :action="project.github">
                    <input type="submit" class="btn btn-outline-secondary" value="Repository" />
                  </form>
                  </div>
              </div>
          <br />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Portfolio",
  data() {
    return {
      projects: []
    };
  },
  created() {
    axios
      .get('http://localhost:8080/projects.json')
      .then(response =>  (this.projects = response.data));
  }
}
</script>
<style scoped>
.portfolio {
  background-color: #34345238;
  padding-top: 5%;
  padding-bottom: 10%;
  /* padding:15% */
}
.img-custome {
  width: 250px;
  height: 140px;
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>