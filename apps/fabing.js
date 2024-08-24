
import fetch from "node-fetch";

import {ciku} from '../resources/fabing/fbciku.js';

const Fabing = /^(#|\/)?发病(.*)$/

export class fabing extends plugin {
  constructor() {
    super({
        name: 'fabing',
        dsc: 'example',
        event: 'message',
        priority: 1,
        rule: [{
                reg: Fabing,
                fnc: "Fabing"
            }, 
        ]
    }
    )
};


  async Fabing(e) {
   let msg = "";

   for (let m of e.message) {
    if (m.type == 'at') {
      msg += m.text.replace("@", "");
      continue;
    }
    msg += m.text;
   }
   msg = msg.replace(/#|发病/g, "").trim();
   console.log(msg);
   let i = Math.round(Math.random() * (ciku.length - 1))

   let res = ciku[i].replace(/阿咪/g, msg);

   e.reply(res);
   return true;
}
}