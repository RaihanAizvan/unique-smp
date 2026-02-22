/**
 * Discord Webhook Integration
 * 
 * Sends whitelist applications to Discord via webhook
 */

export interface Teammate {
  minecraftUsername: string;
  discordUsername: string;
}

export interface WhitelistApplication {
  minecraftUsername: string;
  discordUsername: string;
  age: string;
  platform: string;
  reason: string;
  experience: string;
  hasTeammates: boolean;
  teammates?: Teammate[];
}

/**
 * Send whitelist application to Discord webhook
 */
export async function sendToDiscord(
  data: WhitelistApplication,
  webhookUrl: string
): Promise<{ success: boolean; error?: string }> {
  try {
    // Create a rich embed for Discord
    const fields = [
      {
        name: '🎯 Minecraft Username',
        value: `\`${data.minecraftUsername}\``,
        inline: true,
      },
      {
        name: '💬 Discord Username',
        value: `\`${data.discordUsername}\``,
        inline: true,
      },
      {
        name: '🎂 Age',
        value: data.age,
        inline: true,
      },
      {
        name: '🎮 Platform',
        value: data.platform,
        inline: true,
      },
      {
        name: '📝 Why Join?',
        value: data.reason,
        inline: false,
      },
      {
        name: '⛏️ Minecraft Experience',
        value: data.experience,
        inline: false,
      },
    ];

    // Add teammates if present
    if (data.hasTeammates && data.teammates && data.teammates.length > 0) {
      const teammatesText = data.teammates
        .filter(t => t.minecraftUsername.trim() || t.discordUsername.trim())
        .map((teammate, index) => {
          const mc = teammate.minecraftUsername.trim() || 'Not provided';
          const dc = teammate.discordUsername.trim() || 'Not provided';
          return `**${index + 1}.** MC: \`${mc}\` | Discord: \`${dc}\``;
        })
        .join('\n');

      if (teammatesText) {
        fields.push({
          name: '👥 Teammates',
          value: teammatesText || 'None provided',
          inline: false,
        });
      }
    }

    const embed = {
      title: data.hasTeammates ? '🎮 New Team Whitelist Application' : '🎮 New Whitelist Application',
      color: 0xDC2626, // Red-600 color
      fields,
      footer: {
        text: 'Unique SMP Whitelist System',
      },
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'Unique SMP',
        avatar_url: 'https://i.imgur.com/AfFp7pu.png', // Optional: Add your server icon
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      throw new Error(`Discord webhook failed: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Discord webhook error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send application',
    };
  }
}
