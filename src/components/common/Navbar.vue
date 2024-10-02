<template>
    <div class="mainNav" id="mainNav">
        <div class="box_center cf">
            <ul class="nav" id="navModule">
                <li><router-link :to="{ name: '' }">Home</router-link></li>
                <li><router-link :to="{ name: 'bookclass' }">Full</router-link></li>
                <li><router-link :to="{ name: 'bookRank' }">Ranks</router-link></li>
                <li><a @click="goAuthor" href="javascript:void(0)">Tác giả</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "Navbar", // eslint-disable-line vue/multi-word-component-names
}
</script>