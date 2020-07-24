function open() {
	$("#div_ClientLoc").append("<div class = 'imgcon'>");
}
function beaches(){
var names = ["IMG_6282.jpg","IMG_6510.jpg","IMG_6669_2.jpg","IMG_6679_2.jpg","IMG_6373.jpg","IMG_6512.jpg","IMG_6672_2.jpg","IMG_6681_2.jpg","IMG_6507.jpg","IMG_6513.jpg","IMG_6676_2.jpg","IMG_6685_2.jpg","IMG_6508.jpg","IMG_6515.jpg","IMG_6678_2.jpg"];
var folder = "img/beach/"


var i; 

for (i = 0; i < names.length; i++)  
{ 
	
    $("body").append( "<a><img src='"+ folder + names[i] +"' class = 'foodpic'></a>" );

} 

}

function berkeley(){
var names = ["IMG_5962.jpg","IMG_6034.jpg"];
var folder = "img/berkeley/"


var i; 
for (i = 0; i < names.length; i++)  
{ 

    $("body").append( "<a><img src='"+ folder + names[i] +"' class = 'foodpic'></a>" );

} 

}

function wildlife(){
var names = ["IMG_6218.jpg"];
var folder = "img/wildlife/"


var i; 
  
for (i = 0; i < names.length; i++)  
{ 

    $("body").append( "<a><img src='"+ folder + names[i] +"' class = 'foodpic'></a>" );

} 
}

function cats(){
var names = ["60678782839__262FAB31-56EC-414C-B59A-407D063807A4.JPG"];
var folder = "img/cats/"


var i; 
  
for (i = 0; i < names.length; i++)  
{ 

    $("body").append( "<a><img src='"+ folder + names[i] +"' class = 'foodpic'></a>" );

} 
}

function close() {
	$("#div_ClientLoc").append("</div>");
}