const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("reprendre").setDescription("Reprend la musique"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Il n'y a pas de chansons dans la file d'attente")

		queue.setPaused(false)
        await interaction.editReply("La musique a été mise en pause ! Utilisez `/pause` pour reprendre la musique")
	},
}
