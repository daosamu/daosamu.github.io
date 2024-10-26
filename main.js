// 定义一个名为 aliceTumbling 的数组，其中包含动画的关键帧
const aliceTumbling = [
  // 第一个关键帧：元素不旋转（0度）并且缩放比例为1（即原始大小）
  { transform: 'rotate(0) scale(1)' },
  // 第二个关键帧：元素旋转360度并且缩放比例为0（即元素消失）
  { transform: 'rotate(360deg) scale(0)' }
];

// 定义一个名为 aliceTiming 的对象，其中包含动画的时间配置
const aliceTiming = {
  // 动画的持续时间是2000毫秒，即2秒
  duration: 2000,
  // 动画只播放一次
  iterations: 1,
  // 动画结束后，元素将保持在动画的最后一个关键帧的状态
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

/*
// 方式1 回调函数
function doStep(alice, callback) {
  alice.animate(aliceTumbling, aliceTiming).finished.then(callback);
}

function show() {
  doStep(alice1, () => {
    // alice1 动画完成后，开始 alice2 的动画
    doStep(alice2, () => {
      // alice2 动画完成后，开始 alice3 的动画
      doStep(alice3, () => {
        // alice3 动画完成后，输出消息
        console.log("所有动画结束");
      });
    });
  });
}

*/

/*
// 方式2 Promise
function doStep(alice) {
  return alice.animate(aliceTumbling, aliceTiming).finished;
}

function show() {
  doStep(alice1)
    .then(() => doStep(alice2))
    .then(() => doStep(alice3))
    .then(() => console.log("所有动画结束"));
}

*/


// 方式3 async/await
function doStep(alice) {
  return alice.animate(aliceTumbling, aliceTiming).finished;
}

async function show() {
  await doStep(alice1);
  await doStep(alice2);
  await doStep(alice3);
  console.log("所有动画结束");

}


show();