import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import { segment } from "oicq";
import crypto from 'crypto';
const Jietu = /^(#|\/)?网页截图(.*)$/
const Httpjietu =/^(#|\/)?http(.*)$/
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
              },
              {
                reg: Httpjietu,
                fnc: "httpjietu"
              }
          ]
      }
      )
  }

  async jietu(e){
    //ִ收到命令后执行}
    // 使用示例：截取www.example.com并保存为data/example.png
    let tup = "";
    for (let m of e.message) {
      tup += m.text;
     }
     tup = tup.replace(/#|网页截图/g, "").trim();
     console.log(tup);
    const currentWorkingDirectory = process.cwd();
    const uniqueId = generateUniqueId(`${tup}`);
    let msg = await takeScreenshot(tup, path.join(currentWorkingDirectory, 'plugins', 'ExceSama-plugin', 'data', 'urlimg', `${uniqueId}.png`));
    e.reply(segment.image(msg));
  }

  async httpjietu(e){
    //ִ收到命令后执行}
    // 使用示例：截取www.example.com并保存为data/example.png
    let tup = "";
    for (let m of e.message) {
      tup += m.text;
     }
     console.log(tup);
    const currentWorkingDirectory = process.cwd();
    const uniqueId = generateUniqueId(`${tup}`);
    let msg = await takeScreenshotwithhttp(tup, path.join(currentWorkingDirectory, 'plugins', 'ExceSama-plugin', 'data', 'urlimg', `${uniqueId}.png`));
    e.reply(segment.image(msg));
}
}
async function takeScreenshot(url, outputPath) {
  // 启动浏览器并打开一个新页面
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
});
  const page = await browser.newPage();

  // 设置视口大小（可以根据需要调整）
  await page.setViewport({ width: 1920, height: 1080 });

  // 确定网站的协议
  

  const fullUrl = `https:${url}`;
  let res = await fetch(fullUrl).catch((err) => logger.error(err));
  if (!res) {
    logger.error(`${url}使用https失败，转http`)
    const fullUrl = `http:${url}`;
     // 导航到指定网址
  await page.goto(fullUrl, { waitUntil: 'networkidle0' });

  // 截取网页的全屏
  const screenshotBuffer = await page.screenshot({ fullPage: true });

  // 将截图保存为图片文件
  await fsp.writeFile(outputPath, screenshotBuffer, 'base64');

  // 关闭浏览器
  await browser.close();
  }else{
    // 导航到指定网址
  await page.goto(fullUrl, { waitUntil: 'networkidle0' });

  // 截取网页的全屏
  const screenshotBuffer = await page.screenshot({ fullPage: true });

  // 将截图保存为图片文件
  await fsp.writeFile(outputPath, screenshotBuffer, 'base64');

  // 关闭浏览器
  await browser.close();   
  }
  
  const imagePath = `${outputPath}`;
  const img = fs.readFileSync(imagePath);
  return img;
}

async function takeScreenshotwithhttp(url, outputPath) {
  // 启动浏览器并打开一个新页面
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
});
  const page = await browser.newPage();

  // 设置视口大小（可以根据需要调整）
  await page.setViewport({ width: 1920, height: 1080 });

  // 确定网站的协议
  const fullUrl = `${url}`;

  // 导航到指定网址
  await page.goto(fullUrl, { waitUntil: 'networkidle0' });

  // 截取网页的全屏
  const screenshotBuffer = await page.screenshot({ fullPage: true });

  // 将截图保存为图片文件
  await fsp.writeFile(outputPath, screenshotBuffer, 'base64');

  // 关闭浏览器
  await browser.close();
  const imagePath = `${outputPath}`;
  const img = fs.readFileSync(imagePath);
  return img;
}
function generateUniqueId(url) {
  // 创建一个 sha256 哈希对象
  const hash = crypto.createHash('sha256');
  
  // 更新哈希对象，传入需要生成唯一标识的数据
  hash.update(url);
  
  // 返回十六进制格式的哈希值，作为唯一标识
  return hash.digest('hex');
}