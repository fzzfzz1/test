var open = document.querySelector('.logo_open');//获取三条杠,也就是打开按钮
var aside = document.querySelector('.aside');//获取侧边栏
// 显示侧边栏
open.addEventListener('click', function () {
   aside.style.left = '0';
});
var close = document.querySelector('.close');//获取关闭按钮
// 关闭侧边栏
close.addEventListener('click', function () {
   aside.style.left = '-260px';
});
var down = document.querySelectorAll('.aside_nav>li>a');//获取侧边栏的li,点击下滑显示
var down_content = document.querySelectorAll('.aside_subnav');//获取下滑内容
var down_fu = document.querySelectorAll('.aside_nav li .icon-jiabeifen');//获取符号
// console.log(down,down_content,down_fu);
for (var i = 0; i < down.length; i++) {
   down[i].index = i;
   // 下滑或上拉内容
   down[i].addEventListener('click', function() {
      if (down_content[this.index].style.maxHeight == 0) {
         down_content[this.index].style.maxHeight = down_content[this.index].scrollHeight + 'px';
         down_fu[this.index].style.transform = 'rotate(-45deg)';
      } else {
         down_content[this.index].style.maxHeight = null;
         down_fu[this.index].style.transform = 'rotate(0deg)';
      }
   });
}
var search_input = document.querySelector('.search_input');//获取搜索文本框
var search_content = document.querySelector('.search_content');//获取搜索内容
var search_span = document.querySelectorAll('.search_content ul li span');//获取搜索内容里的span
console.log(search_span.length);

search_input.addEventListener('focus', function() {
   // search_content.style.display = 'block';
   search_content.style.height = '250px';
   search_content.style.border = '1px solid #ccc';
});
search_input.addEventListener('blur', function() {
   // search_content.style.display = 'none';
   search_content.style.height = '0';
   search_content.style.border = '0px solid #fff';
});
for (var i = 0; i < search_span.length; i++) {
   search_span[i].addEventListener('click',function() {
      console.log(this);
      search_input.value = this.innerHTML;
   });

   
}