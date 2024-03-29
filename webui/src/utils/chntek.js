const axios = require('axios');

const host = 'http://iot.chntek.com:3410';
const proxyHost = 'http://iot.chntek.com:3411';

function Chntek() {
    this.timer = null;
    this.account = '';
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdCIsImV4cCI6MTYxMTUwMDM3NCwiaXNzIjoiSnd0S2V5TmFtZSIsImF1ZCI6Ikp3dEtleU5hbWUifQ.8nnKmig8Ar5uAC5WDZLxJZEl9mEpPsqbN4YrBt-H_UQ';
    this.warningsLength = 0;
    this.devices = {};
    this.ids = 0;

    this.regions = async (val) => {
        const {data} = await axios.get(`${proxyHost}/devices/regions`, {
            // params: {account: this.account},
            params: {account: val},
            headers: {'Authorization': this.token}
        });
        if (data.val) return data.val;
    };
    this.statusRecent = async (val) => {
        const {data} = await axios.get(`${proxyHost}/devices/status-recent`, {
            // params: {account: this.account},
            params: {id: val},
            headers: {'Authorization': this.token}
        });
        if (data.val) return data.val;
    };
    this.statusHistory = async (val, date_begin, date_end, size) => {
        const {data} = await axios.get(`${proxyHost}/devices/status-history`, {
            // params: {account: this.account},
            params: {id: val, date_begin: date_begin, date_end: date_end, size: size},
            headers: {'Authorization': this.token}
        });
        if (data.val) return data.val;
    };
    this.statusPrimary = async (val) => {
        const {data} = await axios.get(`${proxyHost}/devices/primary`, {
            // params: {account: this.account},
            params: {ids: val},
            headers: {'Authorization': this.token}
        });
        if (data.val) return data.val;
    };

    this.waringTypes = async () => {
        const {data} = await axios.get(`${proxyHost}/devices/warning-types`, {
            headers: {'Authorization': this.token}
        });
        if (data.val) return data.val;
    };

    this.login = async (account, password) => {
        let res = await axios.get(`${host}/api/user/login`, {params: {account, password}});
        if (res.data.err) throw res.data.err;
        localStorage.setItem('chntek-account', account);
        localStorage.setItem('chntek-token', res.data.val.token);
    };

    // this.warrigs = async (val, date, size) => {
    //     const {data} = await axios.get(`${proxyHost}/devices/warnings`, {
    //         // params: {account: this.account},
    //         params: {id: val, date: date, size: size},
    //         headers: {'Authorization': this.token}
    //     });
    //     if (data.val) return data.val;
    // };

    this.warrigs = async (val, date, size, type = '') => {
        const param = {
            id: val, date: date, size: size
        }
        if (type) {
            param.type = type
        }
        const {data} = await axios.get(`${proxyHost}/devices/warnings`, {
            // params: {account: this.account},
            params: param,
            headers: {'Authorization': this.token}
        });
        if (data.val) return data.val;
    };

    this.transUnitList = async () => {
        let val = [];
        for (let id of this.ids) {
            if (this.devices[id] == undefined || this.devices[id].latitude == null || this.devices[id].longitude == null) continue;
            const {data} = await axios.get(`${proxyHost}/devices/status-recent`, {params: {id}});

            for (let k in data.val[0]) {
                this.devices[id][k] = data.val[0][k]
            }

            val.push(this.devices[id]);
        }
        return val;
    };

    this.update = async () => {
        let version = window.cordova.plugins.version.getAppVersion();
        const {data} = await axios.get(`${proxyHost}/app/latest`);

        if (data.err) {
            alert('无法获取最新版本')
            return
        }

        if (-1 != data.val.indexOf(version + '.apk')) {
            alert('已是最新版本！')
            return
        }

        // var uri = encodeURI('http://dungbeetles.xyz/app-debug.apk')
        var uri = encodeURI(data.val)
        var fileURL = 'cdvfile://localhost/temporary/tuner.apk'
        var fileTransfer = new window.FileTransfer()
        fileTransfer.download(
            uri, fileURL, function (entry) {
                entry
                alert('确认并安装新版本更新！')
                window.cordova.plugins.fileOpener2.open('cdvfile://localhost/temporary/tuner.apk', 'application/vnd.android.package-archive')
            },
            function (error) {
                console.error('download error: ' + error.source + error.target + error.code)
            })
    }
}

document.addEventListener('deviceready', async () => {
})


const chntek = new Chntek();

// test();
export default chntek;