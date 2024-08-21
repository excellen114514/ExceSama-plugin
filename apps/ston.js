import fetch from "node-fetch";

const Steam = /^(#|\/)?steam在线$/
const count = 10 // 返回排行榜数量，推荐不要太高，可能会导致无法发送
export class steam extends plugin {
    constructor() {
        super({
            name: 'steamonline',
            dsc: 'Ston',
            event: 'message',
            priority: 1,
            rule: [
                {
                    reg: Steam,
                    fnc: 'Ston'
                }
            ]
        });
    }

    async Ston(e) {
        const FETCH_DATA = await fetch(`http://api.yujn.cn/api/steam.php?type=json&count=${count}`);
        const DATA_JSON = await FETCH_DATA.json();//获取json字符串并解析
        const msg = ['Steam游戏在线人数']
        for (let i = 0; i < count; i++) {
            const DATA = DATA_JSON['data'][i]
            const MSG = [
                '游戏排名\n：' + DATA['index'],
                '游戏名称\n：', DATA['name'],
                '在线人数\n：' + DATA['current']
            ]
            msg.push(MSG)
        }
        return e.reply(msg)
    }
}
