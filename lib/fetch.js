/*
  * Sript By Thadz BotZ
  * Contact : wa.me/6288232991394
  * Library : @adiwajshing/baileys-md
*/
const fetchh = require('node-fetch')

exports.fetch = fetch = (url) => new Promise(async (resolve, reject) => {
    fetchh(url)
        .then(response => response.json())
        .then(res => {
             resolve(res)
         })
         .catch((err) => {
             reject(err)
         })
 })
