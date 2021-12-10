// 轮播图-1
var swiper1 = new Swiper('#swiper1', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
    speed: 300,
    autoplay: {
        delay: 3000
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    }
});

// 轮播图-2
var swiper2 = new Swiper('#swiper2', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 切换速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
    speed: 600,
    autoplay: {
        delay: 3000
    },
});

// 产品中心 更多
let productCenterMore_ = document.getElementById('productCenterMore');

touch.on(productCenterMore_, 'tap', function () {
    this.style.color = 'red';
    this.innerHTML = "加载中……";
});

// 新闻中心 更多
let newsCenterMore_ = document.getElementById('newsCenterMore');

touch.on(newsCenterMore_, 'tap', function () {
    this.style.color = 'red';
    this.innerHTML = "加载中……";
});

// 蜂花小课堂 更多
let classMore_ = document.getElementById('classMore');

touch.on(classMore_, 'tap', function () {
    this.style.color = 'red';
    this.innerHTML = "加载中……";
});