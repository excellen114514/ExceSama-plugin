//注册nodejs
import fs from 'node:fs';

//输出载入消息
logger.info('尝试载入ExceSama插件')



//注册插件
fs.mkdirSync('plugins/ExceSama-plugin/data/urlimg', { recursive: true });
const files = fs.readdirSync('./plugins/ExceSama-plugin/apps').filter(file => file.endsWith('.js'))

let ret = []

files.forEach((file) => {
    ret.push(import(`./apps/${file}`))
})


ret = await Promise.allSettled(ret)

let apps = {}
for (let i in files) {
    let name = files[i].replace('.js', '')

    if (ret[i].status != 'fulfilled') {
        logger.error(`插件加载失败${logger.red(name)}`)
        logger.error(ret[i].reason)
        continue
    }
    apps[name] = ret[i].value[Object.keys(ret[i].value)[0]]
}


export { apps }

logger.info(logger.green('ExceSama插件加载中'))
logger.info(logger.green('完成！感谢支持！'))
