$(document).ready(function(){
	var x = "x";
	var o = "o";
	var turn = 0;
	$("#board li").click(function(){
		if($("#place1").hasClass("o") && $("#place2").hasClass("o") && $("#place3").hasClass("o") || 
		$("#place4").hasClass("o") && $("#place5").hasClass("o") && $("#place6").hasClass("o") || 
		$("#place7").hasClass("o") && $("#place8").hasClass("o") && $("#place9").hasClass("o") || 
		$("#place1").hasClass("o") && $("#place4").hasClass("o") && $("#place7").hasClass("o") || 
		$("#place2").hasClass("o") && $("#place5").hasClass("o") && $("#place8").hasClass("o") || 
		$("#place3").hasClass("o") && $("#place6").hasClass("o") && $("#place9").hasClass("o") || 
		$("#place1").hasClass("o") && $("#place5").hasClass("o") && $("#place9").hasClass("o") || 
		$("#place3").hasClass("o") && $("#place5").hasClass("o") && $("#place7").hasClass("o")){
			$("#result").html("The winner is Player one(O)");
			$("#board li").text("+");
			$("#board li").removeClass("disable");
			$("#board li").removeClass("o");
			$("#board li").removeClass("x");
		}
		else if($("#place1").hasClass("x") && $("#place2").hasClass("x") && $("#place3").hasClass("x") || 
		$("#place4").hasClass("x") && $("#place5").hasClass("x") && $("#place6").hasClass("x") || 
		$("#place7").hasClass("x") && $("#place8").hasClass("x") && $("#place9").hasClass("x") || 
		$("#place1").hasClass("x") && $("#place4").hasClass("x") && $("#place7").hasClass("x") || 
		$("#place2").hasClass("x") && $("#place5").hasClass("x") && $("#place8").hasClass("x") || 
		$("#place3").hasClass("x") && $("#place6").hasClass("x") && $("#place9").hasClass("x") || 
		$("#place1").hasClass("x") && $("#place5").hasClass("x") && $("#place9").hasClass("x") || 
		$("#place3").hasClass("x") && $("#place5").hasClass("x") && $("#place7").hasClass("x")){
			$("#result").html("The winner is Player two(X)");
			$("#board li").text("+");
			$("#board li").removeClass("disable");
			$("#board li").removeClass("o");
			$("#board li").removeClass("x");
		}
		else if(turn == 9){
			$("#result").html("The game is tied");
			/*$("#board li").text("+");
			$("#board li").removeClass("disable");
			$("#board li").removeClass("o");
			$("#board li").removeClass("x");*/
		}
		else if($(this).hasClass("disabled")){
			$("#result").html("The place is already filled");
		}
		else if(turn%2 == 0){
			turn++;
			$(this).text(o);
			$(this).addClass("disabled o");
			if($("#place1").hasClass("o") && $("#place2").hasClass("o") && $("#place3").hasClass("o") || 
			$("#place4").hasClass("o") && $("#place5").hasClass("o") && $("#place6").hasClass("o") || 
			$("#place7").hasClass("o") && $("#place8").hasClass("o") && $("#place9").hasClass("o") || 
			$("#place1").hasClass("o") && $("#place4").hasClass("o") && $("#place7").hasClass("o") || 
			$("#place2").hasClass("o") && $("#place5").hasClass("o") && $("#place8").hasClass("o") || 
			$("#place3").hasClass("o") && $("#place6").hasClass("o") && $("#place9").hasClass("o") || 
			$("#place1").hasClass("o") && $("#place5").hasClass("o") && $("#place9").hasClass("o") || 
			$("#place3").hasClass("o") && $("#place5").hasClass("o") && $("#place7").hasClass("o")){
				$("#result").html("The winner is Player one(O)");
				turn = 0;
			}
		}
		else{
			turn++;
			$(this).text(x);
			$(this).addClass("disabled x");
			if($("#place1").hasClass("x") && $("#place2").hasClass("x") && $("#place3").hasClass("x") || 
			$("#place4").hasClass("x") && $("#place5").hasClass("x") && $("#place6").hasClass("x") || 
			$("#place7").hasClass("x") && $("#place8").hasClass("x") && $("#place9").hasClass("x") || 
			$("#place1").hasClass("x") && $("#place4").hasClass("x") && $("#place7").hasClass("x") || 
			$("#place2").hasClass("x") && $("#place5").hasClass("x") && $("#place8").hasClass("x") || 
			$("#place3").hasClass("x") && $("#place6").hasClass("x") && $("#place9").hasClass("x") || 
			$("#place1").hasClass("x") && $("#place5").hasClass("x") && $("#place9").hasClass("x") || 
			$("#place3").hasClass("x") && $("#place5").hasClass("x") && $("#place7").hasClass("x")){
				$("#result").html("The winner is Player two(X)");
				turn = 0;
			}
		}
		$("#reset").click(function(){
			$("#board li").text("+");
			$("#board li").removeClass("disabled");
			$("#board li").removeClass("o");
			$("#board li").removeClass("x");
			$("#result").empty();
			turn = 0;
		});
	});
});