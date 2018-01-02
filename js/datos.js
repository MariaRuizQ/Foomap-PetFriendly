console.log(dataFood);
$(document).ready(function() {
  /*obteniendo la data*/
  $.each(dataFood, function(key,value){
    var nameRestaurant = key;
    console.log(nameRestaurant);
    var information = value;
    var donde = information.Logo
    console.log(donde);
    var arrImg = [
      {donde},
    ]
    console.log(arrImg.length)
    var img = $('#img');
    var div = $('#gallery');
    $.each(arrImg,function(i,val){
      for (var i = 0; i < arrImg.length; i++){
        var x = img.attr('src', donde);
        $('#gallery').append('<div><img class="col-xs-4 gallery-img" alt="" id="img"></div>');
      };
    });

    $('#img').on('mouseover',function(){
      $('#gallery').text(nameRestaurant)
    });

    $('#img').on('mouseout',function(){
      
    });


    var lugar = information.Dónde
    console.log(lugar)
    $.each(information,function(key,value){
      var description = key;
      var content = value;
    });
    $.each(lugar,function(key,value){
      var district = key;
      var direction = value;
      console.log(district);
    });
  });
  /*galeria*
  $('#gallery').append('<ul><li><img class="col-xs-4 gallery-img" alt="" id="img"></li></ul>');
  var ruta = '../assets/images/';
  var arrImg = [
    {url:'1.jpg'},
    {url:'2.jpg'},
    {url:'3.jpg'},
    {url:'4.jpg'},
    {url:'5.jpg'},
    {url:'6.jpg'}
  ]
  console.log(arrImg.length)
  var i = 0;
  var img = $('#img');
  var div = $('#gallery');
  $.each(arrImg,function(i,val){
    for (var i = 0; i < arrImg.length; i++){
      var x = img.attr('src', ruta + arrImg[i].url);
    };
  });
  /*evento click a la foto de la galería*/

  /*input*/
  $('#search').keyup(function(){
    var district = $(this).val();
  });
  /*añadiendo las imagenes, abajo del input
  var imagesRestaurant = $('#restaurant');
  console.log(imagesRestaurant);
  imagesRestaurant.wrap('<img class="" src="" alt="">');*/
});
