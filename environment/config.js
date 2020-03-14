const appName = 'Simple Quiz Game';
const restartGameText = 'Do you want to play again? y/n >';
const finalGameText = 'Thanks for playing\n';
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
	output: process.stdout
});
rl.on("close", () => {
    process.stdout.write(`${finalGameText}\n`);
    process.exit(0);
});
module.exports = {
    appName,
    restartGameText,
    rl,
    finalGameText
}