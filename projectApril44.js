

function check1(){
alert("Hello ~ Q1:加塞是客家话里的“吃完了”，同样的发音在福建话是吃大便的意思:D /Q2:蘑菇的韩文是버섯(beosot)，韩国没有馒头所以没有特称，土豆的韩文是감자(KamJa)//Q4的解释在个别的选项里噢！//Q5：马来文中，星期一:Isnin|星期二:Selesa|星期三:Rabu|星期四:Khamis|星期五:Jumaat|星期六:Sabtu|星期日:Ahad//")}

var score=0;

//图片提示//
  function tips1(){
    var z = document.getElementById("firstpuzzle");
    z.style.display="block";
  }

  function tips2(){
    var y = document.getElementById("secondpuzzle");
    y.style.display="block";
  }

  function tips3(){
    var x = document.getElementById("secondpuzzleS");
    x.style.display="block";
  }

  function QA1(){
    var response=prompt("os：回答完整“星期__”");
    if (response=="星期二") {
      alert("正确答案！");
      score+=20;
    } else {
      alert("错误答案！")

    }
  }

  function QA2(){
    var response=prompt("os：回答完整“__时”");
    if (response=="申时") {
      alert("正确答案！");
      score+=20;
    } else {
      alert("错误答案！")

    }
  }
  function QA3(){
    var response=prompt("是7个字母的英文单词噢！全部小写！");
    if (response=="dessert") {
      alert("正确答案！");
      score+=15;
    } else {
      alert("错误答案！")

    }
  }
  function QA4(){
    var response=prompt("os：回答完整“星期__”");
    if (response=="星期四") {
      alert("正确答案！");
      score+=15;
    } else {
      alert("错误答案！")

    }
  }

  function QA5(){
    var response=prompt("os：回答完整“星期__”");
    if (response=="星期一") {
      alert("正确答案！");
      score+=15;
    } else {
      alert("错误答案！")

    }
  }

  function QA6(){
    var response=prompt("os: 四个字！嘿嘿是不是感觉刚看过");
    if (response=="海市蜃楼") {
      alert("正确答案！");
      score+=15;
    } else {
      alert("错误答案！")

    }
  }

  function QA7(){
    var response=prompt("os: 可以点第一题“拼写”的按钮噢！");
    if (response=="巳时") {
      alert("正确答案！");
      score+=15;
    } else {
      alert("错误答案！")

    }
  }

  function QA8(){
    var response=prompt("os: 可以点第一题“拼写”的按钮噢！");
    if (response=="酉时") {
      alert("正确答案！");
      score+=15;
    } else {
      alert("错误答案！")

    }
  }
//分数//

function scoreCount(){
  if(score==100){
    alert("你的分数是"+score+",你有令我羡慕的基础知识！好厉害！")
  }
  if (score>14&&score<=90) {
      alert("你的分数是"+score+"，真不错！恭喜恭喜！一起学习吧！")
  }
  if (score==0) {
      alert("你的分数是"+score+",有兴趣的话可以把这些知识记住噢！")
  }
  if (score>100) {
      alert("你的分数是"+score+",是不是重复做答了！给我抓到了啊哈哈！！")
  }
}
//礼物//


function song2(){
  var y = document.getElementById("songSILKROADb");}

  function song3(){
    var y = document.getElementById("songNorwegianWoodyt")}

  function song4(){
    var y = document.getElementById("songNorwegianWoodb");}


//Quiz选择题//
function answer1(){
  alert("错了！小声告诉你‘加塞’是客家话里的“吃完了”，同样的发音在福建话是吃大便的意思:D")}

function answer2(){
  alert("答对了！！厉害！")}

function answer3(){
  alert("错了！再答多一次吧~")}

function answer23(){
  alert("错！嘿嘿！是不是很像，真的是是一个有趣的误区噢！")}

function answer31(){
  alert("错了！Aurora有这层意思在噢！再尝试看看吧！")}

function answer34(){
  alert ("答对了！Aurora有极光、晨曦的意思噢！例如北极光的英文是Aurora borealis. Aurora也是古罗马神话中的黎明女神！")}

function answer41(){alert("海湾是一片三面环陆的海洋。可根据面积的大小而分为Gulf和Bay，如铜锣湾（Causeway Bay）、波斯湾（Persian Gulf）。")}
function answer42(){
  alert("丝路是丝绸之路,Silk Road，但其实我把这个选项放在这里是因为刚好在听梁静茹的《丝路》，真的很很很喜欢这首歌，推荐给打开这个对话框的你")}
function answer43(){alert("盆地的英文是Basin噢！不过Basin同时也有水盆、容器等意思。")}
function answer44(){alert("!!!!!!答对了!Oasis是绿洲的英文单词，想到这个题目是因为想到徐佳莹的《绿洲》，推荐给你！（不是那首失落沙洲，就是《绿洲》！）")}

function answer54(){
  alert("答对了！好厉害！不知道是从小学习马来文的关系吗，我就莫名觉得这个K/Khamis很有星期四的感觉和氛围，不知道你这样觉得吗哈哈哈")}

function answer61(){alert("答对啦！你真的好叻（读作：lek！）噢！")}
