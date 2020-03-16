<template>
  <div>
    <section class="education">
      <h1 class="bg-primary text-white">Education</h1>
      <div class="container">
        <div v-for="school in schools" :key="school.id">
          <ECard :school="school"></ECard>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import ECard from "./ECard";

export default {
  name: "Education",
  components: { ECard },
  data() {
    return {
      schools: []
    };
  },
  created() {
    axios
      .get("http://localhost:8080/schools.json")
      .then(response => (this.schools = response.data));
  }
};
</script>
<style scoped>
.education {
  padding-top: 5%;
  padding-bottom: 10%;
}
.container {
  padding-top: 25px;
}
</style>