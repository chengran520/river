var format = {
		//水库类型 1山区水库、2丘陵区水库、3平原区水库   
		formatResTp:function(val){
			var str;
			switch(Number(val)){
				case 1:
					str = "山区水库";
					break;
				case 2:
					str = "丘陵区水库";
					break;
				case 3:
					str = "平原区水库   ";
					break;
			}
			return str;
		},
		//水库工程规模 5 大（1）、4 大（2）、3中、2小（1）、1小（2）、9其他
		formatProjScal:function(val){
			var str;
			switch(Number(val)){
				case 1:
					str = "小二型";
					break;
				case 2:
					str = "小一型";
					break;
				case 3:
					str = "中型 ";
					break;
				case 4:
					str = "大二型";
					break;
				case 5:
					str = "大一型";
					break;
				case 9:
					str = "其他";
					break;
			}
			return str;
		},
		//水库工程等级 “1”表示Ⅰ，“2”表示Ⅱ，“3”表示Ⅲ，“4”表示Ⅳ，“5”表示Ⅴ
		formatProjRank:function(val){
			var str;
			switch(Number(val)){
				case 1:
					str = "I";
					break;
				case 2:
					str = "II";
					break;
				case 3:
					str = "III ";
					break;
				case 4:
					str = "IV";
					break;
				case 5:
					str = "V";
					break;
			}
			return str;
		},
}