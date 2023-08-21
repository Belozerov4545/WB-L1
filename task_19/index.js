
async function getData() {
    const method = 'wall.get';
    const access_token = '2f829d1b2f829d1b2f829d1bca2c97fe0d22f822f829d1b4b61f49dffa791227fa966be';
    const owner_id = '-29534144';
    const domain = 'https://vk.com/lentach';
    const count = '50';
    const filter = 'all';
    const v = '5.131';
    let token = 'vk1.a.zoD2xeK-IPDN5TCI7grRs782-ByZjP_RmzGpheON7v-vnt_DVBqM-Rp4JnNZyTQONpYjvL4uNOe0S2AFkuOyCxlKr5a700jiztJvJC4NA0Fh1OBHauG_AWxXpNFKTSg4Q-mafyehpP0UnZsLw2tfK3mmevN8oWJ6akdQoH0HTwOjh5upK3oyOCtdgAGwQTSnR1Ay66Ld_n3zrosLyo1sPQ'

    // let ur = 'https://api.vk.com/method/wall.get?access_token=2f829d1b2f829d1b2f829d1bca2c97fe0d22f822f829d1b4b61f49dffa791227fa966be&owner_id=-29534144&domain=https://vk.com/lentach&count=50&filter=all&v=5.131 HTTP/1.1'
    // let url =`https://api.vk.com/method/wall.get?${access_token}&${owner_id}&${domain}&${count}&${filter}&${v} HTTP/1.1`;
    let url = 'https://oauth.vk.com/authorize?client_id=51733270&redirect_uri=http://127.0.0.1:5500/task_19/index.html&scope=offline,wall&response_type=token';
    const response = await fetch(url, {
        'token': token
    });
    const data = await response.json();
    console.log(data);
    return data;
}

getData()


// https://dev.vk.com/ru/reference#access_token=vk1.a.zoD2xeK-IPDN5TCI7grRs782-ByZjP_RmzGpheON7v-vnt_DVBqM-Rp4JnNZyTQONpYjvL4uNOe0S2AFkuOyCxlKr5a700jiztJvJC4NA0Fh1OBHauG_AWxXpNFKTSg4Q-mafyehpP0UnZsLw2tfK3mmevN8oWJ6akdQoH0HTwOjh5upK3oyOCtdgAGwQTSnR1Ay66Ld_n3zrosLyo1sPQ&expires_in=0&user_id=53818276

// let url ='https://api.vk.com/ru/method/wall.get'
