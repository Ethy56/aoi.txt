const fs = require("fs");
const path = require("path");

async function add(self,file) {
	fs.promises.readFile(path.join(process.cwd(), "commands", file)).then((code) => {
		if (!code) {
			console.log("No code found in /commands/" + file + " it will be ignored.");
		}
		self.command({
			name: file.split(".")[0],
			code: "" + code
		});
	}).catch((e) => {
		throw e;
	});
};

function textInit(bot, folder) {
	var files = fs.readdirSync(path.join(process.cwd(), folder));
	console.log("Loading " + files.length + " command" + (files.length > 1 || files.length == 0 ? "s" : "") + " with aoi.txt")
	for (var i = 0; i < files.length; i++) {
		add(bot,files[i]);
	}
}

module.exports = { textInit };