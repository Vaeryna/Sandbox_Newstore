const fs = require("fs");
const mkdirp = require("mkdirp");


//set cookies with format for the new folder
exports.setCookie = function (req, res) {
    console.log("recup: ", req.body.name);
    name = req.body.name
    const data2 = name.replace(/ /g, '_');
    res.cookie("name", data2)

    //Create folder
    mkdirp(`../../Magasins/${data2}`)
    res.send({message: `Cookie créé avec '${data2}' \n dossier créé avec '${data2}'`})
};

//Create folder for the new sign
exports.createFolder = function (req, res) {
    console.log("name ", req.cookies.name);
    let name = req.cookies.name;

    /* if (`../../Magasins/${name}` ) {
         res.send({message: "Folder already exist"})
     } else {*/
    mkdirp(`../../Magasins/${name}`)
    console.log("dossier créé");
    res.send({message: "Dossier créé"});
    //  }
};


//write a store file in the file "store.json"
exports.writeFileStore = function (req, res) {
    const storeName = req.params.storeName;

    const shopName = req.body.shopName;
    let data = JSON.stringify(req.body.shop);

    console.log('storename', storeName, '\n shopname', shopName, "\n data", data)
    fs.writeFileSync(`../../Magasins/${storeName}/store-${shopName}.json`, data);
    console.log("File written successfully\n");
    res.send({message: "Store create successfully"});
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


