import fs from 'fs';

const Ehelp = /^(#|\/)?ehelp$/

export class ehelp extends plugin {
    constructor() {
        super({
            name: 'ehelp',
            dsc: 'return help',
            event: 'message',
            priority: 1,
            rule: [ {
                    reg: Ehelp,
                    fnc: "Ehelp"
                }, 
            ]
        }
        )
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