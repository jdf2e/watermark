# watermark.js

  watermark.js是一款可配置的水印
## 示例
```
(function(win, cfg) {
    window.pageConfig = {
        watermarkId: "waterMark",
        canvasWidth:140,
        canvasHeight:140,
        message: 'jder',
        contextFont:'15px Vedana',
        contextColor:'rgba(158, 158, 158, 0.5)',
        contextAlign:'right',
        contextBaseline:'Middle'
    }
    if (cfg) { for (var key in cfg) pageConfig[key] = cfg[key] }
    win.pageConfig = pageConfig
})(window, window.pageConfig);

```
## 安装
jdf2e-watermark npm包

```

 npm install jdf2e-watermark
 
```
或者页面直接引入这个js。
```
<script type="text/javascript" src="./js/watermark.js"></script>

```
  
## 参数

  
  参数说明:
  
  | 参数名称      | 说明  
  |  ---------- | ----------
  | watermarkId         |  水印id
  | canvasWidth         |  每个水印的区域宽
  | canvasHeight        |  每个水印的区域高
  | message             |  显示具体水印内容
  | contextFont         |  水印像素和字体
  | contextColor        |  水印颜色和透明度
  | contextAlign        |  水印对齐
  | contextBaseline     |  基线
  
  

 
