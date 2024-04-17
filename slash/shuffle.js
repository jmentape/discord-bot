const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("melange").setDescription("Mélange la file d'attente"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Il n'y a pas de chansons dans la file d'attente")

		queue.shuffle()
        await interaction.editReply(`La file d'attente de ${queue.tracks.length} chansons a été mélangée !`)
	},
}
