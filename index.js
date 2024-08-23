
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    {
        "type" : "input",
        "name" : "url",
        "message" : "Enter the url : "
    }
  ])
  .then((answers) => {
    const url = answers.url;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('answer.png'));
    fs.writeFile("url.txt", url, (err) => {
        if(err) throw err;
        console.log("The file has been saved!");
    });
  });