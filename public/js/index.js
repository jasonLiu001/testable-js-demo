function detail(opts) {
    //属性
    this.userId = opts.userId;
    //其他属性
}

//方法
detail.prototype.showMoreDetail = function () {

};
//其他刷新


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
    if (条件一) {
        window.location.href = '//h5.ycapp.yiche.com/PublicTest/index';
    } else if (条件二) {
        window.location.href = '//h5.ycapp.yiche.com/PublicTest/Detail?id=1';
    } else {
        window.location.href = '//h5.ycapp.yiche.com/PublicTest/UploadSuccess?publicTestId=1';
    }
};

detail.prototype.getRedirectUrl = function () {
    if (条件一) {
        window.location.href = '//h5.ycapp.yiche.com/PublicTest/index';
    } else if (条件二) {
        window.location.href = '//h5.ycapp.yiche.com/PublicTest/Detail?id=1';
    } else {
        window.location.href = '//h5.ycapp.yiche.com/PublicTest/UploadSuccess?publicTestId=1';
    }
};


