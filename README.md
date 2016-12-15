# Chinese-Filename-to-Pinyin
一款中文文件名转换拼音字母的命令行工具。  

使用场景：  
UI 设计师，给出很多切图文件，文件名是中文的，  
前端工程师在去使用的时候，一般会是转换为英文字母的文件名。  
此工具，能批量处理，把文件夹中的中文文件名转为汉字拼音文件名，  

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
除了使用```pinyin```命令，你还可以使用```to-pinyin```命令。  
