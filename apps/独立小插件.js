
 import fetch from "node-fetch";

const Setu = /^(#|\/)?涩图$/
const Zuan = /^(#|\/)?祖安一句$/
const Comess = /^(#|\/)?来点视频$/

export class excellen extends plugin {
    constructor() {
        super({
            name: 'excellen',
            dsc: 'example',
            event: 'message',
            priority: 1,
            rule: [{
                    reg: Setu,
                    fnc: "Setu"
                }, {
                    reg: Zuan,
                    fnc: "Zuan"
                }, {
                    reg: Comess,
                    fnc: "Comess"
                },
            ]
        }
        )
    }

    async Setu(e){
        //ִ收到命令后执行

        let url = 'https://image.anosu.top/pixiv/json?r18=1';
        let res = await fetch(url).catch((err) => logger.error(err))

        //处理url获取失败
        if (!res) {
            logger.error('[setu] 接口请求失败')
            return await this.reply('错误，请反馈！')
        }
        //这里是text，意味着json字符串同样文本发送
        res = await res.text()
        //输出结果到控制台
        logger.info(`[接口结果] setu：${res}`)

        //回复
        await this.reply(`${res}`)
    
    }

    async Zuan(e) {
        //收到命令后执行
        let url = 'https://act.jiawei.xin:10086/lib/api/maren.php?catalog=yang'
        let res = await fetch(url).catch((err) => logger.error(err))

        //处理url获取失败
        if (!res) {
            logger.error('[zuan] 接口请求失败')
            return await this.reply('错误，请反馈！')
        }
        //这里是text，意味着json字符串同样文本发送
        res = await res.text()
        //输出结果到控制台
        logger.info(`[接口结果] zuan：${res}`)

        //回复
        await this.reply(`${res}`)
    }

    async Comess(e) {
        //收到消息后处理
        let url = "http://api.yujn.cn/api/juhexjj.php?type=video";
        let res = await fetch(url).catch((err) => logger.error(err));

         //处理url获取失败
         if (!res) {
            logger.error('[comess] 接口请求失败')
            return await this.reply('错误，请反馈！')
        }
        let msg = [segment.at(e.user_id), segment.video(res.url)];//由于url的获取结果是video，所以直接写输出video不解析了
        //输出结果到控制台
        logger.info(`[接口结果] video处理完成`)
        //回复
        e.reply(msg);

        return true; //返回true，阻挡消息不再往下

    }

    

    

}

