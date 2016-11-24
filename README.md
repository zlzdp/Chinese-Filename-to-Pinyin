# Chinese-Filename-to-Pinyin

使用场景：  
UI 设计师，给出的是中文切图，  
前端工程师在去使用的时候，一般会是转换为英文字母的文件名。  
此工具，批量把文件夹中的中文文件名转为汉字拼音文件名，  
示例：  
```
拼音.png ==> pin-yin.png  
苍井空.png ==> cang-jing-kong.png  
```

如何使用？  
```
// install
npm i chinese-filename-to-pinyin -g

// run
// 命令行进入你要执行文件名转换的目录下，执行命令
pinyin
// 执行完成后，程序会告诉你处理好的文件在哪儿~

// windows，假如你在这个路径： C:\images\ ，直接打开命令行执行命令 pinyin
// 产出的文件会在 C:\images\dist-**timestamp** (一个带时间戳的文件夹)
```

