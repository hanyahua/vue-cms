<template>
    <div>
        <div class="swipe-container">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="item in lunboList" :key="item.url">
                    <img :src="item.img">
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui';
import { Toast } from 'mint-ui'
import axios from "axios";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    data: function() {
        return {
            lunboList: [
                {
                    img: 'http://i3.img.969g.com/down/imgx2013/09/29/255_133732_efb8a.jpg',
                    url: 'www.baidu.com'
                },
                {
                    img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535302313498&di=74f06e2c8bb689c0af715104946b6971&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201211%2F29%2F20121129220437_uYxQY.jpeg',
                    url: 'www.bing.com'
                }
            ]
        }
    },
    created() {
        //this.getLunbotu()
    },
    methods: {
        getLunbotu: function() {
            axios.get('http://vue.studyit.io/api/getlunbo').then(result => {
                if(result.body.status == 0) {
                    this.lunboList = result.body.message;
                } else {
                    Toast("加载图片失败。。。");
                }
            })
        }
    }
}
</script>
<style scoped>
.swipe-container {
    height: 200px;
}
.swipe-container img{
 width:auto;
 height:auto;
 max-width:100%;
}
</style>

