const Discord = require('discord.js')
const client = new Discord.Client({ ws: { intents: Discord.Intents.GUILD_MEMBERS }})

client.on('ready', () => {
  console.log('connected as' + client.user.tag)
  client.user.setActivity('You', {type: 'WATCHING'})
});



client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user || receivedMessage.channel.type === "dm") {
    return
  } else if
   (receivedMessage.content.startsWith('!report')) {
     processCommand(receivedMessage)
  }
});



function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let arguments = splitCommand.slice(1)
    helpCommand(arguments, receivedMessage)
};



function helpCommand(arguments, receivedMessage) {
  if (arguments.length == 0) {
    receivedMessage.channel.send('!report "message" is required for this command to work')
  } else { // 184762977726103552
    // let roleID = "792872932221255691";
     let roleID = receivedMessage.guild.roles.cache.find(role => role.name === "Alert") + '';

    let membersWithRole = receivedMessage.guild.roles.cache.get(roleID).members.map(m=>m.user.id);

    // let membersWithRole = receivedMessage.guild.roles.cache.get(myRole).members;

    // console.log(`Got ${membersWithRole.size} members with that role.`);
    let i;
    for (i = 0; i < membersWithRole.length; i++){
      client.users.cache.get(membersWithRole[i]).send(`Report from ${receivedMessage.author.username}: ${receivedMessage.content.slice(7)}`);
};
console.log(membersWithRole);




  receivedMessage.react('🙊')
}};


client.login('NzkyODIzMTE0NDc1NjM0NzI5.X-jUEA.BkMHioUj6VTxnHHIhdoEXbwezF8')
