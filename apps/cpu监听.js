import { spawn } from 'child_process';
import path from 'path';

const CPU = /^(#|\/)?cpu监听$/
const data =''
export class cpuli extends plugin {
    constructor() {
        super({
            name: 'cpuli',
            dsc: '监听cpu占用',
            event: 'message',
            priority: 1,
            rule: [{
                    reg: CPU,
                    fnc: "CPU"
                }
            ]
        }
        )
    }

    async CPU(e){
        //ִ收到命令后执行

// 定义 Python 程序的路径
        const pythonScriptPath = path.join('./plugins/ExceSama-plugin/monitor_performance.py');

// 使用 spawn 方法运行 Python 程序
        const pythonProcess = spawn('python', [pythonScriptPath]);

// 监听 Python 程序的输出
        pythonProcess.stdout.on('data', (data) => {
        console.log(`Output: ${data}`);
        let res = data
        e.reply(`${res}`)
        });

// 监听 Python 程序的错误输出
        pythonProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`);
        let res = data
        e.reply(`${res}`)
        });

// 监听 Python 程序退出事件
        pythonProcess.on('close', (code) => {
        console.log(`Python process exited with code ${code}`);
        let res = data
        e.reply(`${res}`)
        });
        
    
    }
}