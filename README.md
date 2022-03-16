# aoi.txt
Code with aoi.js using .txt files

## Setup
You first want to start off with a blank canvas with aoi
```
const aoi = require("aoi.js");

const Bot = new aoi.Bot({
	token: process.env.token,
	prefix: process.env.prefix,
	intents: ["GUILDS", "GUILD_MESSAGES"]
});

Bot.onMessage();
```
after that you can pull in the function and call it
```
const { textInit } = require("aoi.txt");
// Bot refers to your instance of an aoi.js bot, "commands" refers to the commands folder name
textInit(Bot, "commands");
```
from there every txt file in commands will be read, the command name will be name.txt and used by \<prefix>name
txt files should contain the code for the command such as

## Example
ping.txt
```
Pong $ping ms!
```
index.js
```
const aoi = require("aoi.js");
const { textInit } = require("aoi.txt");

const Bot = new aoi.Bot({
	token: process.env.token,
	prefix: process.env.prefix,
	intents: ["GUILDS", "GUILD_MESSAGES"]
});

textInit(Bot, "commands");

Bot.onMessage();
```
