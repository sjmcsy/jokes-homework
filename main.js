
    // 测试脚本是不是能正常地运行的一种方法。
    // 经过测试，可以使用。
    // document.querySelector('html').style.backgroundColor = 'red';
    /* 
    // 下面是正文代码。
    /*
    将刚下载的文本文件中的“1. 定义变量和函数”标题项下所有代码复制粘贴至 main.js 中。此时你就有了三个变量（customName 是对“输入自定义的名字”文本框的引用，randomize 是对“随机生成笑话”按钮的引用，story 是对 HTML 底部的、准备存放笑话的 <p> 元素的引用）和一个函数（randomValueFromArray() 取一个数组作参数，随机返回数组中的一个元素）。
    */
    const customName = document.getElementById('customname');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');

    function randomValueFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /*
    然后是文本文件的第二节——“2. 纯文本字符串”。这里包含了一些字符串，这些字符串是项目的输入信息。你应该 在 main.js 文件中用变量来保存它们。
    用 storyText 变量保存第一个长字符串，“今天气温……”。
    用 insertX 数组保存第一组三个字符串，“怪兽威利……”。
    用 insertY 数组保存第二组三个字符串。“肯德基……”。
    用 insertZ 数组保存第三组三个字符串。“自燃了……”。
    */

    let storyText = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。';

    let insertX = ['怪兽威利','大老爹','圣诞老人'];
    let insertY = ['肯德基','迪士尼乐园','白宫'];
    let insertZ = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了'];

    /*
    - 为 randomize 变量增加一个点击事件的监听器。于是当所引用的按钮被点击时，result() 函数就会运行。
    - 为代码添加一个未完成的 result() 函数定义。本测验剩下的工作就是完成这个函数，让程序正常运行起来。

    */
    randomize.addEventListener('click', result);

    function result() {

        let newStory = storyText;

        let xItem = randomValueFromArray(insertX);
        let yItem = randomValueFromArray(insertY);
        let zItem = randomValueFromArray(insertZ);

        newStory = newStory.replace(':inserta:' , xItem);
        newStory = newStory.replace(':inserta:' , xItem);
        newStory = newStory.replace(':insertb:' , yItem);
        newStory = newStory.replace(':insertc:' , zItem);

    if(customName.value !== '') {
    let name = customName.value;
        newStory = newStory.replace('李雷', name);
    }
    // 1公斤 = 2.2磅
    // F 华氏度 = 9/5*C+32，这是个神奇的公式。
    if(document.getElementById("american").checked) {
    let weight = Math.round(130*2.2) + ' 磅';
    let temperature = Math.round(9/5*34+32) + ' 华氏度';
    newStory = newStory.replace('130 公斤', weight);
    newStory = newStory.replace('34 摄氏度', temperature);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
    }


