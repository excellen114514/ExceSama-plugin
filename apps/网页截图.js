import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { segment } from "oicq";
const Jietu = /网页截图(.*)/
export class excellen extends plugin {
  constructor() {
      super({
          name: 'excellen',
          dsc: 'example',
          event: 'message',
          priority: 1,
          rule: [{
                  reg: Jietu,
                  fnc: "jietu"
              }
          ]
      }
      )
  }

  async jietu(e){
    //ִ收到命令后执行}
    // 使用示例：截取www.example.com并保存为data/example.png
    let smoney = "";
           /**循环，遍历命令并写入smoney变量中 */
          for (let m of e.message) {
            smoney += m.text;
         } 
         //只保留赌以外的字段。写入变量
         smoney = smoney.replace(/网页截图/g, "").trim();
    const currentWorkingDirectory = process.cwd();
    let msg = await takeScreenshot(smoney, path.join(currentWorkingDirectory, 'plugins', 'ExceSama-plugin', 'data', `${smoney}.png`));
    e.reply(segment.image(msg));
  }
}
async function takeScreenshot(url, outputPath) {
  // 启动浏览器并打开一个新页面
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 设置视口大小（可以根据需要调整）
  await page.setViewport({ width: 1920, height: 1080 });

  // 确定网站的协议
  const protocol = await determineProtocol(url);
  const fullUrl = `${protocol}${url}`;

  // 导航到指定网址
  await page.goto(fullUrl, { waitUntil: 'networkidle0' });

  // 截取网页的全屏
  const screenshotBuffer = await page.screenshot({ fullPage: true });

  // 将截图保存为图片文件
  await fsp.writeFile(outputPath, screenshotBuffer, 'base64');

  // 关闭浏览器
  await browser.close();
  const path = process.cwd() + '/plugins/ExceSama-plugin/data';
  const specifiedImage = `${url}.png`; // 指定图片的文件名
  const imagePath = `${path}/${specifiedImage}`;
  const img = fs.readFileSync(imagePath);
  return img;
}

async function determineProtocol(url) {
  try {
    // 尝试使用fetch API获取网站的响应头
    const response = await fetch(url, { method: 'HEAD' });
    const contentType = response.headers.get('Content-Type');

    // 根据Content-Type判断协议
    if (contentType && contentType.startsWith('image')) {
      // 如果Content-Type以'image'开头，可能是HTTPS
      return 'https://';
    } else {
      // 否则，默认使用HTTP
      return 'https://';
    }
  } catch (error) {
    // 如果fetch请求失败，假设是HTTP
    return 'http://';
  }
}

