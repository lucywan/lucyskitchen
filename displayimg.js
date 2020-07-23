var names = ["IMG_6282.jpg","IMG_6510.jpg","IMG_6669_2.jpg","IMG_6679_2.jpg","IMG_6373.jpg","IMG_6512.jpg","IMG_6672_2.jpg","IMG_6681_2.jpg","IMG_6507.jpg","IMG_6513.jpg","IMG_6676_2.jpg","IMG_6685_2.jpg","IMG_6508.jpg","IMG_6515.jpg","IMG_6678_2.jpg"];
var folder = "img/beach/"


var i;
for (i = 0; i < names.length; i++)  
{ 

    $("body").append( "<img src='"+ folder + names[i] +"' class = 'foodpic'>" );

}
