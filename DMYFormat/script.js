if (!window?._momentFormat) {
    window._momentFormat = moment.prototype.format;
}

module.exports = {
    load() {
        console.log("DMY Dates Loaded");
        moment.prototype.format = function (str) {
            str = str.replace("MM/DD/YYYY", "DD/MM/YYYY");
            return window._momentFormat.bind(this)(str);
        };
    },
    unload() {
        console.log("DMY Dates Unloaded");
        moment.prototype.format = function (str) {
            return window._momentFormat.bind(this)(str);
        };
    },
}