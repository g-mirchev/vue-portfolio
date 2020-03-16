<template>
  <div>
    <div class="flex">
      <div class="title">
        <h3 class="bg-light">
          {{school.title}}
          <br />
          {{school.name}}
        </h3>
      </div>
      <div class="text-right locationdate">
        <h5>{{school.location}}</h5>
        <p>{{school.date_started}} - {{school.date_finished}}</p>
      </div>
    </div>
    <hr />
    <div>
      <p>{{school.about}}</p>
      <hr />
      <ul class="achievements text-left">
        <strong>Achievements:</strong>
        <br />
        <br />
        <div v-for="achievement in school.achievements" :key="achievement.id">
          <li>{{achievement.text}}</li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ECard",
  props: {
    school: Object
  }
};
</script>
<style scoped>
.locationdate {
  margin-top: 10px;
}
</style>