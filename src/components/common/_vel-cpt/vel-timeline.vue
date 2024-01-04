<script setup>
// 定义传入参数
const props = defineProps(['timelines'])
// lists 数据结构：
// ```
// [
//     {
//         id: '',
//         isActive: true,
//         data: '',
//         time: '',
//         title: '',
//         desc: ''
//     }
// ]
// ```

</script>

<template>
    <ul class="vel_timeline">
        <li class="vel_timeline_item" :class="item.isActive ? 'is-active' : ''" v-for="(item, index) in timelines" :key="item.id">
            <div class="vel_timeline_item_left">
                <p>{{item.data}}</p>
                <p>{{item.time}}</p>
            </div>
            <div class="vel_timeline_item_mid">
                <span></span>
            </div>
            <div class="vel_timeline_item_right">
                <div class="vel_timeline_item_tit">{{item.title}}</div>
                <div class="vel_timeline_item_desc">{{item.desc}}</div>
            </div>
        </li>
    </ul>
</template>

<style scoped>
.vel_timeline{

}
.vel_timeline_item{
    position: relative;
    display: flex;
}
.vel_timeline_item_left{
    width: 110px;
}
.vel_timeline_item_left p{
    padding-right: 30px;
    text-align: right;
}
.vel_timeline_item_left p:last-child{
    color: #b1b3b8;
}
.vel_timeline_item_mid{
    position: absolute;
    left: 100px;
    z-index: 1;
}
.vel_timeline_item_mid{
    background-color: #f8e3c5;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
.vel_timeline_item_mid span{
    width: 40%;
    height: 40%;
    border-radius: 50%;
    background-color: #ffffff;
}
.vel_timeline_item_right{
    padding-left: 30px;
    border-left: 1px solid #f8e3c5;
    padding-bottom: 30px;
    flex: 1;
}
.vel_timeline_item:last-child .vel_timeline_item_right{
    border-left: 1px solid #ffffff;
    padding-bottom: 0;
}
.vel_timeline_item_desc{
    color: #b1b3b8;
}
.vel_timeline_item.is-active .vel_timeline_item_mid{
    background-color: #E6A23C;
}
</style>