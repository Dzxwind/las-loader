# LAS Loader

**LAS Loader** is a lightweight wrapper around [`@loaders.gl/las`](https://loaders.gl/modules/las/) that helps you load LAS files as Three.js THREE.Points objects.

> ✅ The customOption parameter is passed directly to [`@loaders.gl/las`](https://loaders.gl/modules/las/), so you can use any valid LASLoaderOptions settings.

## 📚 Installation

``` bash
npm install @dzxwind/las-loader
```

## 🚀 Usage

``` typescript
import LasLoader from '@dzxwind/las-loader';

const loader = new LasLoader();
loader.load('path/to/file.las', (points) => {
    scene.add(points);
}, {
    // custom @loaders.gl/las options
});
```

## ⚙️ Parameters

| Parameter | Type | Description |
| -----| ----- | ----- |
| url | string | URL or path to the LAS file |
| callback | (mesh: THREE.Points) => void | Callback |
| customOption | LASLoaderOptions | Options passed directly to [@loaders.gl/las](https://loaders.gl/modules/las/) |

