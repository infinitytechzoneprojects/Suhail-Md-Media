/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                             ＩＮＦＩＮＩＴＹ ＴＥＣＨ ＺＯＮＥ ＡＵＴＯ ＣＡＬＬ ＢＬＯＣＫＥＲ                               //
//                                                                                                      // 
//                                         Ｖ：1．0．0                                                   // 
//                                                                                                      // 
//            ██████╗ ██╗ ██████╗ ███╗   ██╗██╗███████╗██╗   ██╗                                        //
//            ██╔══██╗██║██╔═══██╗████╗  ██║██║██╔════╝██║   ██║                                        //
//            ██║  ██║██║██║   ██║██╔██╗ ██║██║█████╗  ██║   ██║                                        //
//            ██║  ██║██║██║   ██║██║╚██╗██║██║██╔══╝  ██║   ██║                                        //
//            ██████╔╝██║╚██████╔╝██║ ╚████║██║███████╗╚██████╔╝                                        //
//            ╚═════╝ ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝╚══════╝ ╚═════╝                                         //
//                                                                                                      //
//              This plugin permanently blocks all calls to prevent bot crashes and disruptions.        //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

*
   * @project_name : Suhail-Md / Infinity Tech Zone Custom Build
   * @author : Infinity Tech Zone <https://whatsapp.com/channel/0029VaH4SmY6LmQtUdSyOX0i>
   * @description : Permanently reject all WhatsApp calls with branded auto-reply.
   * @version 1.0.0 
   * @plugin_date : 2025-08-07
   * @license : GPL-3.0
*/

const { smd } = require('../lib');

smd({
  call: 'autocallblocker',
  desc: "Automatically decline all incoming calls with warning",
  filename: __filename,
  public: true
}, 
async (call) => {
  try {
    if (call.fromMe) return; // Skip if bot itself is making the call

    // Reply message sent to caller
    const warningMsg = `🚫 *Call Blocked by Infinity Tech Zone Bot*\n\n📞 Calls are not allowed.\n💬 Please send a text message instead.\n\nBot by: Infinity Tech Zone`;

    // Send warning
    await call.send(warningMsg, {}, 'text', '', call.user);

    // Instantly reject the call
    await call.decline();

  } catch (err) {
    console.error("AutoCallBlocker Error:", err);
  }
});
