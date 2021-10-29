// 객체화
// 그 동안 만든 함수들을 객체에 프로퍼티로 만든다.
var Links = {
  setColor:function(color)
  {
    // querySelector 는 document라는 메인 객체에 존재하는 메서드라 볼 수 있겠다.
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length)
    {
      alist[i].style.color = color;
      i = i+1;
    }
  }
}
var Body = {
  setColor:function(color)
  {
    document.querySelector('body').style.color= color;
  }, // 프로퍼티 사이에  ,  표시는 필수
  setBackgroundColor:function(color)
  {
    document.querySelector('body').style.backgroundColor=color;
  }
}
function nightDayHanlder(self)
{
    var target = document.querySelector('body');
    if(self.value === 'night')
    {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor(powderblue);
    }
    else
    {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor(blue);
    }
}
