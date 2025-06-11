LAS Loader（LAS 文件加载器）

LAS Loader 是一个基于 @loaders.gl/las 的轻量级封装，用于将 LAS 文件加载为 Three.js 中的 THREE.Points 点云对象。

✅ customOption 参数会直接传递给 @loaders.gl/las，因此可以使用其文档中的任何合法配置项（LASLoaderOptions）。

📚 安装方式

npm install @dzxwind/las-loader

🚀 使用示例

import LasLoader from '@dzxwind/las-loader';

const loader = new LasLoader();
loader.load('path/to/file.las', (points) => {
    scene.add(points);
}, {
    // 自定义的 @loaders.gl/las 加载选项
});

⚙️ 调用参数说明

参数名	类型	说明
url	string	LAS 文件路径或 URL
callback	(mesh: THREE.Points) => void	加载完成后的回调函数，返回点云对象
customOption	LASLoaderOptions	直接传给 @loaders.gl/las 的配置选项
