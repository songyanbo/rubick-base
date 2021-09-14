## rubickbase

基于 Rust 提供截图、键鼠事件监听模拟等跨平台功能的现代 Nodejs 模块，大小仅 1M，安装便捷，使用简单，可取代 iohook 和 robotjs

## Built-in APIs

-   [x] 键鼠事件监听钩子 mouse/keyboard event listen
-   [x] 截图 screen capture
-   [x] 图片取色 pixel color picker
-   [x] 获取鼠标位置 get cursor position
-   [x] 获取鼠标像素颜色 pick color at cursor position
-   [x] lzma-rs 压缩解压
-   [ ] 注册快捷键事件隧道
-   [ ] 截图获取某位置周围图像
-   [ ] 获取应用列表(名称 路径)
-   [ ] 键盘事件模拟
-   [ ] 鼠标事件模拟

## Install

npm install --save rubickbase

## Getting start

```js
// cjs
const { newRubickBase } = require('rubickbase')
// esm
import { newRubickBase } from 'rubickbase'

const rubickBase = newRubickBase()

async function main() {
	// start rubickbase
	await server.start()
	const api = server.getAPI()
	// screen capture
	await api.screenCapture('./capture.png')
	// cursor Position
	let task = setInterval(async () => {
		console.log(await api.getCursorPositionPixelColor())
	}, 1000)
	// close rubickbase
	setTimeout(async () => {
		await server.close()
		clearInterval(task)
	}, 10000)
}

main()
```

## Contribute

npm install -g pnpm

| Action  | Command          |
| ------- | ---------------- |
| Install | · `pnpm i`       |
| Build   | · `pnpm build`   |
| Commit  | · `pnpm commit`  |
| Release | · `pnpm release` |

## TODO

-   [x] 解决 jimp 依赖占用磁盘、CPU、内存的问题
-   [x] 抽离 utils 函数
-   [x] 解决 hex16 转换 bug
-   [x] 解决截图有黑屏的情况
-   [x] 使用 rust 进行屏幕取色 并防止超出边界
-   [x] 事件订阅模式 event emitter
-   [x] api 调用 async 模式
-   [ ] 对每个 API 进行测试
