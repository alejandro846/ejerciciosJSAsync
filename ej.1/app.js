
const obtenerChiste = require("./library");

function funcionCallback(chiste){
    let chisteExtraido = chiste[0];
    console.log(chisteExtraido.setup);
    console.log(chisteExtraido.punchline);
}
obtenerChiste(funcionCallback);
