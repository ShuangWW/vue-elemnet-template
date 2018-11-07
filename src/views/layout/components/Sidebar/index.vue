<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <p class="stage-title">综合管理平台</p>
        <el-menu :show-timeout="200" :default-active="$route.path" :collapse="isCollapse" mode="vertical" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">            
            <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
    components: { SidebarItem },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        routes() {
            return this.$router.options.routes
        },
        isCollapse() {
            return !this.sidebar.opened
        }
    }
}
</script>
<style lang="scss" scoped>
.stage-title{
    margin: 0;
    font-size:16px;
    text-align:center;
    color:#bfcbd9;
    background-color:#304156;
    height: 50px;
    line-height: 50px;
}
</style>

