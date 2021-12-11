let gengduo_ = document.getElementById('gengduo');
let linkText_ = document.getElementById('linkText');


let i = 0;
// 单数点击时变色，显示内容
touch.on(gengduo_, 'tap', function () {
    if (i++ % 2 === 0) {
        this.style.color = '#556B2F';
        $(linkText_).fadeIn(2000);
        linkText_.style.display = 'block';
    } else {
        this.style.color = '#379818';
        linkText_.style.display = 'none';
    }
});