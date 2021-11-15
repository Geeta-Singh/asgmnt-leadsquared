<template>
  <div>
    <p class="sub-heading m-0 mb-3">{{heading}}</p>
    <img :src="`${imgSrc=='Rank'?rank:html}`" fill="#ffffff" class="dashboard-icon" />
    <span class="number">{{number}}</span>
    <p class="m-0 subtext">
      {{subtext}}
      <span style="color:var(--green)">{{percentNumber}}%</span>
    </p>
  </div>
</template>
<script>
import rankSvg from './../../public/assets/icons/Rank.svg'
import codeSvg from './../../public/assets/icons/code1.svg'
export default {
    props:{
        heading:String,
        number:String,
        subtext:String,
        percentNumber:String,
        imgSrc:String
    },
    computed:{
        rank(){
            return rankSvg;
        },
        html(){
            return codeSvg;
        }

    }
}
</script>
<style lang="scss" scoped>
.dashboard-icon {
  width: 30px;
  height: 30px;
  background: #6271d2;
  border-radius: 50%;
  padding: 8px;
  margin-right: 8px;
  margin-top: -13px;
}

.subtext {
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #79828b;
}
</style>
    

