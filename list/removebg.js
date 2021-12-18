let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
alpha = new WAConnection()

async function remove_bg(Url) {
	return new Promise (async (resolve, reject) => {
const FormData = require('form-data');
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_url', `${Url}`);

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'UBhMUo7FNNdEZ6fmkyAMrAUA',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync("no-bg.png", response.data);
 alpha.sendMessage(from, fs.readFileSync('./no-bg.png'), image, { quoted: mek , caption: 'Done'})
})
.catch((error) => {
    return console.error('Request failed:', error);
});
}

module.exports = { remove_bg }