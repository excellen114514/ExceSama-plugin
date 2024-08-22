import fetch from "node-fetch";

const Weather = /^(#|\/)?天气(.*)$/

export class weather extends plugin {
    constructor() {
      super({
          name: 'Weather',
          dsc: 'asking weather',
          event: 'message',
          priority: 1,
          rule: [{
                  reg: Weather,
                  fnc: "Weather"
              }, 
          ]
      }
      )
  };

  async Weather(e) {
    let msg = "";
    /**循环，遍历命令并写入msg变量中 */
    for (let m of e.message) {
        msg += m.text;
    }
    //只保留天气以外的字段。写入msg变量
    msg = msg.replace(/#|天气/g, "").trim();
    console.log(msg);
    let url = `http://api.yujn.cn/api/xztq.php?msg=${msg}`
    let res = await fetch(url).catch((err) => logger.error(err))

        //处理url获取失败
        if (!res) {
            logger.error('[weather] 接口请求失败')
            return await this.reply('错误，请反馈！')
        }
        //这里是text，意味着json字符串同样文本发送
        res = await res.text()
        //输出结果到控制台
        logger.info(`[接口结果] weather：${res}`)

        //回复
        await this.reply(`${res}`)
  }
}  