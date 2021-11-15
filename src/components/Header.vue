<template>
  <div>
    <div class="d-flex justify-content-between">
      <div class="d-flex">
        <img class="mobile logo" src="./../../public/assets/menu.svg" />
        <img src="./../../public/assets/logomark.svg" class="logo" />
        <p class="logo-heading desktop">
          <span class="font">Dash</span>
          <span class="opt">Elements</span>
        </p>
      </div>
      <div class="d-flex">
        <div class="desktop">
          <img class="noty-ball" src="./../../public/assets/icons/notification.svg" />
          <span class="notification">{{count}}</span>
        </div>
        <p class="customer-name">{{customerNAme}}</p>
        <b-button class="btn">
          <img src="./../../public/assets/icons/chevron.svg" class="more" />
        </b-button>
        <!-- <b-button>v</b-button> -->
        <!-- <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-10">
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>-->
      </div>
    </div>
    <div>
      <Menu class="desktop" />
    </div>
  </div>
</template>
<script>
import Menu from "./MainMenu.vue";
export default {
  data() {
    return {
      customerNAme: "Alex Deo",
      count: 3
    };
  },
  components: {
    Menu
  }
};
</script>
<style scoped>
.customer-name {
  margin: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 0.25px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.9;
  margin-right: 8px;
  margin-left: 40px;
}
.btn {
  width: 16px;

  height: 20px;

  background: blue;
  border-radius: 50%;
  background: #5a6abc;
  border: none;
}
.more {
  margin-top: -16px;

  margin-left: -4px;
}
.m-10 {
  margin-top: -11px;
  margin-left: 24px;
}
.logo {
  width: 26px;
  margin-top: -11px;
  margin-right: 16px;
}
.logo-heading {
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: white;
}
.font {
  font-weight: 500;
}
.opt {
  opacity: 0.5;
}
.desktop {
  display: block;
}
.mobile {
  display: none;
}
.notification {
  position: absolute;
  /* left: 77.5%; */
  /* right: 20.83%; */
  /* top: 1.69%; */
  /* bottom: 96.8%; */
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  top: -22px;
  margin-left: -10px;
  border-radius: 50%;
  padding: 3px 9px;
  color: white;
  font-weight: 600;
}

@media (max-width: 786px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>