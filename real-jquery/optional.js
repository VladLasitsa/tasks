$(function() {

   function add() {
      var check = true;
      var nameTab;
      var indexTab;
      var contentTab;
      var newTab;
      var newContent;
      $('.form-tab').find('.required-field').each(function(){
         if($(this).val() == ''){
            check = false;
         }
      })
      if($('.tabs .tab').length == 10){
            // $('.add-button').attr('disabled',true);
            check = false;
            alert('Нет свободного места для нового tab');

         }
      if(check){
         indexTab = $('.form-tab #text').val();
         nameTab = $('.form-tab #title').val();
         contentTab = $('.form-tab #html').val();
         $('.tabs li').removeClass('active');
         $('#container-content-tab > div').hide();
         newTab = $('<li class="tab"></li>').text(nameTab);
         if(indexTab == 0){
            $('.tabs').prepend(newTab).addClass('active');
            newContent = $('<div class=tab'+ nameTab +'></div>').html(contentTab);
            $('#container-content-tab').append(newContent);
         }
         else {
            if(indexTab > 0 && indexTab <= $('.tabs .tab').length){
               indexTab--;
               $(newTab).insertAfter('.tabs .tab:eq('+indexTab+')').addClass('active');
               newContent = $('<div class=tab'+ nameTab +'></div>').html(contentTab);
                $('#container-content-tab').append(newContent);
            }
         }

      }

   }
   $('.add-button').on('click', function (){
         add();
         event.preventDefault();
    });

   $('.tabs').on('click', 'li', function(){
      $('.tabs li').removeClass('active');
      $(this).addClass('active');
      $('#container-content-tab > div').hide();
      $('#container-content-tab .tab'+$(this).text()).show();
      $('.form-tab #text').val($('.tabs li').index($(this)))
      $('.form-tab #title').val($(this).text());
      $('.form-tab #html').val($('#container-content-tab .tab'+$(this).text()).html());
   });


   $('.collapse').on('click', function(){
      $('aside').toggleClass('aside');
      $('main').toggleClass('aside');
      if($('aside').hasClass('aside')){
         $(this).html('&#8658;');
      }
      else {
         $(this).html('&#8656;');
      }

   });

   $('.reset-button').on('click', function(){
      $('.form-tab').find('.required-field').each(function(){
         $(this).val('');
            
      })
      event.preventDefault();
   });

   $('.edit-button').on('click', function(){
      var $activeTab;
      $('.tabs li').each(function(){
         if($(this).hasClass('active')){
            $activeTab = $(this);
         }
      })
       $('#container-content-tab .tab'+$activeTab.text()).remove();
       $activeTab.remove();

       add();
       event.preventDefault();

   });
   
});