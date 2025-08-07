// AUTOCALL BLOCKER – ALWAYS ACTIVE
// BUILT FOR INFINITY TECH ZONE 🔥
// NO TURN OFF OPTION – PERMANENT PROTECTION

let { smd } = require('../lib/')

const antiCallMessage = 
"```🚫 Call Blocked\n\n🤖 This is Infinity Tech Zone Bot.\n📞 Sorry, calls are not supported.\n💬 Please send a text message instead.\n\n- Infinity Tech Zone```"

smd({
  call: 'anticall'
}, async (callEvent) => {
  try {
    // Skip if bot called itself
    if (callEvent.fromMe) return

    // Send auto-reply message to caller
    await callEvent.send(antiCallMessage, {}, 'text', '', callEvent.user)

    // Instantly decline the call
    await callEvent.decline()

  } catch (err) {
    console.error("Infinity Tech Zone AntiCall Error:", err)
  }
})
