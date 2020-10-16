// "target": "es5" 用于指定编译之后的版本目录
// "module": "commonjs", module用来指定要使用的模板标准
// "lib":["es6","dom"] 用于指定要包含在编译中的库文件 由于配置了lib，那么就只会引入es6的库文件，不再引入dom相关的库文件了，所以无法使用dom相关的东西，比如document
// allowJs用来指定是否允许编译JS文件，默认false,即不编译JS文件
// "checkJs": true checkJs用来指定是否检查和报告JS文件中的错误，默认false 相反，你可以通过不设置 checkJs:true 并在 .js 文件顶部添加一个 // @ts-check 注释，让编译器检查当前文件。
// "jsx": "preserve", 指定jsx代码用于的开发环境:'preserve','react-native',or 'react
// "declaretion" 用来指定是否在编译的时候生成相应的.d.ts声明文件,不能合allowJs同时存在
// "declaretionMap" 指定是否为声明文件.d.ts生成map文件
// "sourceMap": true, socuceMap用来指定编译时是否生成.map文件
// "composite": true, composite是否编译构建引用来的项目
// "removeComments" 是否将编译后的文件中的注释删掉
// "noEmit" 不生成编译文件一般很少用
// "importHelpers": true,                     // 通过tslib 引入 helper 函数，文件必须是模块
// unoEmitOnErrorM: true,                     // 发生错误时不输出文件
// "noEmitHelpers": true,                     // 不生成 helper 函数，需额外安装 ts-helpers
// "importHelpers": true,                     // 通过tslib引入helper函数，文件必须是模块
// "downlevellteration" : true,               // 降级遍历器的实现（es3/5)
// "strict": true,                            // 开启所有严格的类型检查
// "alwaysStrict": false,                     // 在代码中注入"use strict";
// "noImplicitAny": false,                    // 不允许隐式的any类型
// "strictNullChecksilj false,                // 不允许把null、undefined赋值给其他类型变置
// "strictFunctionTypes": false,              // 不允许函数参数双向协变
// "strictPropertyInitialization": false,     // 类的实例属性必须初始化
// strictBindCallApply: false,                // 严格的 bind/call/apply 检査
// "noImplicitThis": false,                   // 不允许this有隐式的any类型
// "noUnusedLocals": true,                    // 检査只声明，未使用的局部变置
// "nollnusedParameters": true,               // 检查未使用的函数参数
// "noFallthroughCasesInSwitch": true,        // 防止switch语句贯穿
// "noImplicitReturns": true,                 // 每个分支都要有返回值
// "esModulelnterop": true,                   // 允许export = 导出，由import from导入
// "allowUrndGlobalAccess": true,             // 允许在模块中访问UMD全局变置
// "moduleResolution": "node",                // 模块解析策略
// "baseUrl": "./",                           // 解析非相对模块的基地址

