$(function(){



// カルーセル設定
$(".carousel").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
  fade: true,
  cssEase: 'linear'
  });



// 不透明
$('.home').on('mouseover',function(){
$(this).animate({
  opacity: 0.5
   
   },100);
  });

// 元に戻す
$('.home').on('mouseout',function(){
  $(this).animate({
    opacity: 1.0
     
     },100);
    });

    // TOPボタンをスクロールしたら表示する
$(document).ready(function() {
$(window).on("scroll", function() {
  if ($(window).scrollTop() > 100) { // 100pxスクロールしたら
    $('#back-btn').fadeIn(); // フェードインで表示
  } else {
    $('#back-btn').fadeOut(); // フェードアウトで非表示
  }
 });

});


// ナビゲーションのスクロールをなめらかにする
$(document).ready(function(){
  // a要素のhref属性の値が#から始まる場合に実行
  $('a[href^="#"]').on('click', function(e){
    // e.preventDefault(); // デフォルトのイベント（瞬間移動）をキャンセル

    var target = $(this).attr('href'); // クリックされたa要素のhref属性の値を取得
    var scrollTo = 0; // デフォルトのスクロール先（トップページ）

    if(target !== "#"){ // トップページ以外の場合
      scrollTo = $(target).offset().top; // スクロール先の要素の位置（上端からの距離）を取得
    }

    $('html, body').animate({
      scrollTop: scrollTo
    }, 800); // 800ミリ秒（0.8秒）かけてスクロール
  });
});

$(window).scroll(function() {
  var scrollAmount = $(window).scrollTop(); // ブラウザのスクロール量
  var windowHeight = $(window).height();   // ブラウザの表示領域の高さ

  $('.works, .about ').each(function() {
    var targetPosition = $(this).offset().top; // HTML要素の位置

    // スクロール量がそれぞれのsection要素の位置を超えているか判定
    if (scrollAmount > targetPosition - windowHeight + 100) { // 100は任意の数値で、要素がどれくらい見えたらフェードインさせるかを調整する値
      $(this).addClass('fade-in');
    }
   });
 });
});