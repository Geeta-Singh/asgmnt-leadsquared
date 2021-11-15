<template>
  <div class="section-container">
    <div class="d-flex justify-content-between">
      <p class="main-text">{{mainText}}</p>
      <p class="sub-text">
        {{subText}}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mainText: String,
    subText: String
  }
};
</script>
<style scoped>
.main-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  letter-spacing: 0.25px;

  color: #42505c;
}
.sub-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height, or 107% */

  text-align: right;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #79828b;
}
.section-container {
  margin-bottom: 22px;
}
</style>