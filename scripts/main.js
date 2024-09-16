// 更改展示图片的函数
function changeImage(imageSource) {
    const displayedImg = document.querySelector('.displayed-img'); // 获取展示的图片元素
    displayedImg.src = imageSource; // 更改图片的src属性，显示新图片
  }
  
  // 获取覆盖层和变暗按钮元素
  const overlay = document.querySelector('.overlay');
  const darkenButton = document.querySelector('.dark');
  
  // 为变暗按钮添加点击事件监听器
  darkenButton.addEventListener('click', function() {
    // 判断当前覆盖层的不透明度
    if (overlay.style.opacity === '0') {
      overlay.style.opacity = '0.5'; // 设置覆盖层不透明度为0.5，实现变暗效果
      this.textContent = 'lighten'; // 更改按钮文本为"变亮"
    } else {
      overlay.style.opacity = '0'; // 清除覆盖层的不透明度，实现变亮效果
      this.textContent = 'darken'; // 更改按钮文本为"变暗"
    }
  });
  
