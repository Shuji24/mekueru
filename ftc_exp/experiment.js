/* =====================================
   アニメーション実験
===================================== */

const body = document.body;

const experimentNumber = Number(
    [...body.classList]
        .find(name => /^exp-[0-4]$/.test(name))
        ?.replace("exp-", "") ?? 0
);

const image = document.getElementById("parallaxImage");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    image.style.transform =
        `translateY(${scrollY * 0.25}px)`;
}, { passive: true });

/* =====================================
   アニメーション対象の設定
===================================== */

const targets = [
    ".title_box",
    ".spot",
    ".div",
    "footer",
];

let animationTargets = [];

if (
    experimentNumber === 1 ||
    experimentNumber === 2 ||
    experimentNumber === 3
) {
    targets.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add("anim-target");
            animationTargets.push(element);
        });
    });
}


/* =====================================
   ①②③ スクロールアニメーション
===================================== */

if (
    experimentNumber === 1 ||
    experimentNumber === 2 ||
    experimentNumber === 3
) {

    // ②の方向を設定
    if (experimentNumber === 2) {

        const directions = [
            "from-bottom",
            "from-left",
            "from-right",
            "from-top"
        ];

        animationTargets.forEach((element, index) => {
            element.classList.add(
                directions[index % directions.length]
            );
        });

    } else {

        animationTargets.forEach(element => {
            element.classList.add("from-bottom");
        });

    }

    // 画面に入ったら表示
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 要素が画面内に入ったとき
          if (entry.isIntersecting) {
            // 表示クラスを付与してフェードイン
            entry.target.classList.add('is-visible');
            // 一度表示したら監視を解除（パフォーマンス最適化）
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // 要素が10%以上見えたら発火
        threshold: 0.1,
        // 画面下から100px手前で発火（早めのタイミング）
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    document.querySelectorAll(
        '.div, .left_title, .right_title, .center_title, .news_card, .about_image, .about_text h2, .about_text p, .about_text table, .ftc_text, .ftc_video ,.title_box'
    ).forEach((el) => {
      observer.observe(el);
    });

}


/* =====================================
   ③ パララックス
===================================== */

if (experimentNumber === 3) {
    const parallaxImage = document.querySelector(".parallax img");

    if (parallaxImage) {
        let ticking = false;

        function updateParallax() {
            const y = window.scrollY * 0.25;

            parallaxImage.style.setProperty(
                "--parallax-y",
                `${y}px`
            );

            ticking = false;
        }

        window.addEventListener("scroll", () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });

        updateParallax();
    }
}


/* =====================================
   ④ カルーセル
===================================== */

if (experimentNumber === 4) {

    const track = document.getElementById("carouselTrack");
    const slides = document.querySelectorAll(".carousel-slide");

    const prev = document.getElementById("carouselPrev");
    const next = document.getElementById("carouselNext");
    const dotsContainer = document.getElementById("carouselDots");

    let currentIndex = 0;

    // ドットを作成
    slides.forEach((slide, index) => {

        const dot = document.createElement("button");

        dot.className = "carousel-dot";
        dot.setAttribute("aria-label", `${index + 1}枚目を表示`);

        dot.addEventListener("click", () => {
            showSlide(index);
        });

        dotsContainer.appendChild(dot);

    });

    const dots = dotsContainer.querySelectorAll(".carousel-dot");

    // 表示切り替え
    function showSlide(index) {

        currentIndex = (index + slides.length) % slides.length;

        track.style.transform =
            `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentIndex
            );
        });

    }

    prev.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    next.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });

    showSlide(0);

}