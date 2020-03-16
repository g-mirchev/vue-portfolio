<template>
  <div class="projectcard">
    <div class="card">
      <div class="card-head">
        <img class="img-custome myprojectimage" :src="project.imageurl" />
        <!-- image url -->
        <h2 class="myprojectname">
          {{ project.name }}
          <!-- Title goes here -->
        </h2>
      </div>
      <hr />
      <div class="card-body">
        <p class="myprojectdescribtion">
          {{ project.describtion }}
          <!-- Describtion goes here -->
        </p>
        <form :action="project.github">
          <input type="submit" class="btn btn-outline-secondary" value="Repository" />
        </form>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "PCard",
  props: {
    project: Object
  }
};
</script>
<style scoped>
.img-custome {
  width: 250px;
  height: 140px;
  margin-top: 15px;
  margin-bottom: 10px;
}
</style>
