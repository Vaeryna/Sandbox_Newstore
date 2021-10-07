const fs = require("fs");
const mkdirp = require("mkdirp");
const {exists} = require("fs");

//set cookies with format for the new folder
exports.setCookie = function (req, res, next) {
    console.log("recup: ", req.body.name);
    name = req.body.name
    const data2 = name.replace(/ /g, '_');
    res.cookie("name", data2)
    console.log("data trim", data2);
    next();
};

//Create folder for the new sign
exports.createFolder = function (req, res, next) {
    console.log("name ", req.cookies.name);
    let name = req.cookies.name;

    if (`../../Magasins/${name}`) {
        res.send({message: "Folder already exist"})
    } else {
        mkdirp(`../../Magasins/${name}`).then((made) =>
            console.log(`made directories, starting with ${made}`)
        );
        console.log("dossier créé");
        res.send({message: "Dossier créé"});
    }
    next();
};


//write a store file in the file "store.json"
exports.writeFileStore = function (req, res, next) {
    const StoreName = req.cookies.name;
    let data = JSON.stringify(req.body);

    fs.writeFileSync(`../../Magasins/${StoreName}/store.json`, data);
    console.log("File written successfully\n");
    res.send({message: "Fichier enregistré"});

    next();
};

//write a product in the file "product.json"
exports.writeFileProduct = function (req, res, next) {
    const StoreName = req.cookies.name;
    let data = JSON.stringify(req.body);
    console.log("data", data)

    fs.appendFileSync(`../../Magasins/${StoreName}/product.json`, data);

    res.send({message: "Produit ajouté"})

    next()
}




