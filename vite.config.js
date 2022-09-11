import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite 配置
// 文档地址：https://vitejs.dev/config/
export default defineConfig({
    base: '',
    plugins: [vue()],
    build: {
        outDir: 'docs', // 指定输出路径
        // 打包出来的区块如果超过1500KB，触发 Some chunks are larger than 1500 KiB after minification 警告
        chunkSizeWarningLimit: 1500,
        // rollupOptions 配置
        // 打包将大块文件拆成小块
        // 参考地址：https://blog.csdn.net/sinat_36728518/article/details/123112966
        rollupOptions: {
            output: {
                // 把大块文件拆成小块
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString();
                    }
                },
                // 把不同的块放入独立文件夹中，避免都放入assets目录中
                chunkFileNames: (chunkInfo) => {
                    const facadeModuleId = chunkInfo.facadeModuleId
                        ? chunkInfo.facadeModuleId.split('/')
                        : [];
                    const fileName =
                        facadeModuleId[facadeModuleId.length - 2] || '[name]';
                    return `js/${fileName}/[name].[hash].js`;
                }
            }
        }
    }
})
