#! /usr/bin/env node

var path = require('path')
var fsNative = require('fs')
var fs = require('fs-promise')
var copydir = require('copy-dir')
var cwd = process.cwd()
var date = new Date()
    // 用 '' 相加，避免出现数字求和的问题
date = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + '-' + date.getHours() + date.getMinutes() + date.getSeconds()
var distPath = path.resolve(cwd, 'dist-' + date)

fsNative.mkdirSync(distPath)

copydir.sync(cwd, distPath, function(stat, filepath, filename) {

    // ignore distPath dir in copy action
    if (filepath === distPath) {
        return false
    }
    return true
})

// begin to rename
fs.readdir(distPath).then(function(files) {
    var pinyin = require("pinyin")
    var conf = {
        style: pinyin.STYLE_NORMAL, // 设置拼音风格
        heteronym: false // 启用多音字模式
    }

    files.forEach(function(filename) {
        var isOnlyASCII = /^[\x00-\x7F]{1,}$/.test(filename)
        if (isOnlyASCII) {
            return
        }

        var pathOptions = path.parse(filename)
        var newName = pinyin(pathOptions.name, conf)
        newName = newName.join('-')
        newName = newName + pathOptions.ext
        newName = newName.replace(/[^\x00-\x7F]/g, '-') // 非 ASCII 中的字符，全部替换为- ，避免中文等文件名在web中可能出现的问题

        var oldPath = path.resolve(distPath, filename)
        var newPath = path.resolve(distPath, newName)
        fs.rename(oldPath, newPath)
    })

    console.log('\n**** 操作完成，请在以下路径查看结果： ****\n' + distPath)
}).catch(function(e) {
    console.log(e)
})
