$(function(){
	var move = {
		content:$('.move .content'),
		stat0:'',
		stat1:'',
		stat2:'',
		sort_key:16,
		pn:0,
		init:function(){
			this.getData();
			this.typeClick();
			this.regionClick();
			this.timeClick();
			this.sortClick();
			this.pageClick();
		},
		getData:function(){
			var _this = this; 
			$.ajax({
				url: "https://sp0.baidu.com/8aQDcjqpAAV3otqbppnN2DJv/api.php?resource_id=28286&query=电影&sort_type=1&rn=8",
				data: {
					stat0: _this.stat0,
					stat1:_this.stat1,
					stat2:_this.stat2,
					sort_key: _this.sort_key,
					pn: _this.pn
				},
				dataType: 'jsonp',
				jsonp: 'cb',
				success: function(data){
					console.log(data);
					_this.handleDate(data);
				}
			});
			layer.load(2);
			//此处演示关闭
			setTimeout(function(){
			  layer.closeAll('loading');
			}, 1000);
		},
		handleDate:function(data){
			var result = data.data[0].result;
			var con = '';
			for(var i = 0 ,len = result.length;i<len;i++){
				con += `<div class="move-con">
							<img src="${result[i].kg_pic_url}">
							<p class="name">${result[i].ename}</p>
							<p class="score">${result[i].additional}</p>
						</div>`;
			}
			this.content.html(con);
		},
		typeClick:function(){
			var _this =this;
			$('.type .tag').click(function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				$('.page .page-item').eq(0).addClass('selected')
				.siblings().removeClass('selected');
				var tag = $(this).html();
				_this.stat0 = (tag == "全部" ? "" : tag);
				_this.pn = 0;
				_this.getData();
			})
		},
		regionClick:function(){
			var _this =this;
			$('.region .land').click(function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				$('.page .page-item').eq(0).addClass('selected')
				.siblings().removeClass('selected');
				var tag = $(this).html();
				_this.stat1 = (tag == "全部" ? "" : tag);
				_this.pn = 0;
				_this.getData();
			})
		},
		timeClick:function(){
			var _this =this;
			$('.time .data').click(function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				$('.page .page-item').eq(0).addClass('selected')
				.siblings().removeClass('selected');
				var tag = $(this).html();
				_this.stat2 = (tag == "全部" ? "" : tag);
				_this.pn = 0;
				_this.getData();
			})
		},
		sortClick:function(){
			var _this =this;
			$('.sort-key .item').click(function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				$('.page .page-item').eq(0).addClass('selected')
				.siblings().removeClass('selected');
				_this.sort_key = $(this).attr('sort_key');
				_this.pn = 0;
				_this.getData();
			})
		},
		pageClick:function(){
			var _this =this;
			$('.page .page-item').click(function(){
				$(this).addClass('selected').siblings().removeClass('selected');
				_this.pn = ($(this).html()-1)*8;
				_this.getData();
			})
		}


	};
	move.init();
})