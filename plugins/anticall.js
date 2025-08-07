smd({ call: 'anticall' }, async (callEvent) => {
  try {
    if (!bots) bots = await bot_.findOne({ id: 'bot_' + callEvent.user });

    if (
      callEvent.fromMe ||
      !bots ||
      !bots.anticall ||
      bots.anticall === 'false'
    ) return;

    // Prepare allowed countries
    if (!antiCallCountries || !antiCallCountries[0]) {
      antiCallCountries = bots.anticall?.split(',') || [];
      antiCallCountries = antiCallCountries.filter(cc => cc.trim() !== '');
    }

    let allBlocked = bots.anticall.toString().includes('all');
    let isBlocked = allBlocked || antiCallCountries.some(cc =>
      callEvent.from?.toString().startsWith(cc)
    );

    if (isBlocked || callEvent.isBot) {
      await callEvent.send(antiCallMessage, {}, 'text', '', callEvent.user);
      await callEvent.decline(); // Always decline call
    }
  } catch (e) {
    console.error("Anti-call error:", e);
  }
});
