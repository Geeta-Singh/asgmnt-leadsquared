<template>
  <div>
    <b-navbar variant="faded" type="light" class>
      <b-navbar-nav class>
        <b-nav-item v-for="item in itemList" :key="item.name" class>
          <router-link :to="item.navigate">{{item.name}}</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
        { name: "Home", navigate: "home" },
        { name: "My Project", navigate: "project" },
        { name: "Payments", navigate: "payments" },
        { name: "Activity", navigate: "activity" },
        { name: "Settings", navigate: "settings" }
      ]
    };
  },
  mounted() {
    if (this.$router.currentRoute.path == "/") {
      this.$router.push({ name: "Home" }).catch(e => {
        console.log(e);
      });
    }
  }
};
</script>
<style  scoped>
.router-link-active {
  color: white;
  font-weight: 600;
  /* border-bottom: 3
px
 solid white; */
  background: #74b4ee87;
  /* mix-blend-mode: normal; */
  /* opacity: 0.15; */
  border-radius: 17px;
  padding: 5px 15px;
}
a:hover {
  color: white;
  text-decoration: none;
}
li a {
  font-weight: 500;
  padding-bottom: 22px;
  padding-top: 18px;
  text-decoration: none;
  font-family: "Poppins";
  font-size: 18px;
  line-height: 15px;
  letter-spacing: 0.25px;
  color: #ffffff;
  mix-blend-mode: normal;
  /* /* opacity: 0.9; */
}
.navbar {
  margin-left: -9px;
}

/* .mr-30 {
  margin-right: 21px;
}
.ml {
  margin-left: -10px;
}

.ml-11 {
  margin-left: 11px;
} */

/* .navbar-nav .profile:hover .displayProfileDetail {
  visibility: visible;
  opacity: 1;
  filter: alpha(opacity=100);
}

.navbar-nav .profile .displayProfileDetail {
  visibility: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: 200ms ease-in-out 100ms;
  -moz-transition: 200ms ease-in-out 100ms;
  -o-transition: 200ms ease-in-out 100ms;
  transition: 200ms ease-in-out 100ms;
} */

.displayProfileDetail {
  z-index: 1000;
  position: absolute;
  top: 63px;
  /* left: -30px; */
  width: 200px;
  background-color: var(--white);
  box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 6px 6px;
  /* padding: 20px 12px; */
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  right: 0;
}
@media (max-width: 1024px) {
  .displayProfileDetail {
    right: 0;
  }
}
.view-profile {
  color: var(--menu-selected);
}
.logout {
  color: var(--customer-name);
}
.go-to-livspace {
  color: #26273d;
}
.logout-section {
  border-bottom: 1px solid #d9d6d8;
}
.profile-pd {
  padding: 12px 12px;
}
.livspace-section {
  padding-bottom: 20px;
}
</style>