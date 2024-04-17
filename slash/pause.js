const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Met la musique en pause"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Il n'y a pas de chansons dans la file d'attente")

		queue.setPaused(true)
        await interaction.editReply("Music has been paused! Utilisez `/resume` pour reprendre la musique")
	},
}
