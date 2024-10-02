<template>
    <div class="topMain">
        <div class="box_center cf">
            <router-link :to="{ name: '' }" class="logo fl">
                <img src="@/assets/images/logo.png" alt="logo"/>
            </router-link>
            <div class="searchBar fl">
                <div class="search cf">
                    <input v-model="keyword" type="text" placeholder="Tên truyện, tác giả, từ khóa" class="s_int" v-on:keyup.enter="searchByK"/>
                    <label class="search_btn" id="btnSearch" @click="searchByK()">
                        <i class="icon"></i>
                    </label>
                </div>
            </div>

            <div class="bookShelf fr" id="headerUserInfo">
                <span v-if="!token" class="user_link">
                    <router-link :to="{ name: 'login' }" class="mr15">Đăng nhập</router-link>
                    <router-link :to="{ name: 'register' }" class="mr15">Đăng ký</router-link>
                </span>
                <span v-if="token" class="user_link">
                    <router-link :to="{name:'userSetup'}" class="mr15">{{ nickName }}</router-link>
                    <a @click="logout" href="javascript:void(0)">Thoát</a>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs} from "vue";
import { useRouter, useRoute } from "vue-router";
import { getToken, getNickName, removeToken, removeNickName,removeUid } from "@/utils/auth";
import logo from "@/assets/images/logo.png";
export default {
    name: "Top", // eslint-disable-line vue/multi-word-component-names
    setup(props, context) {
        const state = reactive({
            keyword: "",
            nickName: getNickName(),
            token: getToken(),
        });
        state.nickName = getNickName();
        state.token = getToken();
        const route = useRoute();
        const router = useRouter();
        state.keyword = route.query.key;

        const searchByK = () => {
            router.push({ path: "/bookclass", query: { key: state.keyword } });
            context.emit("eventSerch", state.keyword);
        };

        const logout = () => {
            removeToken();
            removeNickName();
            removeUid()
            state.nickName = "";
            state.token = "";
        };

        return {
            ...toRefs(state),
            logo,
            searchByK,
            logout,
        };
    },
}
</script>
