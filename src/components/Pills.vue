<template>
  <div>
    <p class="m-0 pills" :class="[TextbackgroundColor, Textcolor]">{{text}}</p>
  </div>
</template>
<script>
export default {
  props: {
    TextbackgroundColor: {
      type: String,
      required: false
    },
    Textcolor: {
      type: String,
      required: false,
      default: "default"
    },
    text: {
      type: String,
      required: false
    }
  }
};
</script>
<style  scoped>
.pills {
  border-radius: 16px;
  border-radius: 16px;
  padding: 9px 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  color: #6271d2;
  margin-right: 24px;
}
.etcColor {
  color: var(--blue);
}
.etaBg {
  background: #6271d21a;
}
.btcColor {
  color: #d28662;
}
.btcBg {
  background: #d286621a;
}
.default {
  color: #8d99a4;
  background: rgb(141 153 164 / 10%);
  text-transform: none;
}
</style>