import { segment } from "oicq";
import fetch from "node-fetch";
import fs from 'fs';

const _path = process.cwd();


export class wallpapernew extends plugin {
    constructor () {
        super({
            name: 'wallpapernew',
            dsc: 'lolis',
            event: 'message',
            priority: 50,
            rule: [

                {
                    reg: "^#?(赛马娘|dm1)$",
                    fnc: 'saima'
                },
             
                {
                    reg: "^#?(从零开始的异世界生活|re0|dm2)$",
                    fnc: 're0'
                },

                {
                    reg: "^#?(刀剑神域|sao|dm3)$",
                    fnc: 'sao'
                },

                {
                    reg: "^#?(妖精的尾巴|yaowei|dm4)$",
                    fnc: 'yaowei'
                },

                {
                    reg: "^#?(鬼灭之刃|dm5)$",
                    fnc: 'gmzr'
                },

                {
                    reg: "^#?(五等分的花嫁|dm6)$",
                    fnc: 'huajia'
                },

                {
                    reg: "^#?(冰菓|dm7)$",
                    fnc: 'bingg'
                },

                {
                    reg: "^#?(你的名字|dm8)$",
                    fnc: 'kiminame'
                },

                {
                    reg: "^#?(公主连接|dm9)$",
                    fnc: 'gongzhulj'
                },

                {
                    reg: "^#?(间谍过家家|dm10)$",
                    fnc: 'spyfamily'
                },

                {
                    reg: "^#?(摇曳露营|dm11)$",
                    fnc: 'camp'
                },

                {
                    reg: "^#?(摇曳百合|dm12)$",
                    fnc: 'yuruyuri'
                },

                {
                    reg: "^#?(天使降临到我身边|dm13)$",
                    fnc: 'miyone'
                },

                {
                    reg: "^#?(我们无法一起学习|dm14)$",
                    fnc: 'xuebulai'
                },

                {
                    reg: "^#?(悠哉日常大王|dm15)$",
                    fnc: 'nobiyori'
                },

                {
                    reg: "^#?(黄金拼图|dm16)$",
                    fnc: 'kiniromosaic'
                },

                {
                    reg: "^#?(转生恶役大小姐|dm17)$",
                    fnc: 'flagojousama'
                },

                {
                    reg: "^#?(崛与宫村|dm18)$",
                    fnc: 'horitomiyamura'
                },

                {
                    reg: "^#?(路人女主|dm19)$",
                    fnc: 'saenaiheroine'
                },

                {
                    reg: "^#?(喜欢本大爷竟然就你一个|dm20)$",
                    fnc: 'mydcy'
                },

                {
                    reg: "^#?(高原魔女|dm21)$",
                    fnc: 'slime'
                },

                {
                    reg: "^#?(幼妻狐仙|dm22)$",
                    fnc: 'foxsenko'
                },

                {
                    reg: "^#?(游戏王|dm23)$",
                    fnc: 'yugioh'
                },

                {
                    reg: "^(#?莉可丽丝|dm24)$",
                    fnc: 'lycorisrecoil'
                },

                {
                    reg: "^#?(斩赤红之瞳|dm25)$",
                    fnc: 'akamegakill'
                },

                {
                    reg: "^#?(命运冠位指定|fgo|dm26)$",
                    fnc: 'fgo'
                },

                {
                    reg: "^#?(轻音少女|轻音|dm27)$",
                    fnc: 'kon'
                },

                {
                    reg: "^#?(lovelive|dm28)$",
                    fnc: 'lovelive'
                },

                {
                    reg: "^#?(Overlord|骨王|dm29)$",
                    fnc: 'overlord'
                },

                {
                    reg: "^#?(变态王子与不笑猫|dm30)$",
                    fnc: 'hentaiandneko'
                },

                {
                    reg: "^#?(不正经魔术师|dm31)$",
                    fnc: 'majutsukoushi'
                },

                {
                    reg: "^#?(空之境界|dm32)$",
                    fnc: 'karanokyoukai'
                },

                {
                    reg: "^#?(小林家的龙女仆|dm33)$",
                    fnc: 'kobayashinodragon'
                },

                {
                    reg: "^#?(龙与虎|dm34)$",
                    fnc: 'toradora'
                },

                {
                    reg: "^#?(关于我转生变成史莱姆这件事|dm35)$",
                    fnc: 'tenseislime'
                },

                {
                    reg: "^#?(未闻花名|dm36)$",
                    fnc: 'hananoamae'
                },

                {
                    reg: "^#?(乌贼娘|dm37)$",
                    fnc: 'ikausume'
                },

                {
                    reg: "^#?(小老师|dm38)$",
                    fnc: 'celiaclaire'
                },

                {
                    reg: "^#?(熊熊勇闯异世界|dm39)$",
                    fnc: 'kumabear'
                },

                {
                    reg: "^#?(为美好的世界献上祝福|dm40)$",
                    fnc: 'sekaishukufuku'
                },

                {
                    reg: "^#?动漫图帮助$",
                    fnc: 'dm'
                },
            ]
        })

    }

    async saima(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=saima`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async re0(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=re0`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async sao(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=sao`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async yaowei(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=yaowei`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async gmzr(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=gmzr`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async huajia(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=5huajia`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async bingg(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=bingg`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async kiminame(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kiminame`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async gongzhulj(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=gongzhulj`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async spyfamily(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=spyfamily`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async camp(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=camp`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async yuruyuri(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=yuruyuri`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async miyone(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=miyone`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async xuebulai(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=xuebulai`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async nobiyori(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=nobiyori`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async kiniromosaic(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kin-iro-mosaic`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async flagojousama(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=flag-ojousama`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async horitomiyamura(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=hori-to-miyamura`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async saenaiheroine(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=saenai-heroine`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async mydcy(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=mydcy`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async slime(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=slime-300`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async foxsenko(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=fox-senko`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async yugioh(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=yu-gi-oh`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async lycorisrecoil(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
    let url = `https://img.moehu.org/pic.php?id=lycoris-recoil`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async akamegakill(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=akame-ga-kill`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async fgo(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=fgo`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async kon(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=k-on`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async lovelive(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=lovelive`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async overlord(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=overlord`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async hentaiandneko(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=hentaiandneko`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async majutsukoushi(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=majutsu-koushi`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async karanokyoukai(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kara-no-kyoukai`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async kobayashinodragon(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg); 
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kobayashi-no-dragon`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async toradora(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=toradora`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async tenseislime(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=tensei-slime`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async hananoamae(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=hana-no-amae`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async ikausume(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=ika-usume`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async celiaclaire(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=celia-claire`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async kumabear(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=kuma-bear`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async sekaishukufuku(e) {
        //e.msg 用户的命令消息
        console.log("用户命令：", e.msg);
        //执行的逻辑功能
        let url = `https://img.moehu.org/pic.php?id=sekai-shukufuku`;
        let res = await fetch(url).catch((err) => logger.error(err));

        let msg = [segment.at(e.user_id), segment.image(res.url)];

        //发送消息
        e.reply(msg);

        return true; //返回true 阻挡消息不再往下

    }

    async dm(e) {
        const path = process.cwd() + '/plugins/ExceSama-plugin/resources/dmhelp';
        const files = fs.readdirSync(path);
        const imageFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const imagePath = `${path}/${imageFiles[randomIndex]}`;
        const img = fs.readFileSync(imagePath);
        await this.reply(segment.image(img));
    }
}