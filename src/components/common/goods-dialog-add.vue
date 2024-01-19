<script setup>
import {nextTick, onMounted, ref} from "vue";
import usrSkuSingle from "@/components/common/_usr-cpt/usr-sku-single.vue";
import {Delete, Plus, Warning} from "@element-plus/icons-vue";
import usrImageCutterDialog from "@/components/common/_usr-cpt/usr-image-cutter-dialog.vue";
import cacheUtil from "@/utils/CacheUtil";
import usrEditor from "@/components/common/_usr-cpt/usr-editor.vue";
import Preview_shop from "@/components/common/preview-shop.vue";

const props = defineProps(['dialog'])
// 定义抛出事件
const emit = defineEmits(['onConfirm'])

// 预览宽度
const preViewWidth = ref(400);
// 商品表单
const formRef = ref(null)

// 商品表单信息
const shopInfo = ref({
    shopNo: '',
    shopName: '',
    shopDesc:'',
    tags:[],
    shopType: [],
    thumbs: [],
    unit: '0',
    skus: [{
        name: '',
        price: null,
        delPrice: null,
        count: null,
    }],
    status: '1',
    shopDetail: {val: '<p></p>'},
})

// 商品单位
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

onMounted(() => {
    // 初始化商品分类
    initShopType()
})

// region -------------------- 商品分类 --------------------
const shopType = ref([])

/**
 * 初始化商品分类
 */
const initShopType = () => {
    cacheUtil.getShopTypeExcludeDisabled().then(res => {
        shopType.value.push(...res)
    }).catch(err => {
        console.error(err)
    })
}
// endregion

// region -------------------- 商品标签 --------------------
// 商品标签
const tagInputValue = ref('')
const tagInputVisible = ref(false)
const tagInputRef = ref(null);

/**
 * 删除Tag
 * @param tag
 */
const handleCloseTag = tag => {
    shopInfo.value.tags.splice(shopInfo.value.tags.indexOf(tag), 1)
}

/**
 * 添加Tag
 */
const handleInputTagConfirm = () => {
    if (shopInfo.value.tags) {
        shopInfo.value.tags.push(tagInputValue.value)
    }
    tagInputVisible.value = false
    tagInputValue.value = ''
}

/**
 * 显示添加Tag
 */
const showTagInput = () => {
    tagInputVisible.value = true
    nextTick(() => {
        if (tagInputRef.value) {
            tagInputRef.value.focus()
        }
    })
}
// endregion

// region -------------------- 商品图片 --------------------
const isShowChooseShopImgCutImgDialog = ref({show: false})
// 图片序号
let imageId = 0;

/**
 * 图片裁剪回调
 */
const chooseShopImgCutImgCallback = (e) => {
    imageId++
    shopInfo.value.thumbs.push({
        id: imageId,
        src: e.dataURL
    })

    // 验证表单字段，把error隐藏掉
    formRef.value.validateField('thumbs')
}

/**
 * 打开图片裁剪弹框
 */
const openChooseShopImgCutImgDialog = () => {
    isShowChooseShopImgCutImgDialog.value.show = true
}
// endregion

// region -------------------- 商品规格 --------------------

/**
 * 删除sku事件
 */
const skuDelEvent = () => {
    // sku数据行发生变化，重新验证
    formRef.value.validateField('skus')
}
// endregion

// region -------------------- 验证表单 --------------------

/**
 * 验证规格
 */
const validateSkus = (rule, value, callback) => {
    let validated = true;
    if (value.length === 0) {
        validated = false;
    } else {
        for (let i = 0; i < value.length; i++) {
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

/**
 * 表单验证规则
 */
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
// endregion


/**
 * 保存商品信息
 */
const onConfirm = async () => {
    try {
        await formRef.value.validate();
        console.log("表单验证通过")
        emit('onConfirm', shopInfo.value)
    } catch (error) {
        // 表单验证未通过，不执行提交操作
        console.log('表单验证未通过');
    }
}

</script>

<template>
    <div class="usr_cpt_panel_drawer_add_goods">
        <el-drawer v-model="dialog.show" size="80%" direction="rtl" class="usr_drawer_override">
            <template #header>
                <h4>添加商品</h4>
            </template>
            <template #default>
                <el-scrollbar>
                    <div class="dialog_con">
                        <div class="page_left" :style="{width:preViewWidth + 'px', minWidth:preViewWidth + 'px'}">
                            <div class="page_left_con">
                                <div class="preview">
                                    <preview_shop :pre-view-width="400" :shop-info="shopInfo"></preview_shop>
                                    <div class="preview_publish">
                                        <el-button type="primary" size="large" @click="onConfirm">保存
                                        </el-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="page_right" style="flex: 1">
                            <div class="page_right_con">
                                <el-card shadow="never" class="usr_card_override">
                                    <div class="add_goods_panel">
                                        <el-scrollbar>
                                            <el-form :model="shopInfo" ref="formRef" :rules="formRules" label-width="120px">
                                                <el-form-item label="商品编号" prop="shopNo" style="padding-top: 20px"
                                                              class="shop_no">
                                                    <el-input v-model="shopInfo.shopNo" placeholder="如：#123456" clearable
                                                              style="width: 150px"/>
                                                    <el-tooltip
                                                        content="商品编号为商品唯一标识，和其他商品不能重复！">
                                                        <el-icon :size="18" color="#b1b3b8">
                                                            <Warning/>
                                                        </el-icon>
                                                    </el-tooltip>
                                                </el-form-item>
                                                <el-form-item label="商品名称" prop="shopName">
                                                    <el-input v-model="shopInfo.shopName" clearable style="width: 400px"/>
                                                </el-form-item>
                                                <el-form-item label="促销信息">
                                                    <el-input
                                                        v-model="shopInfo.shopDesc"
                                                        :autosize="{ minRows: 2, maxRows: 4 }"
                                                        type="textarea"
                                                        maxlength="100"
                                                        show-word-limit
                                                        placeholder="请输入简短的描述信息，100个字符以内！"
                                                    />
                                                </el-form-item>
                                                <el-form-item label="商品图" prop="thumbs" class="shop_images">
                                                    <div class="shop_thumbs">
                                                        <div class="shop_img_list" v-for="img in shopInfo.thumbs"
                                                             :key="img.id">
                                                            <el-image class="shop_img" :src="img.src" fit="fill"/>
                                                            <span class="mask">
                                                                <el-icon>
                                                                    <Delete/>
                                                                </el-icon>
                                                            </span>
                                                        </div>
                                                        <div v-if="shopInfo.thumbs.length < 7"
                                                             class="el-upload--picture-card"
                                                             @click="openChooseShopImgCutImgDialog">
                                                            <el-icon>
                                                                <Plus/>
                                                            </el-icon>
                                                        </div>
                                                    </div>
                                                </el-form-item>
                                                <el-form-item class="shop_tags" label="商品标签">
                                                    <el-tag
                                                        v-for="tag in shopInfo.tags"
                                                        :key="tag"
                                                        size="large"
                                                        closable
                                                        :disable-transitions="false"
                                                        @close="handleCloseTag(tag)">
                                                        {{ tag }}
                                                    </el-tag>
                                                    <el-input
                                                        v-if="tagInputVisible"
                                                        v-model="tagInputValue"
                                                        size="default"
                                                        ref="tagInputRef"
                                                        @keyup.enter="handleInputTagConfirm"
                                                        @blur="handleInputTagConfirm"
                                                        style="width: 100px"
                                                    />
                                                    <el-button v-else size="default" @click="showTagInput">
                                                        + 添加标签
                                                    </el-button>
                                                </el-form-item>
                                                <el-form-item label="商品分类" prop="shopType">
                                                    <el-cascader
                                                        :props="{expandTrigger:'hover',value:'id',label:'name'}"
                                                        :options="shopType"
                                                        size="default"
                                                        v-model="shopInfo.shopType" clearable placeholder="选择分类"/>
                                                </el-form-item>
                                                <el-form-item label="规格" prop="skus" class="sku_panel">
                                                    <usr-sku-single :skus="shopInfo.skus"
                                                                    @onDelSkuRow="skuDelEvent"></usr-sku-single>
                                                </el-form-item>
                                                <el-form-item label="价格单位" prop="unit">
                                                    <el-select v-model="shopInfo.unit" size="default" clearable
                                                               placeholder="选择单位">
                                                        <template v-for="option in units" :key="option.value">
                                                            <el-option :label="option.label" :value="option.value"
                                                                       :disabled="option.disabled"/>
                                                        </template>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="状态" prop="status">
                                                    <el-select v-model="shopInfo.status" clearable size="default"
                                                               placeholder="选择状态">
                                                        <el-option label="已上架" value="0"/>
                                                        <el-option label="待上架" value="1"/>
                                                        <el-option label="已下架" value="2"/>
                                                    </el-select>
                                                </el-form-item>
                                                <el-form-item label="商品描述">
                                                    <usr-editor :content="shopInfo.shopDetail"
                                                                editor_width=""></usr-editor>
                                                </el-form-item>
                                            </el-form>
                                        </el-scrollbar>
                                    </div>
                                </el-card>
                            </div>
                        </div>
                        <usr-image-cutter-dialog :dialog="isShowChooseShopImgCutImgDialog"
                                             @onConfirm="chooseShopImgCutImgCallback"
                                             :cut-width="300"
                                             :cut-height="210"></usr-image-cutter-dialog>
                    </div>
                </el-scrollbar>
            </template>
        </el-drawer>
    </div>
</template>

<style scoped>

.usr_cpt_panel_drawer_add_goods :deep(.usr_drawer_override) .el-drawer__header {
    margin-bottom: 0;
}

.usr_cpt_panel_drawer_add_goods :deep(.usr_drawer_override) .el-drawer__body {
    padding: 0;
}

:deep(.usr_drawer_override) {
    background-color: #f6f8f9;
}

.dialog_con {
    height: calc(100vh - 40px);
    display: flex;
}

.page_left {
}

.page_left_con {
    padding: 20px;
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

.page_right_con {
    padding: 20px 20px 20px 0;
}

:deep(.usr_card_override) .el-card__body {
    padding: 0;
}

.add_goods_panel {
    height: calc(100vh - 40px - 20px - 20px - 2px);
    overflow: hidden;
}

.add_goods_panel .el-form-item {
    padding-right: 20px;
}

:deep(.add_goods_panel) .shop_no .el-form-item__content {
    column-gap: 10px;
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

:deep(.usr_card_override) .el-form-item .no_error .el-input__wrapper {
    box-shadow: 0 0 0 1px var(--el-border-color) inset;
}

:deep(.usr_card_override) .el-form-item .no_error .el-input__wrapper.is-focus {
    box-shadow: 0 0 0 1px var(--el-border-color) inset !important;
}


</style>