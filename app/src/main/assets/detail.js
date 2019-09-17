var proMaxHeight = 15;
var proMaxWidth = 15;
function proDownImage(ImgD){
      var image=new Image();
      image.src=ImgD.src;
      if(image.width>0 && image.height>0){
      var rate = (proMaxWidth/image.width < proMaxHeight/image.height)?proMaxWidth/image.width:proMaxHeight/image.height;
    if(rate <= 1){
     ImgD.width = image.width*rate;
     ImgD.height =image.height*rate;
    }
    else {
                          ImgD.width = image.width;
                          ImgD.height =image.height;
                  }
      }
}
function appguanggao (){
   var ebRand = Math.random()+'';
   ebRand = ebRand * 1000000;
   document.write('<scr'+'ipt src="http://bsch.serving-sys.com/BurstingPipe/adServer.bs?cn=rsb&c=28&pli=21797106&PluID=56&w=640&h=330&dlm=3&ucm=true&mb=1&ord=' + ebRand + '"></scr' + 'ipt>');

}
function JSCallOc1(){
            test1();

        }



    var arrImg,imgOldW,imgOldH;
	function CImg1(screenw){
		imgOldW=new Array;
		imgOldH=new Array;
		arrImg = document.getElementById("content1").getElementsByTagName("IMG");
		for(var j=0;j<arrImg.length;j++){

			imgReady(arrImg[j], function () {
				//$("#test_msg").append(this.src + 'size ready: width=' + this.width + '; height=' + this.height + '<br/>');

       CImg(this.obj,this.width,this.height,screenw);

			});

		}
		return false;
	}
    function CImg(obj,width,height,screenw){
		if(width > screenw){
           height = screenw * height / width;
           width = screenw;
           obj.width=width;
           obj.height=height;
                           //$("#test_msg").append(j+'ok');
           }else{
           obj.width=width;
           obj.height=height;

           }
	}

	/**
	 * 图片头数据加载就绪事件 - 更快获取图片尺寸
	 * @version	2011.05.27
	 * @see		http://blog.phpdr.net/js-get-image-size.html
	 * @param	{String}	图片路径
	 * @param	{Function}	尺寸就绪
	 * @param	{Function}	加载完毕 (可选)
	 * @param	{Function}	加载错误 (可选)
	 * @example imgReady('http://www.google.com.hk/intl/zh-CN/images/logo_cn.png', function () {
			alert('size ready: width=' + this.width + '; height=' + this.height);
		});
	 */
	var imgReady = (function () {
		var list = [], intervalId = null,

		// 用来执行队列
		tick = function () {
			var i = 0;
			for (; i < list.length; i++) {
				list[i].end ? list.splice(i--, 1) : list[i]();
			};
			!list.length && stop();
		},

		// 停止所有定时器队列
		stop = function () {
			clearInterval(intervalId);
			intervalId = null;
		};

		return function (oImg, ready, load, error) {
			var onready, width, height, newWidth, newHeight,
				img = new Image();

			img.src = oImg.src;
			img.obj = oImg;

			// 如果图片被缓存，则直接返回缓存数据
			if (img.complete) {
				ready.call(img);
				load && load.call(img);
				return;
			};

			width = img.width;
			height = img.height;

			// 加载错误后的事件
			img.onerror = function () {
				error && error.call(img);
				onready.end = true;
				img = img.onload = img.onerror = null;
			};

			// 图片尺寸就绪
			onready = function () {
				newWidth = img.width;
				newHeight = img.height;
				if (newWidth !== width || newHeight !== height ||
					// 如果图片已经在其他地方加载可使用面积检测
					newWidth * newHeight > 1024
				) {
					ready.call(img);
					onready.end = true;
				};
			};
			onready();

			// 完全加载完毕的事件
			img.onload = function () {
				// onload在定时器时间差范围内可能比onready快
				// 这里进行检查并保证onready优先执行
				!onready.end && onready();

				load && load.call(img);

				// IE gif动画会循环执行onload，置空onload即可
				img = img.onload = img.onerror = null;
			};

			// 加入队列中定期执行
			if (!onready.end) {
				list.push(onready);
				// 无论何时只允许出现一个定时器，减少浏览器性能损耗
				if (intervalId === null) intervalId = setInterval(tick, 40);
			};
		};
	})();

    function bbbpost(title,author,time,content1,source,number,zanP,image,screenw1,shopping){
            $('.tit').html(title);
            $('.circle').attr("src",image);
            $('#author').html(author);
            $('#time').html(time);
            $('#content1').html(content1);

            CImg1(screenw1);

            document.getElementById("source").style.visibility='visible';
            $('#source').html(source);

            //var shopping1=[{"id":"001","item":"3G","opt_text":60},{"id":"002","item":"4G","opt_text":30},{"id":"003","item":"5G","opt_text":10}];
           // getList(0,shopping,1);
            $('#vote-wrap').html(voteshow(1,shopping,true));
             click1(1);

            click_up_btn();

            // AddImgClickEvent(content1);
        }

//$('#vote-item-wra').on('click', 'li',function() {
//     var _this = $(this),
//     voteItem = _this.parent('.vote-item-wrap'),
//      btn = _this.parent('.vote-item-wrap').siblings('.vote-btn');
//      $(voteItem).find('.active').length == 0 ? $(btn).addClass('disable-vote-btn') : $(btn).removeClass('disable-vote-btn');
//})
// 投票
// 投票选项选择
var arr_1=new Array();//多选时被点击的item数组
var arr_only;//单选时被点击的item数组
function click1 (number){
$('.vote-wrap').on('click', 'li', function() {
  var icon= $(this).find('p.checkbefore');
   var _this=$(this);
arr_only=new Array();
   if(number==1){

   if(_this.parent('.vote-wrap').hasClass("activte")){
    if($("p.checkbefore").hasClass('checkafter')){
      if(icon.hasClass('checkafter')){
        $("p.checkbefore").removeClass('checkafter');
        arr_only.splice(0,1);
      }else{
      $("p.checkbefore").removeClass('checkafter');
        icon.addClass('checkafter');
        arr_only.push($('.vote-wrap li').index(this));
      }
    }else{
     icon.addClass("checkafter");
     arr_only.push($('.vote-wrap li').index(this));
    }
   }else{

   icon.addClass('checkafter');
   arr_only.push($('.vote-wrap li').index(this));
   _this.parent('.vote-wrap').addClass('activte');
   }
   }else if(number>1){

   if(icon.hasClass('checkafter')){
      icon.removeClass('checkafter');
      arr_1=removeArr($('.vote-wrap li').index(this),arr_1);
      _this.find('span.votenamestyle').html(arr_only.length);
   }else if(arr_1.length<number) {
     icon.addClass('checkafter');
     arr_1.push($('.vote-wrap li').index(this));
     _this.find('span.votenamestyle').html(arr_only.length);
   }else if(arr_1.length ==number) {

   }

   }
  if(arr_1.length>0 ||arr_only.length>0){
         $('#vote-btn_my').css("background","red");
         $('#vote-btn_my').css("color","white");
       }else if(arr_1.length==0||arr_only.length==0){
         $('#vote-btn_my').css("background","#F2F2F2");
         $('#vote-btn_my').css("color","#999999");
       }

})
}
function click_up_btn(){
  $('#vote-btn_my').click(function (event){
     if(arr_1.length>0){

      c114.runAndroidMethod(arr_1);
     }else if(arr_only.length>0){

        c114.runAndroidMethod(arr_only);
     }
  });
}
function removeArr(value,arr){
  var pos=  $.inArray(value,arr);
       arr.splice(pos,1);
      return arr;
}


function voteshow(type,arr,result){
     var str='';
     if(result){
     //可以投票
       if(type== '1'){
       //投票时显示百分比
          for(var i =0;i<arr.length;i++){
              str +='<li class="vote-item-wrap li">'+
              '<div  class="voteitem-my"><span  class="votenamestyle" >'+ arr[i].item +'</span><p  class="checkbefore" ></p></div>'+
              '<div class="percent-wrap">' +
                                                      '<div class="percent-inner"><span class="bar" style="width:' + arr[i].opt_text + '%"></span></div>' +
                                                      '<span class="percent-val">' + arr[i].opt_text + '%</span>' +
                                                  '</div>' +
              '</li>';
          }
       }else{
       //投票时不显示百分比
          for(var i =0;i<arr.length;i++){
                        str +='<li >'+
                        '<div class="voteitem-my"><span style="font-size:14px;">'+ arr[i].item +'</span><p  class="checkbefore" ></p></div>'+
                        '</li>';
                    }
       }
     }else{
       //投票后 显示的结果
       for(var i =0;i<arr.length;i++){
                     str +='<li class="vote-item-wrap li">'+
                     '<div  class="voteitem-my"><span  class="votenamestyle" >'+ arr[i].item +'</div>'+
                     '<div class="percent-wrap">' +
                                                             '<div class="percent-inner"><span class="bar" style="width:' + arr[i].opt_text + '%"></span></div>' +
                                                             '<span class="percent-val">' + arr[i].opt_text + '%</span>' +
                                                         '</div>' +
                     '</li>';
                 }
     }
     return str;
}



     function chak(){
       console.log(this.id);
     }


     function objclick(){alert('111')
     };



