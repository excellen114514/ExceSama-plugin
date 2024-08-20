
 import fetch from "node-fetch";
 import fs from 'fs';

const C_REGEX = /^(#|\/)?涩图$/
const D_REGEX = /^(#|\/)?ehelp$/
const S_REGEX = /^(#|\/)?祖安一句$/
const G_REGEX = /^(#|\/)?来点视频$/

export class excellen extends plugin {
    constructor() {
        super({
            name: 'excellen',
            dsc: 'example',
            event: 'message',
            priority: 1,
            rule: [{
                    reg: C_REGEX,
                    fnc: "Setu"
                }, {
                    reg: D_REGEX,
                    fnc: "Ehelp"
                }, {
                    reg: S_REGEX,
                    fnc: "Zuan"
                }, {
                    reg: G_REGEX,
                    fnc: "Comess"
                },
            ]
        }
        )
    }

    async Setu(e) {
        
        
        //ִ收到命令并执行
        let url = 'https://image.anosu.top/pixiv/json?r18=1';
        let res = await fetch(url).catch((err) => logger.error(err))
        //判定接口是否可用
        if (!res) {
            logger.error('[setu] 接口请求失败')
            return await this.reply('错误，请反馈！')
        }

        res = await res.text()
        //输出到控制台
        logger.info(`[接口结果] setu：${res}`)

        //返回结果 
        await this.reply(`${res}`)
    }

    async Zuan(e) {
        //收到命令并执行
        let url = 'https://act.jiawei.xin:10086/lib/api/maren.php?catalog=yang'
        let res = await fetch(url).catch((err) => logger.error(err))
        //判定接口是否可用
        if (!res) {
            logger.error('[zuan] 接口请求失败')
            return await this.reply('错误，请反馈！')
        }

        res = await res.text()
        //输出到控制台
        logger.info(`[接口结果] zuan：${res}`)

        //返回结果 
        await this.reply(`${res}`)
    }

    async Comess(e) {
        
        //ִ收到命令并执行
        let url = "http://api.yujn.cn/api/juhexjj.php?type=video";
        let res = await fetch(url).catch((err) => logger.error(err));
        let msg = [segment.at(e.user_id), segment.video(res.url)];

        //回复
        e.reply(msg);

        return true; //返回 true 阻挡消息不再往下

    }

    async Ehelp(e) {
        {
            const path = process.cwd() + '/plugins/ExceSama-plugin/resources/help';
            const files = fs.readdirSync(path);
            const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
            const randomIndex = Math.floor(Math.random() * imageFiles.length);
            const imagePath = `${path}/${imageFiles[randomIndex]}`;
            const img = fs.readFileSync(imagePath);
            await this.reply(segment.image(img));
        }
    }



}

