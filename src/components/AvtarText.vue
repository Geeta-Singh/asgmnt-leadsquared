<template>
  <div class="d-flex align-items-center">
    <b-avatar :size="avatarSize" variant="primary" :class="avatarStyles" :src="`${imgSrc}`" />
    <div class="section">
      <p class="mainTextStyles m-0">{{ mainText }}</p>
      <p :class="subTextStyles" class="m-0">{{ subText }}</p>
    </div>
  </div>
</template>
<script>
import profile1 from "./../../public/assets/icons/profile1.png";
import profile2 from "./../../public/assets/icons/profile2.png";
import profile3 from "./../../public/assets/icons/profile3.png";
import profile4 from "./../../public/assets/icons/profile4.png";
export default {
  props: {
    src: {
      type: String,
      required: false
    },
    mainText: {
      type: String,
      required: false
    },
    subText: {
      type: String,
      reuquired: false
    },
    avatarStyles: {
      type: String,
      required: false
    },
    avatarSize: {
      type: String,
      required: false
    },
    subTextStyles: {
      type: String,
      required: false
    }
  },
  computed: {
    imgSrc() {
      if (this.src.includes("profile1")) return profile1;
      else if (this.src.includes("profile2")) return profile2;
      else if (this.src.includes("profile3")) return profile3;
      else return profile4;
    }
  }
};
</script>

<style  scoped>
.section {
  margin-left: 16px;
}
.mainTextStyles {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #42505c;
}
.projectsubClass {
  font-size: 12px;
  line-height: 18px;
}
.earners {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #79828b;
}
</style>