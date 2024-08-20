import { segment } from "oicq";
import fetch from "node-fetch";
import fs from 'fs';

const _path = process.cwd();


export class wallpaper extends plugin {
    constructor () {
        super({
            name: 'wallpaper',
            dsc: 'loli',
            event: 'message',
            priority: 50,
            rule: [

                {
                    reg: "^#?(随机二次元|来点二次元|二次元图|二次元)$",
                    fnc: 'ecy'
                },
                {
                    reg: "^#?(来张萝莉|loli|萝莉)$",
                    fnc: 'loli'
                },
                {
                    reg: "^#?(二次元图帮助|图图帮助|图图help)$",
                    fnc: 'randomimg'
                },
                {
                    reg: "^#?(小鲨鱼|gura)$",
                    fnc: 'gura'
                },
                {
                    reg: "^#?(雪花菈米)$",
                    fnc: 'k'
                },
                {
                    reg: "^#?(夏色祭)$",
                    fnc: 'xia'
                },
                {
                    reg: "^#?(润羽露西娅)$",
                    fnc: 'run'
                },
                {
                    reg: "^#?(猫羽雫)$",
                    fnc: 'myn'
                },
                {
                    reg: "^#?(樱岛麻衣)$",
                    fnc: 'yingdao'
                },
                {
                    reg: "^#?(初音未来|miku)$",
                    fnc: 'miku'
                },
                {
                    reg: "^#?(洛天依)$",
                    fnc: 'lty'
                },
                {
                    reg: "^#?(康娜)$",
                    fnc: 'kangna'
                },
                {
                    reg: "^#?(时崎狂三)$",
                    fnc: 'sqks'
                },
                {
                    reg: "^#?(喵帕斯)$",
                    fnc: 'mps'
                },
                {
                    reg: "^#?(薇尔莉特)$",
                    fnc: 'wrlt'
                },
                {
                    reg: "^#?(水原千鹤)$",
                    fnc: 'syqh'
                },
                {
                    reg: "^#?(唐可可)$",
                    fnc: 'tkk'
                },
                {
                    reg: "^#?(中野三玖)$",
                    fnc: 'sanj'
                },
                {
                    reg: "^#?(四宫辉夜)$",
                    fnc: 'sghy'
                },
                {
                    reg: "^#?(藤原千花)$",
                    fnc: 'tyqh'
                },
                {
                    reg: "^#?(伊蕾娜)$",
                    fnc: 'yln'
                },
                {
                    reg: "^#?(喜多川海梦)$",
                    fnc: 'xdchm'
                },
                {
                    reg: "^#?(艾拉)$",
                    fnc: 'aila'
                },
                {
                    reg: "^#?(和泉纱雾)$",
                    fnc: 'hqshaw'
                },
                {
                    reg: "^#?(二次元表情包)$",
                    fnc: 'bqb'
                },
                {
                    reg: "^#?(甘城猫猫)$",
                    fnc: 'gcmm'
                },
                {
                    reg: "^#?(MC酱)$",
                    fnc: 'mcj'
                },
                {
                    reg: "^#?(兽耳酱)$",
                    fnc: 'srj'
                },
                {
                    reg: "^#?(柴郡猫猫)$",
                    fnc: 'cjmm'
                },
            ]
        })

    }

    async ecy(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://imgapi.cn/api.php?fl=dongman&gs=images`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async loli(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://www.dmoe.cc/random.php`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }


    async randomimg(e) {
        const path = process.cwd() + '/plugins/ExceSama-plugin/resources/ecyhelp';
        const files = fs.readdirSync(path);
        const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const imagePath = `${path}/${imageFiles[randomIndex]}`;
        const img = fs.readFileSync(imagePath);
        await this.reply(segment.image(img));
    }

    async gura(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=gura`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async k(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=yukihana`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async xia(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=natsuiro`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async run(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=uruha-rushia`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async myn(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=myn`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async yingdao(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=ydmy`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async miku(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=miku`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async lty(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=tianyi`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async kangna(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kanna`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async sqks(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kurumi`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async mps(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=miaops`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async wrlt(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=violet`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async syqh(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=mizuhara`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async tkk(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=tangkk`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async sanj(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=nakanomiku`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async sghy(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kaguya`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async tyqh(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=chika`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async yln(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=elaina`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async xdchm(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kitagawa-marin`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async aila(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=lsla`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async hqshaw(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=izumi-sagiri`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async bqb(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=bqb`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async gcmm(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=gcmm`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async mcj(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=mc`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async srj(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kemomimi`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async cjmm(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=cheshire`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }
}