const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("skipto").setDescription("Passe à une certaine piste #")
    .addNumberOption((option) => 
        option.setName("tracknumber").setDescription("La piste vers laquelle passer").setMinValue(1).setRequired(true)),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Il n'y a pas de chansons dans la file d'attente")

        const trackNum = interaction.options.getNumber("tracknumber")
        if (trackNum > queue.tracks.length)
            return await interaction.editReply("Numéro de piste invalide")
		queue.skipTo(trackNum - 1)

        await interaction.editReply(`Passé au numéro de piste ${trackNum}`)
	},
}
