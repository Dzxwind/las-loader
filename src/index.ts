import { load } from '@loaders.gl/core'
import { LASLoader, type LASLoaderOptions } from '@loaders.gl/las'
import * as THREE from 'three'

// 颜色Gamma校正
function srgbToLinear(c: number) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
}

type Options = LASLoaderOptions

class LasLoader {
  load(url: string, callback: (mesh: THREE.Points) => void, customOption: Options): void {
    const options = customOption || {
      las: {
        shape: 'mesh', // 'mesh' 将点云展开成三元组；也可选 'columnar-table' 或 'arrow-table'
        skip: 1, // 每隔多少点抽样一次，skip=2 表示丢弃一半点
        fp64: false, // 是否启用 64 位浮点精度
        colorDepth: 'auto',
      },
    }
    load(url, LASLoader, options).then((lasData) => {
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(lasData.attributes.POSITION.value, lasData.attributes.POSITION.size)
      )
      if (lasData.attributes.COLOR_0) {
        // colors 通常是 Uint8Array，要归一化到 [0,1]
        const colors = lasData.attributes.COLOR_0.value.filter((_, i) => (i + 1) % 4 !== 0)
        const cols = new Float32Array(colors.length)
        for (let i = 0; i < colors.length; i++) {
          cols[i] = srgbToLinear(colors[i] / 255)
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3))
      }

      const material = new THREE.PointsMaterial({
        size: 1,
        sizeAttenuation: true,
        transparent: false,
        vertexColors: true,
        opacity: 1,
        color: new THREE.Color(0xffffff),
      })

      const mesh = new THREE.Points(geometry, material)

      callback(mesh)

      return mesh
    })
  }
}

export default LasLoader
