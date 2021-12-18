
async function remove_bg (Url) {
	return new Promise (async (resolve, reject) => {
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
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
.then((respon) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
 fs.writeFileSync("no-bg.png", response.data);
 const remov = fs.readFileSync('./no-bg.png');
alpha.sendMessage(from, remov, image, {quoted: mek})
})
.catch((error) => {
    return console.error('Request failed:', error);
});
});
}

module.exports = { remove_bg }