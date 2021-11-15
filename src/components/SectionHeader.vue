<template>
  <div class="section-container">
    <div class="d-flex justify-content-between align-items-center">
      <p class="project-main-text m-0">{{mainText}}</p>
      <p class="project-sub-text m-0">
        {{isMobile?'View All':subText}}
        <img src="./../../public/assets/icons/Arrow.svg" />
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mainText: String,
    subText: String
  },
  data() {
    return {
      isMobile:window.innerWidth<900
    }
  },
};
</script>
<style scoped>
.project-main-text {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  letter-spacing: 0.25px;

  color: #42505c;
}
.project-sub-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  text-align: right;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #79828b;
}
.section-container {
  margin-bottom: 22px;
}
</style>