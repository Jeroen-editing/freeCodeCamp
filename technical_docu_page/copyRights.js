let date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const months = ["january", "february", "march", "april", "mei", "june", "july",
                "august", "september", "october", "november", "december" ]; 

const copyRight = () => {
    let hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
    let minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
    let today = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} &nbsp;&nbsp; ${date.getFullYear()}`;

    document.getElementById("copyRights").innerHTML = `&copy;&nbsp;&nbsp; Antwerp:&nbsp;&nbsp; ${today} - ${hour}:${minutes}.`;
}

copyRight();