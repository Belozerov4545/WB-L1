// 18. Подсчитать максимальный объем данных, 
// который можно записать в localStorage вашего браузера.

function getLeftStorageSize() {
    let itemBackup = localStorage.getItem("");
    let increase = true;
    let data = "1";
    let totalData = "";
    let trytotalData = "";
    while (true) {
        try {
            trytotalData = totalData + data;
            localStorage.setItem("", trytotalData);
            totalData = trytotalData;
            if (increase) data += data;
        } catch (e) {
            if (data.length < 2) break;
            increase = false;
            data = data.substr(data.length / 2);
        }
    }
    localStorage.setItem("", itemBackup);

    return `${totalData.length / 1e+6} MB`;
}

let storageLeft = getLeftStorageSize();
console.log(storageLeft);
document.write(storageLeft + "");

localStorage.clear();
let storageMax = getLeftStorageSize();
