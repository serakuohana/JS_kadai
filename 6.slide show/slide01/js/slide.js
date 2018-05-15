var flg=2;	//「2枚目に切り替え」からスタートするため、flg に 2 をセット

	$(function(){

		setInterval(function() {
			switch(flg){
        case 1:
					//1枚目に切り替え
					$(".img3").animate({opacity:0});

					$(".img1").css({"margin-left":"250px"});
					$(".img1").animate({
						opacity:1,
						"margin-left":"0px"
					},"slow");
					break;

				case 2:
					//2枚目に切り替え
					$(".img1").animate({opacity:0});

					$(".img2").css({"margin-left":"250px"});
					$(".img2").animate({
						opacity:1,
						"margin-left":"0px"
					},"slow");
					break;

				case 3:
					//3枚目に切り替え
					$(".img2").animate({opacity:0});

					$(".img3").css({"margin-left":"250px"});
					$(".img3").animate({
						opacity:1,
						"margin-left":"0px"
					},"slow");
					break;
			}


			flg++;
			if(flg>3){
				flg=1;	//flg が 3 を越えたら 1 に戻す
			}

		}, 3000);	//setInterval() で 3秒間隔で実行
	});
