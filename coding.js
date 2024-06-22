window.onload = function() {
  const swiper = new Swiper('.swiper', { 
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 横幅600px以上のとき～
      600: {
       slidesPerView: 2,
      }
    }
  });
}

let accordionDetails = '.js-details';
let accordionSummary = '.js-details-summary';
let accordionContent = '.js-details-content';
let speed = 300

$(accordionSummary).each(function() {
  $(this).on("click", function(event) {
  	// デフォルトの挙動を無効化
    event.preventDefault();
    // summaryにis-activeクラスを切り替え
    $(this).toggleClass("is-active");

    if ($(this).parent($(accordionDetails)).attr("open")) {
      // アコーディオンを閉じるときの処理
      $(this).nextAll($(accordionContent)).slideUp(speed, function() {
        // アニメーションの完了後にopen属性を取り除く
        $(this).parent($(accordionDetails)).removeAttr("open");
      });
    }
    else {
      // アコーディオンを開くときの処理
      // open属性を付ける
      $(this).parent($(accordionDetails)).attr("open", "true");
      // いったんdisplay:none;してからslideDownで開く
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  })
})

$(function () {
  // ウィンドウをスクロールしたら…
  $(window).scroll(function () {
    // ウィンドウの高さを取得
    const wHeight = $(window).height();
    // スクロールした量を取得
    const wScroll = $(window).scrollTop();
    // それぞれのblockクラスに対して…
    $(".fadeIn-img").each(function () {
      // それぞれのblockクラスのウィンドウからの高さを取得
      const bPosition = $(this).offset().top;
      // スクロールした量が要素の高さを上回ったら
      // その数値にウィンドウの高さを引き、最後に150pxを足す
      if (wScroll > bPosition - wHeight + 150) {
        $(this).addClass("fadeIn");
      }
    });
  });
});

$(function () {
    $(".js-accordion-title").on("click", function() {
      $(this).next().slideToggle(200);
      $(this).toggleClass("open",200);
    });
});