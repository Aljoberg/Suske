const TikTok = require("./tiktok")

;(async () => {
	const client = new TikTok()

	await client.generateDevice()
	await client.registerDevice()

	const profile = await client.registerAccount("supemeralafio@gmail.com","y-my-eeeeemy-ee")

	console.log(profile)
})()
