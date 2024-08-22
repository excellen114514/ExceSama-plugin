import fetch from "node-fetch";
const Jietu = /^(#|\/)?网页截图(.*)$/

export class jietu extends plugin {
    constructor() {
      super({
          name: 'jietu',
          dsc: 'webview',
          event: 'message',
          priority: 1,
          rule: [{
                  reg: Jietu,
                  fnc: "Jietu"
              }, 
          ]
      }
      )
  };

  async Jietu(e) {
    let msg = "";
    /**循环，遍历命令并写入msg变量中 */
    for (let m of e.message) {
        msg += m.text;
    }
    //只保留网页截图以外的字段。写入msg变量
    msg = msg.replace(/#|网页截图/g, "").trim();
    console.log(msg);
    let url = `https://api.yujn.cn/api/jietu.php?msg=${msg}`
    let res = await fetch(url).catch((err) => logger.error(err));

     //处理url获取失败
        if (!res) {
            logger.error('[jietu] 接口请求失败')
            return await this.reply('错误，请反馈！')
        }
        let img = [segment.at(e.user_id), segment.image(res.url)];//由于url的获取结果是img，所以直接写输出img不解析了
        //输出结果到控制台
        logger.info(`[接口结果] 网页截图处理完成`)
        
    return e.reply(img); //返回消息，阻挡消息不再往下

  }
}