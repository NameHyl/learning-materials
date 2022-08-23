class BaseModel {
    constructor(data, messag) {
        if (typeof data == "string") {
            this.messag = data;
            data = null
            messag = null
        }
        if (data) this.data = data;
        if (messag) this.messag = messag;
    }
}
class SuccessModel extends BaseModel {
    constructor(data, messag) {
        super(data, messag);
        this.state = 1
    }
}
class ErrorModel extends BaseModel {
    constructor(data, messag) {
        super(data, messag);
        this.state = 0
    }
}
module.exports = {
    SuccessModel,
    ErrorModel
};