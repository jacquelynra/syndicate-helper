module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity('New World', { type: 'PLAYING' });
		console.log(`¡Bot listo! Loggeado como ${client.user.tag}`);
	},
};