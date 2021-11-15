<template>
  <div class="home-container">
    <div class="dashboard-container">
      <div class="d-flex section">
        <div class="flex-basis-70 margin-rgiht">
          <b-card>
            <div class="d-flex section">
              <div class="margin-rgiht dash-sec-1">
                <div class="ml-1">
                  <p class="sub-heading m-0 mb-4 desktop">EARNINGS</p>
                  <p class="number m-0">
                    <span style="color: #79828B;">$</span>2878.90
                  </p>
                  <p class="m-0 subtext mb-4">
                    <span style="color:var(--green)">+42</span>
                    since last week
                  </p>
                </div>
                <div>
                  <Pills
                    text="0.9087 ETH"
                    :Textcolor="'etaColor'"
                    :TextbackgroundColor="'etaBg'"
                    class="mb-2"
                  />
                  <Pills
                    class="ml-1"
                    text="0.5 BTC"
                    :Textcolor="'btcColor'"
                    :TextbackgroundColor="'btcBg'"
                  />
                </div>
              </div>
              <div class="dash-sec-2">
                <img src="./../../public/assets/chart.png" width="100%" class="chart" />
                <!-- <chats/> -->
              </div>
            </div>
          </b-card>
        </div>
        <div class="flex-basis-30 mobile-margin-container">
          <b-card>
            <div class="d-flex justify-content-between">
              <div class="rank">
                <subSection
                  class="dashboradsubSection"
                  heading="RANK"
                  subtext="You’re in top"
                  percentNumber="40"
                  number="607"
                  imgSrc="Rank"
                />
              </div>
              <div class="project">
                <subSection
                  class="dashboradsubSection"
                  heading="Project"
                  subtext="You’re in top"
                  percentNumber="40"
                  number="45"
                  imgSrc="code1"
                />
              </div>
            </div>
            <div class="footer-container">
              <p class="sub-heading m-0 mb-3">TOP CATEGORIES</p>
              <div v-for="lang in categories" :key="lang" class="d-inline-block m-1">
                <Pills :text="lang" />
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div class="project-container">
      <section-header :mainText="'Suggested Projects'" :subText="'VIEW ALL PROJECTS'" />
      <div class="d-flex flex-wrap flex-row flex-grow">
        <div
          v-for="(item, index) in projectList"
          :key="index"
          class="flex-grow-1"
          :class="{ 'margin-rgiht margin-left': index == 1 }"
        >
          <b-card>
            <Avtar
              :mainText="item.name"
              :subText="item.last_active_date"
              avatarStyles="mr-2"
              avatarSize="2.5rem"
              mainTextStyles="sub-title--sm text-emphasis--high mb-0"
              subTextStyles="projectsubClass"
              :src="item.avtar"
            />
            <div class="description mt-3">{{ item.description }}</div>
            <div class="footer-container">
              <div class="d-flex justify-content-between">
                <div class="d-flex">
                  <Pills
                    class="ml-1"
                    :text="item.eta"
                    :Textcolor="'etaColor'"
                    :TextbackgroundColor="'etaBg'"
                  />
                  <Pills :text="item.btc" :Textcolor="'btcColor'" :TextbackgroundColor="'btcBg'" />
                </div>
                <div class="currencyprice">
                  <span class="price">{{ item.currency }}</span>
                  <span >{{ item.price }}</span>
                </div>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <div class="ads d-flex section">
      <img src="./../../public/assets/icons/slack.svg" class="logo" />
      <div class="ads-content">
        <p class="adsMainText">{{ adsMainText }}</p>
        <span class="adsSubText">{{ adsSubText }}</span>
      </div>
      <div>
        <b-button class="btn1">REMIND LATER</b-button>
        <b-button class="btn2">JOIN NOW</b-button>
      </div>
    </div>
    <div class="d-flex justify-content-between section">
      <ActiviySection class="activity"/>
      <div class="earning-container mobile-margin-container">
        <section-header :mainText="'Top Earners'" :subText="'VIEW ALL'" />
        <b-card>
          <div class="d-flex justify-content-between">
            <span class="sub-heading">RANKINGS</span>
            <div class="d-flex">
              <span class="activity-time">This Month</span>
              <span class="earn-all">All Time</span>
            </div>
          </div>
          <div v-for="(earners, index) in earnersList" :key="index" class="earners">
            <span class="earner-index">{{ index + 1 }}.</span>
            <Avtar
              :mainText="earners.name"
              :subText="`${earners.currency}${earners.price}`"
              avatarStyles="mr-2"
              avatarSize="3rem"
              subTextStyles="earners"
              :src="earners.avtar"
            />
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import Avtar from "./AvtarText.vue";
import Pills from "./Pills.vue";
import SectionHeader from "./SectionHeader.vue";
import subSection from "./DashboardSubSection.vue";
import ActiviySection from "./HomeActivitySection.vue";
// import Chats from './Chart.vue'
export default {
  data() {
    return {
      categories: ["ruby", "java", "clojure"],
      adsMainText: "Join the conversation on Slack",
      adsSubText:
        "Stay up to date on the latest news and special programs that only take place within the slack channel",
      projectList: [
        {
          name: "Alice Martin",
          last_active_date: "5 hours ago",
          technology: "html",
          description:
            "Design and develop a website for an educational platform focusing on the growth of children.",
          eta: "1.2 ETH",
          btc: "0.3 BTC",
          price: "760",
          avtar: "./../../public/assets/icons/profile1.png",
          currency: "$"
        },
        {
          name: "Alberto Donko",
          last_active_date: "Yesterday, 9:40pm",
          technology: "ruby",
          description:
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
          eta: "3 ETH",
          btc: "1 BTC",
          price: "3360",
          avtar: "./../../public/assets/icons/profile2.png",
          currency: "$"
        },
        {
          name: "Alexander Goe",
          last_active_date: "Yesterday, 2:00pm",
          technology: "ruby",
          description:
            "Scrambled it to make a type specimen book. It has survived not only five centuries.",
          eta: "1 ETH",
          btc: "0.2 BTC",
          price: "620",
          avtar: "./../../public/assets/icons/profile3.png",
          currency: "$"
        }
      ],
      earnersList: [
        {
          name: "Mathew John",
          currency: "$",
          price: "10938.34",
          avtar: "./../../public/assets/icons/profile1.png"
        },
        {
          name: "Daniel Belu",
          currency: "$",
          price: "938.34",
          avtar: "./../../public/assets/icons/profile2.png"
        },
        {
          name: "Elizabeth Kin",
          currency: "$",
          price: "1098.34",
          avtar: "./../../public/assets/icons/profile3.png"
        },
        {
          name: "Arosuh Uyt",
          currency: "$",
          price: "6380.34",
          avtar: "./../../public/assets/icons/profile4.png"
        }
      ]
    };
  },
  components: {
    // Header
    Avtar,
    Pills,
    SectionHeader,
    subSection,
    ActiviySection
    // Chats,
  }
};
</script>
<style scoped>
.desktop {
  display: block;
}
.ml-1 {
  margin-right: 10px;
}
.chart {
  margin-top: -16px;
}
.flex-basis-70 {
  flex-basis: 70%;
}
.flex-basis-30 {
  flex-basis: 30%;
}

.number,
.dashboradsubSection::v-deep .number {
  font-weight: 500;
  font-size: 30px;
  line-height: 45px;
  /* identical to box height */

  letter-spacing: 0.75px;

  color: #42505c;
}
.margin-rgiht {
  margin-right: 30px;
}
.margin-left {
  margin-left: 30px;
}
.earn-all {
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */
  margin-left: 12px;
  color: #6271d2;
}
.sub-heading,
.dashboradsubSection::v-deep .sub-heading {
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height, or 107% */

  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #79828b;
}
.card {
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  /* margin-right: 30px; */
}
.card-body {
  padding: 24px;
}
.footer-container {
  border-top: 1px solid var(--border);
  margin-top: 24px;
  /* margin-bottom: 20px; */
  padding-top: 20px;
}
.description {
  width: 300px;
  font-size: 16px;
  line-height: 28px;
  color: var(--second-primary);
}
.currencyprice ,.activity::v-deep .currencyprice{
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  text-align: right;
}
.price, .activity::v-deep .price {
  color: #79828b;
}
.activity-time , .activity::v-deep .activity-time{
  font-size: 12px;
  line-height: 18px;
  color: #79828b;
}
.ads {
  background: linear-gradient(201.71deg, #8f9df8 -80.88%, #92a0ff 203.65%);
  border-radius: 10px;
  padding: 32px 46px;
  margin-top: 40px;
  margin-bottom: 46px;
}
.adsMainText {
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  /* identical to box height, or 104% */
  margin-bottom: 12px;
  color: #ffffff;
}
.adsSubText {
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.75;
}
.ads-content {
  margin-left: 36px;
  width: 500px;
  margin-right: 60px;
}
.btn1 {
  /* border-color: white; */
  background: linear-gradient(201.71deg, #8f9df8 -80.88%, #92a0ff 203.65%);
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  color: #ffffff;
  border-radius: 10px;
  border: 1px solid #ffffff;
  padding: 15px 24px;
  height: max-content;
  margin-top: 19px;
  margin-right: 24px;
}
.btn2 {
  background: #6574d6;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  color: #ffffff;
  height: max-content;
  padding: 15px 24px;
  margin-top: 19px;
}
.subtext {
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #79828b;
}
.project-container {
  margin-top: 46px;
}



.earning-container {
  flex-basis: 40%;
}
.earners {
  display: flex;
  border-bottom: 1px solid var(--border);
  padding: 20px 0;
  align-items: center;
}
.earners:last-child {
  border-bottom: none;
}
.earner-index {
  font-size: 20px;
  line-height: 26px;
  color: #42505c;
  margin-right: 12px;
}
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
.section {
}
@media (max-width: 900px) {
  .section-flow {
    flex-flow: column;
  }
  .earning-container {
    flex-basis: 100%;
    margin-right: 0;
  }
  .mobile-margin-container {
    margin-top: 30px;
  }
  .section {
    flex-wrap: wrap;
  }
  .margin-rgiht {
    margin: 0;
  }
  .flex-grow-1 {
    width: -webkit-fill-available;
    margin-top: 16px;
  }
  .flex-basis-70,
  .flex-basis-30 {
    flex-basis: 100%;
  }
  .dash-sec-1 {
    order: 2;
    flex-direction: row;
    display: flex;
    margin-top: 25px;
  }
  .dash-sec-2 {
    order: 1;
  }
  .desktop {
    display: none;
  }
  .ads-content {
    margin: 0;
  }
  .logo {
    margin: auto;
    margin-bottom: 30px;
  }
  .ads {
    padding: 32px 16px;
    text-align: center;
  }
  .btn1 {
    padding: 15px 11px;
  }
  .btn-section {
    display: flex;
    margin-top: 10px;
  }
  
}
</style>
