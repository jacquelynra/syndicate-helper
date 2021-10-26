const Canvas = require("canvas"); // Para editar la imagen, TODO: pasarlo todo esto a un modulo
const tesseract = require("node-tesseract-ocr");
const sizeOf = require('image-size')
const { registerFont, createCanvas } = require('canvas') //Para registrar la font más adelante
// registerFont('./ShareTechMono-Regular.ttf', { family: 'Share Tech Mono' })

module.exports = {weaponocr, attocr} //, jobsocr, attocr, bioocr}


async function weaponocr(buffer) {

    const config = {
        lang: "eng",
        oem: 2,
        psm: 6,
        presets: ["digits"],
      }

    const weaponWidth = 23
    const weaponHeight = 23
     
    const weaponTopOne = 415
    const weaponTopTwo = 551
    const weaponTopThree = 687

    const weaponleftOne = 213
    const weaponleftTwo = 633
    const weaponleftThree = 1056
    const weaponleftFour = 1477

    const rectangles = [
    {
        left: weaponleftOne,
        top: weaponTopOne,
        weapon: "espada"
    },
    {
        left: weaponleftOne,
        top: weaponTopTwo,
        weapon: "ropera"
    },
    {
        left: weaponleftOne,
        top: weaponTopThree,
        weapon: "hachuela"
    },
    {
        left: weaponleftTwo,
        top: weaponTopOne,
        weapon: "lanza"
    },
    {
        left: weaponleftTwo,
        top: weaponTopTwo,
        weapon: "gran_hacha"
    },
    {
        left: weaponleftTwo,
        top: weaponTopThree,
        weapon: "martillo"
    },
    {
        left: weaponleftThree,
        top: weaponTopOne,
        weapon: "arco"
    },
    {
        left: weaponleftThree,
        top: weaponTopTwo,
        weapon: "mosquete"
    },
    {
        left: weaponleftFour,
        top: weaponTopOne,
        weapon: "bastonigneo"
    },
    {
        left: weaponleftFour,
        top: weaponTopTwo,
        weapon: "bastonvital"
    },
    {
        left: weaponleftFour,
        top: weaponTopThree,
        weapon: "manopla"
    }];

    var result = [];
    let background = await Canvas.loadImage(buffer);
    const dimensions = sizeOf(buffer)
    const canvas2 = Canvas.createCanvas(1920, 1080);
    const ctx2 = canvas2.getContext('2d');
    ctx2.drawImage(background, 0, 0, dimensions.width, dimensions.height, 0, 0, 1920, 1080);

    for  (var i = 0, len = 10; i <= len; i++) {

        const canvas = Canvas.createCanvas(weaponWidth, weaponHeight);
        //make it "2D"
        const ctx = canvas.getContext('2d');
        //ctx.filter= 'brightness(2.5) contrast(0.7)';
        ctx.drawImage(canvas2, rectangles[i].left, rectangles[i].top, weaponWidth, weaponHeight, 0, 0, weaponWidth, weaponHeight);

        const trimmedbuffer = canvas.toBuffer(); // Buffer a lo que venimos haciendo

        const text = await tesseract.recognize(trimmedbuffer, config)
        result.push(`${text.replace(/\D/g,'')}`);
        }

    // Setear todo lo que hicimos en una imagen
    return result;
}


async function attocr(buffer) {

    const config = {
        lang: "eng",
        oem: 2,
        psm: 6,
        presets: ["digits"],
      }

    const attWidth = 106
    const attHeight = 62
     
    const attTopOne = 258
    const attTopTwo = 368
    const attTopThree = 483
    const attTopFour = 596
    const attTopFive = 711

    const attLeft = 470

    const lvWidth = 60
    const lvHeight = 55
    const lvLeft = 256
    const lvTop = 946

    const rectangles = [
    {
        left: attLeft,
        top: attTopOne,
        width: attWidth,
        height: attHeight,
        att: "str"
    },
    {
        left: attLeft,
        top: attTopTwo,
        width: attWidth,
        height: attHeight,
        att: "dex"
    },
    {
        left: attLeft,
        top: attTopThree,
        width: attWidth,
        height: attHeight,
        att: "int"
    },
    {
        left: attLeft,
        top: attTopFour,
        width: attWidth,
        height: attHeight,
        att: "foc"
    },
    {
        left: attLeft,
        top: attTopFive,
        width: attWidth,
        height: attHeight,
        att: "cons"
    },
    {
        left: lvLeft,
        top: lvTop,
        width: lvWidth,
        height: lvHeight,
        att: "level"
    }];

    var result = [];
    let background = await Canvas.loadImage(buffer);
    const dimensions = sizeOf(buffer)
    const canvas2 = Canvas.createCanvas(1920, 1080);
    const ctx2 = canvas2.getContext('2d');
    ctx2.drawImage(background, 0, 0, dimensions.width, dimensions.height, 0, 0, 1920, 1080);

    for  (var i = 0, len = 5; i <= len; i++) {

        const canvas = Canvas.createCanvas(rectangles[i].width, rectangles[i].height);
        //make it "2D"
        const ctx = canvas.getContext('2d');
        ctx.filter= 'contrast(2) brightness(1.2)';
        ctx.drawImage(canvas2, rectangles[i].left, rectangles[i].top, rectangles[i].width, rectangles[i].height, 0, 0, rectangles[i].width, rectangles[i].height);

        const trimmedbuffer = canvas.toBuffer(); // Buffer a lo que venimos haciendo

        const text = await tesseract.recognize(trimmedbuffer, config)
        result.push(`${text.replace(/\D/g,'')}`);
        }

    // Setear todo lo que hicimos en una imagen
    return result;
}