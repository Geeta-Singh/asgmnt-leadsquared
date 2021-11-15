<template>
    <div class="activity-container">
        <section-header :mainText="'Activity'" :subText="'VIEW ALL Activity'" />
        <b-card>
          <span class="sub-heading">RECENT</span>
          <div v-for="(activity, index) in activityList" :key="index">
            <div class="d-flex justify-content-between mt-4 section">
              <div>
                <img
                  :src="activity.type == 'html' ? codeSvg : $Svg"
                  :class="activity.type"
                  class="position-absolute ac-icon"
                />
                <Avtar
                  class="activity-margin"
                  :mainText="activity.name"
                  :subText="activity.activity"
                  avatarStyles="mr-2"
                  avatarSize="2.5rem"
                  subTextStyles="projectsubClass"
                  :src="activity.avtar"
                />
              </div>
              <span class="activity-time">{{ activity.time }}</span>
            </div>
            <div class="d-flex activity-type">
              <Pills
              class="ml-1"
                :text="activity.eth"
                :Textcolor="'etaColor'"
                :TextbackgroundColor="'etaBg'"
                v-if="activity.eth"
              />
              <Pills
                class="ml-1"
                :text="activity.btc"
                :Textcolor="'btcColor'"
                :TextbackgroundColor="'btcBg'"
                v-if="activity.btc"
              />
              <div class="currencyprice">
                <span class="price">{{ activity.currency }}</span>
                <span class="">{{ activity.price }}</span>
              </div>
            </div>
          </div>
        </b-card>
      </div>
</template>
<script>
import Avtar from "./AvtarText.vue";
import Pills from "./Pills.vue";
import codeSvg from "./../../public/assets/icons/code.svg";
import $Svg from "./../../public/assets/icons/$.svg";
import SectionHeader from "./SectionHeader.vue";
export default {
  data() {
    return {
      
      activityList: [
        {
          name: "Daniel Belu",
          activity: "Recieved $760 for a Ruby project.",
          eth: "1.2ETH",
          currency: "$",
          price: "760",
          time: "1 hour ago",
          type: "ruby",
          avtar: "profile4",
          btc: null
        },
        {
          name: "Christophe F. Batista",
          activity: "Received  $620 for an html project.",
          eth: null,
          currency: "$",
          price: "620",
          time: "3 hour ago",
          type: "ruby",
          avtar: "profile2",
          btc: "0.2BTC"
        },
        {
          name: "Alice Martin",
          activity: "Submitted a project in html.",
          eth: null,
          currency: "$",
          price: "760",
          time: "5 hour ago",
          type: "html",
          avtar: "profile3",
          btc: "0.3BTC"
        }
      ],
      
    };
  },
  components: {
    Avtar,
    Pills,
    SectionHeader,
  },
  computed: {
    codeSvg() {
      return codeSvg;
    },
    $Svg() {
      return $Svg;
    }
  }
};
</script>
<style scoped>

.ml-1 {
  margin-right: 10px;
}
.activity-type {
  margin-left: 70px;

  margin-top: 10px;
}
.ac-icon {
  margin-top: 7px;
}

.activity-margin {
  margin-left: 24px;
}


.sub-heading{
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #79828b;
}

/* 
.currencyprice {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: right;
}
.price {
  color: #79828B;
} */
.activity-container {
  flex-basis: 60%;
  margin-right: 30px;
}
/* .activity-time {
  font-size: 12px;
  line-height: 18px;
  color: #79828b;
} */


.html {
  background: #eff0fa;
  border-radius: 50%;
  padding: 1px 5px;
  width: 30px;
  height: 30px;
}
.ruby {
  background: #cff3e3;
  border-radius: 50%;
  padding: 5px 9px;
  height: 30px;
}

@media (max-width: 900px) {
 
  .activity-container {
    flex-basis: 100%;
    margin-right: 0;
  }
  
  .section {
    flex-wrap: wrap;
  }
 
  .activity-time {
    margin-left: 80px;
  }
}
</style>
