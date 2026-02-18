import { EmbedBuilder } from "discord.js";
import GuildConfig from "../../../shared/models/GuildConfig.js";
import { AttachmentBuilder } from "discord.js";
import { generateWelcomeImage } from "../utils/welcomeImage.js";

export default {
  name: "guildMemberAdd",
  async execute(member) {
    const config = await GuildConfig.findOne({ guildId: member.guild.id });
    if (!config || !config.welcomeEnabled) return;

    const imageBuffer = await generateWelcomeImage(member);
    const attachment = new AttachmentBuilder(imageBuffer, { name: "welcome.png" });

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

    await channel.send({
      embeds: [embed],
      files: [attachment]
    });

    if (config.autoRoleId) {
      const role = member.guild.roles.cache.get(config.autoRoleId);
      if (role) await member.roles.add(role);
    }

    try {
      await member.send(`
    👋 Welcome to ${member.guild.name}!

    Here’s how to get started:

    1️⃣ Read the rules  
    2️⃣ Verify yourself  
    3️⃣ Open a ticket if you need help  

    Enjoy your stay!
      `);
    } catch (err) {
      console.log("User DMs closed");
    }
  }
};
