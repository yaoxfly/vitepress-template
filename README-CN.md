[English](README.md)  | [中文](README-CN.md)


# vitepress-template 
基于vitepress，集成了ts，以及其他简单的配置、主题等，开箱即用，写文档利器

# 基础配置
+  typescript
+  自动注册全局组件
+  eslint 
+  自定义主题

> `ESLint` 默认忽略.开头的目录,  在`.eslintignore`中设置 `!docs/.vitepress` 不让忽略`.vitepress`


# 使用

运行

```js
pnpm run dev
```

打包

```js
pnpm run  build
```

预览

```js
pnpm run serve 
or
pnpm run preview // 先执行pnpm run build 再执行 pnpm run serve 
```

> 打包后才能执行预览操作



# demo地址
[模板范例在线访问(Ctrl+点击,可新标签页打开)](https://yaoxfly.github.io/vitepress-template-site)