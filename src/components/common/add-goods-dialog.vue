<script setup>
// Vue3 Wangeditor 富文本编辑器
// 文档地址：https://www.wangeditor.com/v5/for-frame.html#安装-1
// 引入 css
import '@wangeditor/editor/dist/css/style.css'
import {computed, nextTick, onBeforeUnmount, ref, shallowRef, watch} from "vue";
import {useDocumentWHStore} from "@/stores/data/documentWHStore";
import SkuSingle from "@/components/common/sku-single.vue";
import {ArrowRight, Delete, Share} from "@element-plus/icons-vue";
import {Editor, Toolbar} from "@wangeditor/editor-for-vue";
import ImageCutterDialog from "@/components/common/image-cutter-dialog.vue";

const documentWHStore = useDocumentWHStore()

const props = defineProps(['dialog'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

const drawerWidth = computed(() => documentWHStore.wh.w - 260)

const form = ref({
    shopNo: '',
    shopName: '',
    shopType: [],
    thumbs: [],
    unit: '0',
    skus: [],
    status: '1'
})

const shopType = [
    {
        value: 1,
        label: '笔记本',
    },
    {
        value: 2,
        label: '台式机',
    },
    {
        value: 3,
        label: '电脑组件',
        children: [
            {
                value: 31,
                label: '显示器',
            },
            {
                value: 32,
                label: '主板',
            },
        ],
    },
    {
        value: 4,
        label: '外设产品',
    },
    {
        value: 5,
        label: '电脑组件-2',
        children: [
            {
                value: 51,
                label: '显示器-2-1',
            },
            {
                value: 52,
                label: '主板-2-2',
            },
        ],
    },
    {
        value: 6,
        label: '电脑组件-3',
        children: [
            {
                value: 61,
                label: '显示器-3-1',
            },
            {
                value: 62,
                label: '主板-3-2',
            },
        ],
    },
]

// 初始化sku
const skus = ref([
    // 数据结构：
    {
        name: '',
        price: 0.01,
        delPrice: 0.02,
        count: 99,
    }
])


// 监听skus变化
watch(skus.value, newVal => {
    form.value.skus = newVal
})


// ------- 富文本编辑器 --Start---------------------------------

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p></p>')
// 工具栏配置
const toolbarConfig = {
    toolbarKeys: [
        'headerSelect',
        '|',
        'bold', 'italic', "through", 'underline', 'color', 'bgColor', 'fontSize', "blockquote",
        '|',
        "insertTable",
        'uploadImage'
    ]
}
// 编辑区配置
const editorConfig = {
    placeholder: '请输入内容...',
    scroll: false,
    MENU_CONF: {
        uploadImage: {
            // 小于该值就插入 base64 格式（而不上传），默认为 0
            base64LimitSize: 5 * 1024, // 5kb
            async customUpload(file, insertFn) {
                // file 即选中的文件
                imgUpload(file, (src) => {
                    // 自己实现上传，并得到图片 url alt href
                    // 最后插入图片
                    insertFn(src, '', 'javascript:(0);')
                })
            }
        }
    },
    hoverbarKeys: {
        'image': {
            // 清空 image 元素的 hoverbar
            menuKeys: [],
        }
    }
}


/**
 * 图片上传
 * @param file 选择的文件
 * @param cb 回调
 */
const imgUpload = (file, cb) => {
    // 文件大小限制，1M
    let maxFileSize = 1 * 1024 * 1024
    console.log(file)
    if (file.size > maxFileSize) {
        ElMessage.error("单张图片不能大于1M！");
        return;
    }
    cb('https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg');
}


/**
 * 记录 editor 实例，重要！
 * @param editor
 */
const handleCreated = (editor) => {
    editorRef.value = editor
    // console.log(editor.getAllMenuKeys())
}

// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})
// ------- 富文本编辑器 --End---------------------------------

// 商品标签
const dynamicTags = ref([])
const inputValue = ref('')
const inputVisible = ref(false)

const inputRef = ref(null); // 创建一个ref来引用el-input

/**
 * 删除Tag
 * @param tag
 */
const handleCloseTag = tag => {
    dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

/**
 * 添加Tag
 */
const handleInputTagConfirm = () => {
    if (inputValue.value) {
        dynamicTags.value.push(inputValue.value)
    }
    inputVisible.value = false
    inputValue.value = ''
}

/**
 * 显示添加Tag
 */
const showInput = () => {
    inputVisible.value = true
    nextTick(() => {
        if (inputRef.value) {
            inputRef.value.focus()
        }
    })
}

// ----------- 添加商品图片 --Start-----------------------
const images = ref([])
const isShowChooseShopImgCutImgDialog = ref({show: false})

let imageId = 0;
const chooseShopImgCutImgCallback = (e) => {
    imageId++
    form.value.thumbs.push({
        id: imageId,
        src: e.dataURL
    })

    // 验证表单字段，把error隐藏掉
    formRef.value.validateField('thumbs')
}

const openChooseShopImgCutImgDialog = () => {
    isShowChooseShopImgCutImgDialog.value.show = true
}

// ----------- 添加商品图片 --End-----------------------

const units = ref([
    {
        label: '天',
        value: '0',
        disabled: false
    },
    {
        label: '月',
        value: '1',
        disabled: true
    },
    {
        label: '小时',
        value: '2',
        disabled: true
    },
])

// ----------- 商品预览 --Start-----------------------
const preViewWidth = 400;
const carouselHeight = (preViewWidth - 40) * 0.7;

// ----------- 商品预览 --End-----------------------

const validateSkus = (rule, value, callback) => {
    let validated = true;
    if(value.length === 0) {
        validated = false;
    }else{
        for(let i = 0; i < value.length; i++) {
            if (value[i].name === ''
                || value[i].price === null
                || value[i].delPrice === null
                || value[i].count === null) {
                validated = false;
                break;
            }
        }
    }

    if (!validated) {
        callback(new Error('请完善规格信息！'));
    } else {
        console.log("规格验证通过")
        callback();
    }
}

const formRules = ref({
    shopNo: [
        {required: true, message: '编号不能为空！', trigger: 'blur'}
    ],
    shopName: [
        {required: true, message: '商品名称不能为空！', trigger: 'blur'},
        {min: 8, max: 40, message: '长度在 8 到 40 个字符', trigger: 'blur'}
        // 其他验证规则
    ],
    thumbs: [
        {required: true, message: '商品图不能为空，请选择商品图！', trigger: 'change'},
    ],
    shopType: [
        {required: true, message: '请选择商品分类', trigger: 'change'}
    ],
    unit: [
        {required: true, message: '请选择价格单位', trigger: 'change'}
    ],
    skus: [
        {required: true, validator: validateSkus, trigger: 'blur'}
    ],
    status: [
        {required: true, message: '请选择状态', trigger: 'change'}
    ]
});

const formRef = ref(null)

/**
 * 保存商品信息
 */
const onConfirm = async () => {
    try {
        await formRef.value.validate();
        console.log("表单验证通过")
    } catch (error) {
        // 表单验证未通过，不执行提交操作
        console.log('表单验证未通过');
    }
}

/**
 * 删除sku事件
 */
const skuDelEvent = () => {
    // sku数据行发生变化，重新验证
    formRef.value.validateField('skus')
}


</script>

<template>
    <div class="vel_cpt_panel_drawer_add_goods">
        <el-drawer v-model="dialog.show" :size="drawerWidth" direction="rtl" class="vel_drawer_override">
            <template #header>
                <h4>添加商品</h4>
            </template>
            <template #default>
                <el-scrollbar>
                    <div class="dialog_con">
                        <div class="page_left" :style="{width:preViewWidth + 'px', minWidth:preViewWidth + 'px'}">
                            <div class="page_left_con">
                                <div class="preview">
                                    <div class="preview_con">
                                        <el-scrollbar>
                                            <div class="shop_carousel_list">
                                                <el-carousel :height="carouselHeight + 'px'">
                                                    <el-carousel-item v-for="img in form.thumbs" :key="img.id">
                                                        <el-image :src="img.src" fit="fill" style="width: 100%"/>
                                                    </el-carousel-item>
                                                </el-carousel>
                                            </div>
                                            <div class="shop_info_panel">
                                                <div class="tit_panel">
                                                    <div class="tit_item price">
                                                    <span class="price_real">
                                                        <el-text>￥</el-text>
                                                        <el-text style="font-size: 22px" tag="b">{{ skus[0].price }}</el-text>
                                                        <el-text>/{{ units[0].label }}</el-text>
                                                    </span>
                                                        <el-text type="info" tag="del" size="small">￥{{
                                                                skus[0].delPrice
                                                            }}/{{ units[0].label }}
                                                        </el-text>
                                                    </div>
                                                    <div class="tit_item tit">
                                                        <el-text class="txt" tag="b">
                                                            {{ form.shopName }}
                                                        </el-text>
                                                        <div class="share">
                                                            <div class="share_con">
                                                                <el-icon>
                                                                    <Share/>
                                                                </el-icon>
                                                                <el-text size="small">分享</el-text>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="form.desc !== ''" class="tit_item desc">
                                                        <el-text type="info" size="small">{{ form.desc }}</el-text>
                                                    </div>
                                                    <div v-if="dynamicTags.length > 0" class="tit_item tags">
                                                        <el-tag v-for="tag in dynamicTags" :key="tag" type="danger" size="small"
                                                                effect="plain">{{ tag }}
                                                        </el-tag>
                                                    </div>
                                                </div>
                                                <div class="sku_panel">
                                                    <div style="padding-bottom: 10px">
                                                        <el-text tag="b">规格</el-text>
                                                    </div>
                                                    <div class="sku_info">
                                                        <el-text class="sku_name" type="info"
                                                                 size="small">
                                                            {{ skus[0].name }}
                                                        </el-text>
                                                        <div class="sku_right">
                                                            <el-text class="sku_num" type="info">x1</el-text>
                                                            <div class="choose_more_arrow">
                                                                <el-icon>
                                                                    <ArrowRight/>
                                                                </el-icon>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="choose_time_panel">
                                                    <div style="padding-bottom: 10px">
                                                        <el-text tag="b">租赁周期</el-text>
                                                    </div>
                                                    <div class="time_panel">
                                                        <el-steps direction="vertical" :active="1" :space="40">
                                                            <el-step status="wait">
                                                                <template #description>
                                                                    开始时间 : 2023-11-26
                                                                </template>
                                                            </el-step>
                                                            <el-step status="wait">
                                                                <template #description>
                                                                    结束时间 : 2023-11-26
                                                                </template>
                                                            </el-step>
                                                        </el-steps>
                                                        <div class="choose_more_arrow">
                                                            <el-icon>
                                                                <ArrowRight/>
                                                            </el-icon>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="detail_panel">
                                                    <el-tabs :model="0">
                                                        <el-tab-pane label="商品详情" class="goods_detail">
                                                            <div v-html="valueHtml"></div>
                                                        </el-tab-pane>
                                                        <el-tab-pane label="租赁流程">Config</el-tab-pane>
                                                    </el-tabs>
                                                </div>
                                            </div>
                                        </el-scrollbar>
                                    </div>
                                    <div class="preview_publish">
                                        <el-button type="primary" size="large" @click="onConfirm">保存
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_right" :style="{width:drawerWidth - preViewWidth + 'px'}">
                            <div class="page_right_con">
                                <el-card shadow="never" class="vel_card_override">
                                    <div class="add_goods_panel">
                                        <el-scrollbar>
                                            <el-form :model="form" ref="formRef" :rules="formRules" label-width="120px">
                                                <el-form-item label="商品编号" prop="shopNo" style="padding-top: 20px">
                                                    <el-input v-model="form.shopNo" clearable style="width: 150px"/>
                                                </el-form-item>
                                                <el-form-item label="商品名称" prop="shopName">
                                                    <el-input v-model="form.shopName" clearable style="width: 400px"/>
                                                </el-form-item>
                                                <el-form-item label="促销信息">
                                                    <el-input
                                                        v-model="form.desc"
                                                        :autosize="{ minRows: 2, maxRows: 4 }"
                                                        type="textarea"
                                                        placeholder="请输入简短的描述信息，100个字符以内！"
                                                    />
                                                </el-form-item>
                                                <el-form-item label="商品图" prop="thumbs" class="shop_images">
                                                    <div class="shop_thumbs">
                                                        <div class="shop_img_list" v-for="img in form.thumbs" :key="img.id">
                                                            <el-image class="shop_img" :src="img.src" fit="fill"/>
                                                            <span class="mask">
                                                        <el-icon>
                                                            <Delete/>
                                                        </el-icon>
                                                    </span>
                                                        </div>
                                                        <div v-if="form.thumbs.length < 7" class="el-upload--picture-card"
                                                             @click="openChooseShopImgCutImgDialog">
                                                            <el-icon>
                                                                <Plus/>
                                                            </el-icon>
                                                        </div>
                                                    </div>
                                                </el-form-item>
                                                <el-form-item class="shop_tags" label="商品标签">
                                                    <el-tag
                                                        v-for="tag in dynamicTags"
                                                        :key="tag"
                                                        size="large"
                                                        closable
                                                        :disable-transitions="false"
                                                        @close="handleCloseTag(tag)">
                                                        {{ tag }}
                                                    </el-tag>
                                                    <el-input
                                                        v-if="inputVisible"
                                                        v-model="inputValue"
                                                        size="default"
                                                        ref="inputRef"
                                                        @keyup.enter="handleInputTagConfirm"
                                                        @blur="handleInputTagConfirm"
                                                        style="width: 100px"
                                                    />
                                                    <el-button v-else size="default" @click="showInput">
                                                        + 添加标签
                                                    </el-button>
                                                </el-form-item>
                                                <el-form-item label="商品分类" prop="shopType">
                                                    <el-cascader
                                                        :props="{expandTrigger:'hover'}"
                                                        :options="shopType"
                                                        size="default"
                                                        v-model="form.shopType" clearable placeholder="选择分类"/>
                                                </el-form-item>
                                                <el-form-item label="规格" prop="skus" class="sku_panel">
                                                    <sku-single :skus="skus" @onDelSkuRow="skuDelEvent"></sku-single>
                                                </el-form-item>
                                                <el-form-item label="价格单位" prop="unit">
                                                    <el-select v-model="form.unit" size="default" clearable
                                                               placeholder="选择单位">
                                                        <template v-for="option in units" :key="option.value">
                                                            <el-option :label="option.label" :value="option.value"
                                                                       :disabled="option.disabled"/>
                                                        </template>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="状态" prop="status">
                                                    <el-select v-model="form.status" clearable size="default"
                                                               placeholder="选择状态">
                                                        <el-option label="已上架" value="0"/>
                                                        <el-option label="待上架" value="1"/>
                                                        <el-option label="已下架" value="2"/>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="商品描述">
                                                    <div class="shop_editor" :style="{maxWidth:drawerWidth - preViewWidth - 200 + 'px'}">
                                                        <Toolbar
                                                            style="border-bottom: 1px solid #e0e0e0"
                                                            :editor="editorRef"
                                                            :defaultConfig="toolbarConfig"
                                                            mode="simple"
                                                        />
                                                        <Editor
                                                            style="min-height:400px;overflow-y: hidden;"
                                                            v-model="valueHtml"
                                                            :defaultConfig="editorConfig"
                                                            mode="simple"
                                                            @onCreated="handleCreated"
                                                        />
                                                    </div>
                                                </el-form-item>
                                            </el-form>
                                        </el-scrollbar>
                                    </div>
                                </el-card>
                            </div>
                        </div>
                        <image-cutter-dialog :dialog="isShowChooseShopImgCutImgDialog"
                                             @onConfirm="chooseShopImgCutImgCallback"
                                             :cut-width="300"
                                             :cut-height="210"></image-cutter-dialog>
                    </div>
                </el-scrollbar>
            </template>
        </el-drawer>
    </div>
</template>

<style scoped>

.vel_cpt_panel_drawer_add_goods :deep(.vel_drawer_override) .el-drawer__header {
    margin-bottom: 0;
}

.vel_cpt_panel_drawer_add_goods :deep(.vel_drawer_override) .el-drawer__body {
    padding: 0;
}

:deep(.vel_drawer_override) {
    background-color: #f6f8f9;
}

.dialog_con {
    height: calc(100vh - 40px);
    display: flex;
}

.page_left {
}

.page_left_con{
    padding: 20px;
}

.page_left_con .preview_con {
    background-color: #ffffff;
    height: calc(100vh - 40px - 20px - 20px - 60px);
    overflow: hidden;
    border-radius: 4px 4px 0 0;
}

.page_left_con .preview_publish {
    padding: 20px 0 0 0;
    display: flex;
    align-items: center;
}

.page_left_con .preview_publish .el-button {
    width: 100%;
}

.page_right {
}

.page_right_con{
    padding: 20px 20px 20px 0;
}

.shop_carousel_list .el-carousel {
    background-color: #f0f2f5;
}

:deep(.shop_carousel_list) .el-carousel__indicators--horizontal {
    width: 100%;
    display: flex;
    justify-content: center;
    transform: none;
    left: 0;
}

.shop_info_panel {
    background-color: #f0f2f5;
}

.tit_panel,
.shop_info_panel .sku_panel,
.choose_time_panel,
.detail_panel {
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
}

.tit_item:not(:last-child) {
    padding-bottom: 10px;
}

.tit_item.tags{
    display: flex;
    flex-wrap: wrap;
}

.tit_item.tags .el-tag {
    margin-right: 5px;
    margin-bottom: 3px;
}

.price .price_real {
    padding-right: 7px;
}

.price .el-text {
    color: red;
}

.tit_panel .tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tit .txt {
    flex-grow: 1;
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

.tit .share{
    min-width: 50px;
}

.tit .share_con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.tit_item.desc{
    display: flex;
}

.tit_item.desc .el-text{
    flex-grow: 1;
}

.sku_panel .sku_info {
    display: flex;
    justify-content: space-between;
}

.sku_info .sku_name {
    flex-grow: 1;
    overflow: hidden; /* 超出部分隐藏 */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* 设置行数 */
}

.sku_right{
    display: flex;
}

.sku_right .sku_num {
    width: 40px;
    text-align: center;
}

.sku_right .choose_more_arrow {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

:deep(.choose_time_panel) .el-step:last-child {
    flex-basis: 0 !important;
}

.choose_time_panel .time_panel {
    display: flex;
}

.choose_time_panel .el-steps {
    flex-grow: 1;
}

.choose_time_panel .choose_more_arrow {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

:deep(.detail_panel) .el-tab-pane img {
    width: 100% !important;
    height: auto !important;
    vertical-align: bottom;
}

:deep(.goods_detail) p{
    word-wrap: break-word;
    white-space: pre-wrap;
}

:deep(.goods_detail) table {
    border-collapse: collapse;
}

:deep(.goods_detail) table th {
    background-color: #f5f2f0;
    padding: 5px 5px;
    border: 1px solid #b2b2b2;
}

:deep(.goods_detail) table td {
    padding: 5px 5px;
    border: 1px solid #b2b2b2;
    text-align: center;
}


:deep(.vel_card_override) .el-card__body {
    padding: 0;
}

.add_goods_panel {
    height: calc(100vh - 40px - 20px - 20px - 2px);
    overflow: hidden;
}

.add_goods_panel .el-form-item {
    padding-right: 20px;
}

.add_goods_panel .shop_images, .add_goods_panel .sku_panel {
    background-color: #f8faff;
}

.add_goods_panel .shop_thumbs {
    padding: 10px 0 10px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.shop_img_list {
    width: 120px;
    height: 84px;
    border-radius: 5px;
    border: 1px solid #efefef;
    position: relative;
}

.shop_img_list .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    cursor: default;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    opacity: 0;
    font-size: 20px;
    background-color: var(--el-overlay-color-lighter);
    transition: opacity var(--el-transition-duration);
}

.shop_img_list .mask:hover {
    cursor: pointer;
    opacity: 1;
    border-radius: 5px;
}

.shop_img {
    border-radius: 5px;
    width: 120px;
    height: 84px;
}

.shop_images .el-upload--picture-card {
    --el-upload-picture-card-size: 84px;
}

.shop_tags .el-tag,
.shop_tags .el-button,
.shop_tags .el-input {
    margin-right: 5px;
    margin-bottom: 3px;
}

:deep(.vel_card_override) .el-form-item .no_error .el-input__wrapper {
    box-shadow: 0 0 0 1px var(--el-border-color) inset;
}

:deep(.vel_card_override) .el-form-item .no_error .el-input__wrapper.is-focus {
    box-shadow: 0 0 0 1px var(--el-border-color) inset !important;
}

.shop_editor {
    border: 1px solid #e9eaef;
    line-height: normal;
}


</style>