const { execFile } = require('child_process');
const BattleBot = require('../modules/BattleBot.js');

exports.run = (client, message, args, config) => {
  // Query SCP
  let battlebot = new BattleBot();
  let queryArgs = { ip: '208.100.45.135:28000' };
  battlebot.displayServerDetail(queryArgs, message, args, config);
};