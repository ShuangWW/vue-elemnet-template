import Vue from 'vue'

//组件名字处理会用到lodash
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

/**
 * 基础组件相对于当前文件的相对位置
 * 是否查询子目录
 * 匹配基础组件名字的正则，这里均是base开头
 */
var requireComponent = require.context(
    '../base',
    false,
    /base[A-Z]\w+\.(vue|js)$/
)

/**
 * componentConfig      获取组件配置
 * componentName        获取组件的PascalCase命名
 * camelCase            剥去文件名开头'./'和结尾的扩展名
 * Vue.component        全局注册组件
 */
requireComponent.keys().forEach(fileName => {
    var componentConfig = requireComponent(fileName)
    var componentName = upperFirst(
        camelCase(
            fileName.replace(/^\.\/_/, '').replace(/\.\w+$/, '')
        )
    )
    Vue.component(componentName, componentConfig.default || componentConfig)
})
