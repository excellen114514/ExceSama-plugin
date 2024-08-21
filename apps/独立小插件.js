
 import fetch from "node-fetch";
 import fs from 'fs';

const Setu = /^(#|\/)?涩图$/
const Ehelp = /^(#|\/)?ehelp$/
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
                    reg: Ehelp,
                    fnc: "Ehelp"
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

    async Ehelp(e) {
        {
            const path = process.cwd() + '/plugins/ExceSama-plugin/resources/help';//设立一个文件夹并从中提出图片
            const files = fs.readdirSync(path);//调用fs模块
            const imgFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));//可以再扩写其他格式
            const randomIndex = Math.floor(Math.random() * imgFiles.length);
            const imgPath = `${path}/${imgFiles[randomIndex]}`;
            const img = fs.readFileSync(imgPath);
             await this.reply(segment.image(img));//输出文件夹图片
        }
    }

    

}

