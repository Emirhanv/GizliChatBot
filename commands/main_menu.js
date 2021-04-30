/*CMD
  command: main_menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){
Bot.sendKeyboard("💰 Balance\n👫 Referral,🎁 Bonus,💲Withdraw,\n⚙️Set wallet,📞Support", "*▶️ Refer and Earn Cash*")
}
if (user=="left"){
Bot.runCommand("/start");
}
