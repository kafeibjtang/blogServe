const mongoose = require('mongoose')
const {
    formatDate
} = require('../core/util/util')
const schema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    //更新日期
    date: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
        get(val) {
            return formatDate(new Date(val), 'yyyy年MM月dd日 hh:mm:ss')
        }
    },
    //用户 id
    uid: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true
    },
    fullname: {
        type: String,
        default: "匿名用户"
    },
    email: {
        type: String,
        validate: {
            validator: function (val) {
                return /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(val)
            },
            message: "请输入合法邮箱地址"
        }
    },
})
schema.set('toJSON', {
    getters: true
})

module.exports = mongoose.model('Msg', schema)