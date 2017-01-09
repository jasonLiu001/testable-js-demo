function detail() {
}


detail.prototype.init = function () {
    var self = this;
    $.ajax({
        url: '//localhost:3030/api/getData',
        type: 'GET',
        success: function (data) {
            self.initData(data);
        },
        error: function () {
        }
    });
};

detail.prototype.initData = function (data) {
    //回调函数
};

detail.prototype.addBtnSureHanlder = function () {
    var self = this;
    $('#btn_sure').on('click', function () {
        self.btnSureHandler();
    });
};

detail.prototype.btnSureHandler = function () {
    //click事件处理函数
};

detail.prototype.loadMore = function () {
    var self = this;

    function getMore() {
        //方法实现
    }

};

detail.prototype.pageRedirect = function () {

};
