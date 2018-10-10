new Vue({
    el: "#app",
    data: {
        imgsrc: "php/code.php",
        name: "",
        pass: "",
        passed: "",
        agreeflag: true,
        isshown: false,
        isshowp: false,
        isshowe: false,
        isGreen: true,
        userIndex: 1,
        flagname: false,
        flagpass: false,
        flagpassed: false,
        code: "",
    },
    computed: {
        usertext: function () {
            switch (this.userIndex) {
                case 1:

                    return '用户名输入有误，3-18个字符';
                    break;
                case 2:

                    return '该用户已被注册';
                    break;
                case 3:

                    return '该账号可用';
                    break;
                case 4:

                    return '密码格式正确'
                    break;
                case 5:

                    return '密码格式不正确'
                    break;
                case 6:

                    return '确认密码正确'
                    break;
                case 7:

                    return '确认密码不正确'
                    break;
            }
        }
    },
    watch: {
        passed: function (newval) {
            this.isshowe = true;
            this.isshown = false;
            this.isshowp = false;
            console.log(this.pass)
            if (this.pass == newval) {
                this.flagpassed = true
                this.userIndex = 6;
                this.isGreen = true;
            } else {
                this.flagpassed = false;
                this.userIndex = 7;
                this.isGreen = false;
            }
        },
        pass: function (newval) {
            this.isshowe = false;
            this.isshown = false;
            this.isshowp = true;
            const regPass = /^[a-z0-9]{6,18}$/;
            if (regPass.test(newval)) {
                this.flagpass = true;
                this.userIndex = 4;
                this.isGreen = true;
            } else {
                this.flagpass = false;
                this.userIndex = 5;
                this.isGreen = false;
            }
        },
        name: function (newval) {
            console.log(newval)
            const reg = /^\d{3,18}$/g
            this.isshowe = false;
            this.isshown = true;
            this.isshowp = false;
            if (reg.test(newval)) {
                this.$http.post('php/user.json').then((res) => {
                    console.log(res)
                    if (res.body) {
                        if (res.body[newval]) {
                            // console.log(res.body[newval])
                            this.flagname = false;
                            this.userIndex = 2;
                            this.isGreen = false;
                        } else {
                            this.flagname = true;
                            this.userIndex = 3;
                            this.isGreen = true;
                        }
                    } else {
                        this.flagname = true;
                        this.userIndex = 3;
                        this.isGreen = true;
                    }
                })
            } else {
                this.flagname = false;
                this.userIndex = 1;
                this.isGreen = false;
            }

        }
    },
    methods: {
        yanz: function () {

            var num = Math.random()
            this.imgsrc = "php/code.php?&n=4&s=20&w=180&h=58&num=" + num
            // &n=4&s=20&w=180&h=58"
            // console.log(this.imgsrc)
        },
        agree: function () {
            this.agreeflag = !this.agreeflag;
        },
        text: function () {
            if (this.passed !== this.pass) {
                this.isshowe = true;
                this.isshown = false;
                this.isshowp = false;
                this.userIndex = 7;
                this.isGreen = false;
                return;
            }
            if (!this.code) {
                alert("请输入验证码")
                return;
            }
            console.log(this.flagname, this.flagpass, this.flagpassed)
            if (this.flagname && this.flagpass && this.flagpassed) {
                this.$http.get("php/reg.php?&code=" + this.code).then((res) => {
                    // console.log(red)
                    if (res.body.result == "success") {
                        if (this.agreeflag) {
                            let userObj = {
                                username: this.name,
                                password: this.pass
                            }
                            this.$http.post("php/regist.php", this.updateUserInfo(userObj), {
                                headers: {
                                    "content-Type": "application/x-www-form-urlencoded"
                                }
                            })
                            window.open("login.html")

                        } else {
                            alert("协议未勾选")
                        }
                    } else {
                        alert("验证码错误")
                        this.yanz()
                    }
                })
            }
        },
        updateUserInfo: function (obj) {
            //将字符串转换成
            //encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
            const arr = [];
            for (let i in obj) {
                arr.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
            }
            const str = arr.join("&");
            console.log(str)
            return str;
        }

    }
})