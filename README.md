LAS Loader

LAS Loader is a lightweight wrapper around @loaders.gl/las that helps you load LAS files as Three.js THREE.Points objects.

✅ The customOption parameter is passed directly to @loaders.gl/las, so you can use any valid LASLoaderOptions settings.

📚 Installation

npm install @dzxwind/las-loader

🚀 Usage

import LasLoader from '@dzxwind/las-loader';

const loader = new LasLoader();
loader.load('path/to/file.las', (points) => {
    scene.add(points);
}, {
    // custom @loaders.gl/las options
});

⚙️ Parameters

Parameter	Type	Description
url	string	URL or path to the LAS file
callback	(mesh: THREE.Points) => void	Callback that receives the loaded point cloud mesh
customOption	LASLoaderOptions	Options passed directly to @loaders.gl/las


