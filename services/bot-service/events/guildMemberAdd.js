import { EmbedBuilder } from "discord.js";
import GuildConfig from "../../../shared/models/GuildConfig.js";

export default {
  name: "guildMemberAdd",
  async execute(member) {
    const config = await GuildConfig.findOne({ guildId: member.guild.id });
    if (!config || !config.welcomeEnabled) return;

    const channel = member.guild.channels.cache.get(config.welcomeChannelId);
    if (!channel) return;

    const message = config.welcomeMessage
      .replace("{user}", `<@${member.id}>`)
      .replace("{server}", member.guild.name);

    const embed = new EmbedBuilder()
      .setColor("#F97316") // Brand orange
      .setTitle("👋 Welcome!")
      .setDescription(message)
      .setThumbnail(member.user.displayAvatarURL())
      .setFooter({ text: `Member #${member.guild.memberCount}` })
      .setTimestamp();

    await channel.send({ embeds: [embed] });

    if (config.autoRoleId) {
      const role = member.guild.roles.cache.get(config.autoRoleId);
      if (role) await member.roles.add(role);
    }
autoRoleId: String
  }
};
