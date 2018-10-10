

const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const data = fs.readFileSync("gulpfile.js", "utf-8");
const json1 = fs.readFileSync("package.json", "utf-8");
const inputArr = [];
const projectData = {
    "name": "YONE",
    "gulpfile": {
        "name": "gulpfile.js",
        "content": data
    },
    "package": {
        "name": "package.json",
        "content": json1
    },
    "dirsub": [
        {
            "dirName": "debug",
            "list": [
                {
                    "text": "Babel",
                    "type": "dir"
                }, {
                    "text": "Components",
                    "type": "dir"
                }, {
                    "text": "Less",
                    "type": "dir"
                }, {
                    "text": "Sass",
                    "type": "dir"
                }
            ]
        }, {
            "dirName": "formal",
            "list": [
                {
                    "text": "css",
                    "type": "dir"
                }, {
                    "text": "images",
                    "type": "dir"
                }, {
                    "text": "js",
                    "type": "dir"
                }
            ]
        }
    ]
}
process.stdout.write("请输入创建文件目录：")
rl.on("line", function (input) {
    fs.exists(input, function (bool) {
        if (bool) {
            // 路径存在
            if (projectData.name) {

                if (fs.existsSync(input +"/"+ projectData.name)) {
                    console.log(new Error("创建失败 --- 请判断"+ input + "下是否存在YONE文件夹"));
                } else {
                    fs.mkdirSync(input +"/"+ projectData.name);
                    fs.writeFileSync(input +"/"+ projectData.name + "/" + projectData.gulpfile.name, projectData.gulpfile.content);
                    fs.writeFileSync(input +"/"+ projectData.name + "/" + projectData.package.name, projectData.package.content);
                    if (projectData.dirsub && Array.isArray(projectData.dirsub)) {
                        projectData.dirsub.forEach(function (obj) {
                            fs.mkdirSync(input +"/"+ projectData.name + "/" + obj.dirName);
                            obj.list.forEach(function (obj1) {
                                if(obj1.type == "dir"){
                                    fs.mkdirSync(input +"/"+ projectData.name + "/" + obj.dirName + "/" + obj1.text);
                                }else{
                                    // 否则创建文件
                                }
                            })
                        })
                    }
                    console.log("创建成功！");
                }
            }
        } else {
            process.stdout.write("路径格式：E:\\某某文件夹")
        }
        rl.close();
    })

})
rl.on("close", function () {
    process.exit(0);
})




