let joinCache = [];

export function trackJoin(member) {
  const now = Date.now();
  joinCache.push(now);

  joinCache = joinCache.filter(t => now - t < 10000);

  if (joinCache.length > 10) {
    member.guild.systemChannel?.send("🚨 Raid detected! Locking server.");
    member.guild.channels.cache.forEach(channel => {
      channel.permissionOverwrites.edit(member.guild.roles.everyone, {
        SendMessages: false
      });
    });
  }
}
