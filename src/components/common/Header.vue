<template>
    <div class="header">
        <Top/>
        <Navbar/>
    </div>
</template>
<script>
import Navbar from "@/components/common/Navbar.vue"
import Top from "@/components/common/Top.vue"
import "@/assets/styles/header.css"
export default {
    name: 'header', // eslint-disable-line vue/multi-word-component-names
    components: {
        Navbar,
        Top,
    },
}
</script>
