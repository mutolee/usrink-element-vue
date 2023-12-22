import {useShopTypeStore} from "@/stores/data/shopTypeStore";
import httpUtil from "@/utils/HttpUtil";

/**
 * 获取商品类型
 */
const getShopType = async () => {
    let shopTypeStore = useShopTypeStore()
    if (shopTypeStore.shopTypeCache.length === 0) {
        await httpUtil.get('data/shopType.json').then(async res => {
            // 缓存商品类型
            shopTypeStore.shopTypeCache = res.data.data
        }).catch(err => {
            console.error(err)
        })
    }

    return shopTypeStore.shopTypeCache
}

/**
 * 获取商品类型，排除禁用状态的商品类型
 */
const getShopTypeExcludeDisabled = async () => {
    let allShopType = [...await getShopType()] // 通过 [...arr] 拷贝数组，不破外原数组
    // 过滤禁用状态的商品类型，包括过滤掉子节点的禁用的
    return filterData(allShopType)
}

/**
 * 过滤禁用状态的商品类型，包括过滤掉子节点的禁用的
 * @param data 商品类型数据
 */
const filterData = (data) => {
    let newData = []
    data.forEach(item => {
        if (item.status !== -1) {
            let newItem = {...item} // 通过 {...obj} 拷贝对象，不破外原对象
            if (newItem.children && newItem.children.length > 0) {
                newItem.children = filterData(newItem.children)
            }
            newData.push(newItem)
        }
    })

    return newData
}

export default {
    getShopType,
    getShopTypeExcludeDisabled
}