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
    // Build applicant information section
    const applicantInfo = [
      `**Minecraft Username:** ${data.minecraftUsername}`,
      `**Discord Username:** ${data.discordUsername}`,
      `**Age:** ${data.age}`,
      `**Platform:** ${data.platform}`,
    ].join('\n');

    // Build application details section
    const applicationDetails = [
      `**Why Join Unique SMP:**`,
      data.reason,
      '',
      `**Minecraft Experience:**`,
      data.experience,
    ].join('\n');

    // Build fields array
    const fields = [
      {
        name: 'APPLICANT INFORMATION',
        value: applicantInfo,
        inline: false,
      },
      {
        name: 'APPLICATION DETAILS',
        value: applicationDetails,
        inline: false,
      },
    ];

    // Add teammates section if present
    if (data.hasTeammates && data.teammates && data.teammates.length > 0) {
      const validTeammates = data.teammates.filter(
        t => t.minecraftUsername.trim() || t.discordUsername.trim()
      );

      if (validTeammates.length > 0) {
        const teammatesText = validTeammates
          .map((teammate, index) => {
            const mc = teammate.minecraftUsername.trim() || 'Not provided';
            const dc = teammate.discordUsername.trim() || 'Not provided';
            return `**Teammate ${index + 1}**\nMinecraft: ${mc}\nDiscord: ${dc}`;
          })
          .join('\n\n');

        fields.push({
          name: `TEAM MEMBERS (${validTeammates.length})`,
          value: teammatesText,
          inline: false,
        });
      }
    }

    const embed = {
      title: data.hasTeammates 
        ? 'NEW TEAM WHITELIST APPLICATION' 
        : 'NEW WHITELIST APPLICATION',
      color: 0x9333EA, // Red color
      fields,
      footer: {
        text: 'Unique SMP - Whitelist Management System',
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
        avatar_url: 'https://cdn.discordapp.com/icons/1345659957579878430/a6bcd9344e8dd73fdf8da215e33f18fb.webp?size=80&quality=lossless', // Optional: Add your server icon
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
