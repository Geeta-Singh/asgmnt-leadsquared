<template>
    <div class="container content">
        <Header/>
        <div class="detail-container">
             <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Header from "./Header.vue"
export default {
    components:{
        Header
    }
}
</script>
<style  scoped>
.content{
     position: absolute;
    left: 0%;
    right: 0%;
    bottom: 0%;
    top:40px;
}
@media (max-width:900px) {
    .detail-container{
    margin-top: 30px;
}
}

</style>