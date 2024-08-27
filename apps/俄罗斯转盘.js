/**以下来自憨憨插件，微调,项目地址：https://gitee.com/han-hanz/hanhan-plugin */
import plugin from '../../../lib/plugins/plugin.js'

const RSRL = /^(#|\/)?来局轮盘赌$/
const Shoot =/^(#|\/)?开枪$/
const StopGame =/^(#|\/)?结束轮盘赌$/
const  NowBullet =/^(#|\/)?查看子弹$/

export class roulette extends plugin {
  constructor() {
    super({
      name: '轮盘赌',
      dsc: '俄罗斯轮盘',
      event: 'message',
      priority: 6,
      rule: [
        {
          reg: RSRL,
          fnc: 'StartGame'
        },
        {
          reg: Shoot,
          fnc: 'Shoot'
        },
        {
          reg: StopGame,
          fnc: 'StopGame'
        }, {
          reg: NowBullet,
          fnc: 'NowBullet'
        }
      ]
    })
  }

  async StartGame(e) {
    if (!e.isGroup) {
      e.reply('不在群聊不能游玩哦~')
      return false
    }
    let groupId = e.group_id
    // 判定轮盘是否开始
    if (await redis.exists(`Exce:ELS2:${groupId}`) === 1) {
      e.reply('当前群轮盘赌正在进行中！\n请发送 开枪 参与轮盘赌')
      return
    }
    // 随机生成数组，长度从5到10，其中一项为子弹，剩下的为空(0为空，1为子弹)
    let length = Math.floor(Math.random() * 6) + 5
    let GameData = new Array(length).fill(0)
    // 随机指定数组的某一项为子弹，剩下的为空
    let target = Math.floor(Math.random() * length)
    GameData[target] = 1
    Bot.logger.mark('GameData', GameData)
    await redis.set(`Exce:ELS2:${groupId}`, JSON.stringify(GameData), { EX: 60 * 60 * 24 })
    e.reply(`当前群轮盘赌已开启！\n弹夹还有【${length}】发子弹。\n请发送 开枪 参与游戏`)
  }

  async Shoot(e) {
    if (!e.isGroup) {
      e.reply('不在群聊不能游玩哦~')
      return false
    }
    let username = e.sender.nickname
    let groupId = e.group_id
    let GameData = JSON.parse(await redis.get(`Exce:ELS2:${groupId}`))
    if (GameData === null) {
      e.reply('游戏尚未开始哦~发送 来局轮盘赌 来开始游戏吧')
      return false
    }
    // 处理一下高并发问题
    if (GameData[0] === 0) {
      GameData.shift()

      // 检查一下是否只剩下一发子弹
      if (GameData.length === 1) {
        e.reply(`【${username}】开了一枪，没响。\n弹夹只有一发子弹了，本局轮盘赌结束。\n发送 来局轮盘赌 开启新一局的轮盘赌`)
        await redis.del(`Exce:ELS2:${groupId}`)
        return
      }

      e.reply(`【${username}】开了一枪，没响。\n弹夹还剩【${GameData.length}】发子弹`)
      await redis.set(`Exce:ELS2:${groupId}`, JSON.stringify(GameData), { EX: 60 * 60 * 24 })
      return
    }
    if (GameData[0] === 1) {
      e.reply(`【${username}】开了一枪，砰！枪响了。\n本局的输家是${username}哦！嘻嘻，记得接受惩罚~\n本局轮盘赌结束！发送 来局轮盘赌 开启新一局轮盘赌`)
      await redis.del(`Exce:ELS2:${groupId}`)
    }
  }

  async StopGame(e) {
    if (!e.isGroup) {
      e.reply('不在群聊不能游玩哦~')
      return false
    }
    let groupId = e.group_id
    let GameData = await redis.exists(`Exce:ELS2:${groupId}`)
    if (GameData === 0) {
      e.reply('当前群没有开始轮盘赌')
    } else {
      await redis.del(`Exce:ELS2:${groupId}`)
      e.reply('嗯~游戏结束！看来有人害怕了呀~~')
    }
  }

  async NowBullet(e) {
    if (!e.isGroup) {
      e.reply('不在群聊不能游玩哦~')
      return false
    }
    let groupId = e.group_id
    let GameData = JSON.parse(await redis.get(`Exce:ELS2:${groupId}`))
    if (!GameData) {
      e.reply('当前群没有开始轮盘赌')
    } else {
      e.reply(`弹夹还有【${GameData.length}】发子弹)`)
    }
  }
}