(function () {
  // nb3 섹션 HTML 템플릿 (기존 코드 그대로, <script> 부분만 제거)
  const NB3_TEMPLATE = `
<!-- ✅ 섹션 id를 nb3로 변경 · 디자인 유지 · nb1/nb2와 동일한 JS 패턴 적용 -->
<section id="nb3">
  <style>
    #nb3{background:#f6f8fb;font-family:'Noto Sans KR',sans-serif;padding:5rem 0;}
    #nb3 *{box-sizing:border-box}
    #nb3 .nb3-container{max-width:1300px;margin:0 auto;padding:0 1.5rem;}
    #nb3 .nb3-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem}
    #nb3 .nb3-title{font-size:2.25rem;line-height:2.5rem;font-weight:bold;color:#1f2937;}
    @media(max-width:768px){#nb3 .nb3-title{font-size:1.25rem;}}
    @media(min-width:768px){#nb3 .nb3-title{font-size:2rem;line-height:1.4}}
    #nb3 .nb3-nav-group{display:flex;gap:.5rem}
    #nb3 .nb3-btn{width:40px;height:40px;border:none;border-radius:9999px;background:#0f172a;color:#fff;cursor:pointer}
    /* 🔹 모바일에서 세로 스크롤을 살리기 위한 설정 */
    #nb3 .nb3-slider-container{
      display:flex;
      overflow:hidden;
      padding-bottom:1.5rem;
      touch-action:pan-y; /* 세로 스크롤은 브라우저 기본 동작 허용 */
    }
    #nb3 .nb3-slider-wrapper{display:flex;gap:1.5rem;transition:transform .1s.ease;will-change:transform;}
    #nb3 .nb3-product-slide{
      display:block;
      width:350px;
      background:#fff;
      border-radius:.75rem;
      box-shadow:0 4px 6px rgba(0,0,0,.1),0 2px 4px rgba(0,0,0,.06);
      overflow:hidden;
      text-decoration:none;
      color:inherit;
      transition:transform .35s ease, box-shadow .35s ease;
      will-change:transform;
    }
    @media(max-width:768px){#nb3 .nb3-product-slide{min-width:320px}}
    #nb3 .case-media{position:relative;width:100%;overflow:hidden;background:#eef2f7;height:190px}
    @media(max-width:640px){#nb3 .case-media{height:160px}}
    #nb3 .case-img{width:100%;height:100%;object-fit:cover;object-position:center;}
    #nb3 .media-pin{position:absolute;top:12px;left:12px;background:rgba(255,255,255,.95);backdrop-filter:saturate(1.2) blur(6px);border:1px solid #e2e8f0;border-radius:999px;padding:.35rem .6rem;font-size:12px;font-weight:800;color:#334155}
    #nb3 .case-card{display:flex;flex-direction:column;gap:14px;padding:16px}
    #nb3 .case-top{display:flex;align-items:center;justify-content:space-between}
    #nb3 .case-pin{font-weight:800;font-size:12px;color:#475569;background:#fff;border:1px solid #e2e8f0;border-radius:999px;padding:4px 10px}
    #nb3 .kpi-band{display:grid;grid-template-columns:1fr auto;gap:14px;padding:12px;background:#f9fafb;border:1px solid #eef2f7;border-radius:12px}
    #nb3 .kpi-stack{display:flex;flex-direction:column;gap:10px}
    #nb3 .kpi-box{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:10px 12px;display:flex;flex-direction:column;gap:4px}
    #nb3 .kpi-label{font-size:12px;color:#64748b;font-weight:800}
    #nb3 .kpi-value{font-weight:900;color:#0f172a;font-size:clamp(13px,2.4vw,15px)}
    #nb3 .rate-ring{--p:0;width:124px;height:124px;border-radius:9999px;background:conic-gradient(#16a34a calc(var(--p)*1%), #e5e7eb 0);border:8px solid #fff;display:grid;place-items:center}
    #nb3 .ring-inner{width:94px;height:94px;border-radius:9999px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}
    #nb3 .ring-label{font-size:11px;color:#64748b;margin-bottom:4px;font-weight:700}
    #nb3 .ring-val{font-weight:900;font-size:22px;color:#065f46}
    #nb3 .badges{display:flex;flex-wrap:wrap;gap:8px}
    #nb3 .badge{background:#eef2ff;border:1px solid #e0e7ff;color:#3730a3;padding:.42rem .66rem;border-radius:999px;font-size:12px;font-weight:800}
    #nb3 .case-title{margin:6px 0 4px;font-weight:900;color:#0f172a;font-size:1.125rem;line-height:1.4}
    #nb3 .case-desc{margin:0;color:#334155;line-height:1.6;font-size:14px}
    #nb3 .progress{display:none;width:100%;height:12px;border-radius:9999px;background:#e2e8f0;overflow:hidden;margin-top:6px}
    #nb3 .progress>span{display:block;height:100%;background:linear-gradient(90deg,#22c55e,#16a34a)}
  </style>

  <div class="nb3-container">
    <div class="nb3-head">
      <h2 class="nb3-title">실제 후기 · 탕감 결과</h2>
      <div class="nb3-nav-group">
        <button id="nb3Prev" class="nb3-btn"><i class="fas fa-chevron-left"></i></button>
        <button id="nb3Next" class="nb3-btn"><i class="fas fa-chevron-right"></i></button>
      </div>
    </div>

    <div id="nb3Slider" class="nb3-slider-container">
      <div class="nb3-slider-wrapper">

        <!-- 카드 1 -->
        <a class="nb3-product-slide" href="../blog/story1.html">
          <div class="case-media">
            <img class="case-img" src="../blog/img/story-3.jpg" alt="주거담보 사례 썸네일">
            <span class="media-pin">01 / 03</span>
          </div>
          <article class="case-card">
            <div class="case-top"><span class="case-pin">직장인 / 39세 / 남자 / 월소득 200만원 </span></div>
            <div class="kpi-band">
              <div class="kpi-stack">
                <div class="kpi-box"><span class="kpi-label">총 채무액</span><span class="kpi-value">₩86,710,000</span></div>
                <div class="kpi-box"><span class="kpi-label">월 상환액</span><span class="kpi-value">340 -> 61만원</span></div>
              </div>
              <div class="rate-ring" data-rate="75">
                <div class="ring-inner">
                  <div class="ring-label">탕감율</div>
                  <div class="ring-val">75%</div>
                </div>
              </div>
            </div>
            <div class="badges"><span class="badge">폐업</span><span class="badge">수술비</span><span class="badge">직장인</span></div>
            <h3 class="case-title">“8,671만원 빚을 안고,
배우자 몰래 힘겹게 버티고 있었습니다.”</h3>
            <p class="case-desc">무엇보다 “배우자에게만은 절대 들키고 싶지 않다”는 마음이 가장 컸습니다.</p>
          </article>
        </a>

        <!-- 카드 2 -->
        <a class="nb3-product-slide" href="../blog/story2.html">
          <div class="case-media">
            <img class="case-img" src="../blog/img/story2-8.jpg" alt="투자손실 사례 썸네일">
            <span class="media-pin">02 / 03</span>
          </div>
          <article class="case-card">
            <div class="case-top"><span class="case-pin">직장인 / 49세 / 여자 / 월소득 210만원 </span></div>
            <div class="kpi-band">
              <div class="kpi-stack">
                <div class="kpi-box"><span class="kpi-label">총 채무액</span><span class="kpi-value">₩72,548,111</span></div>
                <div class="kpi-box"><span class="kpi-label">월 상환액</span><span class="kpi-value">200 -> 15만원</span></div>
              </div>
              <div class="rate-ring" data-rate="92">
                <div class="ring-inner">
                  <div class="ring-label">탕감율</div>
                  <div class="ring-val">92%</div>
                </div>
              </div>
            </div>
            <div class="badges"><span class="badge">실직</span><span class="badge">수술비</span><span class="badge">학원비</span></div>
            <h3 class="case-title">“딸아이 학원비조차 못 내는 엄마가 될 줄은 정말 몰랐습니다.”</h3>
            <p class="case-desc">하지만 어느 날, 학원비를 더는 낼 수 없다는 말을 딸아이에게 꺼내야 하는 상황이 찾아왔고, 그때 제 마음도 함께 무너져 내렸습니다.</p>
          </article>
        </a>

        <!-- 카드 3 -->
        <a class="nb3-product-slide" href="../blog/story3.html">
          <div class="case-media">
            <img class="case-img" src="../blog/img/story3-1.jpg" alt="자영업 사례 썸네일">
            <span class="media-pin">03 / 03</span>
          </div>
          <article class="case-card">
            <div class="case-top"><span class="case-pin">직장인 / 32세 / 여자 / 월소득 180만원 </span></div>
            <div class="kpi-band">
              <div class="kpi-stack">
                <div class="kpi-box"><span class="kpi-label">총 채무액</span><span class="kpi-value">₩70,042,243</span></div>
                <div class="kpi-box"><span class="kpi-label">월 상환액</span><span class="kpi-value">200 -> 15만원</span></div>
              </div>
              <div class="rate-ring" data-rate="92">
                <div class="ring-inner">
                  <div class="ring-label">탕감율</div>
                  <div class="ring-val">92%</div>
                </div>
              </div>
            </div>
            <div class="badges"><span class="badge">양육비 미수령</span><span class="badge">생활고</span><span class="badge">교육비</span></div>
            <h3 class="case-title">“낮은 소득과 양육비 미수, 생활비가 빚의 시작이었.”</h3>
            <p class="case-desc">부족한 월급을 메우기 위해 시작한 대출이 어느 순간, 감당할 수 없는 수준의 빚이 되어버렸다는 걸 인정해야 했어요.</p>
          </article>
        </a>

      </div>
    </div>
  </div>
</section>
`;

  // 🔹 탕감율 링 애니메이션 초기화
  function initRateRings(root) {
    const EASE = (t) => 1 - Math.pow(1 - t, 3);
    const DURATION = 900;

    function animateRing(el) {
      const target = Math.max(0, Math.min(100, Number(el.getAttribute('data-rate') || 0)));
      const valEl = el.querySelector('.ring-val');
      let start = null;
      el.style.setProperty('--p', 0);
      if (valEl) valEl.textContent = '0%';

      function step(ts) {
        if (!start) start = ts;
        const t = Math.min(1, (ts - start) / DURATION);
        const eased = EASE(t);
        const cur = Math.round(target * eased);
        el.style.setProperty('--p', cur);
        if (valEl) valEl.textContent = cur + '%';
        if (t < 1) el._raf = requestAnimationFrame(step);
        else el._raf = null;
      }

      if (el._raf) cancelAnimationFrame(el._raf);
      el._raf = requestAnimationFrame(step);
    }

    function resetRing(el) {
      if (el._raf) cancelAnimationFrame(el._raf);
      el._raf = null;
      el.style.setProperty('--p', 0);
      const valEl = el.querySelector('.ring-val');
      if (valEl) valEl.textContent = '0%';
    }

    const rings = Array.from(root.querySelectorAll('.rate-ring[data-rate]'));
    if (!rings.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) animateRing(el);
          else resetRing(el);
        });
      },
      { threshold: 0.35 }
    );

    rings.forEach((el) => io.observe(el));
  }

  // 🔹 nb3 슬라이더 초기화 (기존 nb1/nb2 패턴 + 모바일 세로 스크롤 허용)
  function initNb3Slider(root) {
    const slider = root.querySelector('#nb3Slider');
    const track = slider ? slider.querySelector('.nb3-slider-wrapper') : null;
    const prevBtn = root.querySelector('#nb3Prev');
    const nextBtn = root.querySelector('#nb3Next');

    if (!slider || !track) return;

    let currentIndex = 0;
    let maxIndex = 0;
    let cardWidth = 0;
    let gap = 0;

    function updateDimensions() {
      const cards = slider.querySelectorAll('.nb3-product-slide');
      const containerWidth = slider.clientWidth;
      if (cards.length > 0) {
        const first = cards[0];
        cardWidth = first.getBoundingClientRect().width;
        gap = parseFloat(getComputedStyle(track).gap) || 24; // 1.5rem
        const visible = Math.max(1, Math.floor((containerWidth + gap) / (cardWidth + gap)));
        maxIndex = Math.max(0, cards.length - visible);
      }
    }

    function setTransform(index, animate = true) {
      const tx = -index * (cardWidth + gap);
      const clampedIndex = Math.max(0, Math.min(index, maxIndex));
      if (animate) {
        slider.classList.add('animating');
        track.style.transition = 'transform .6s cubic-bezier(0.25,0.46,0.45,0.94)';
        track.style.transform = `translateX(${tx}px)`;
        setTimeout(() => {
          slider.classList.remove('animating');
          track.style.transition = 'transform .1s.ease';
        }, 600);
      } else {
        track.style.transition = 'transform .1s ease';
        track.style.transform = `translateX(${tx}px)`;
      }
      currentIndex = clampedIndex;
    }

    function moveTo(index) {
      setTransform(Math.max(0, Math.min(index, maxIndex)), true);
    }

    // 버튼
    function pauseAuto() {
      stopAuto();
      if (resumeTimer) {
        clearTimeout(resumeTimer);
        resumeTimer = null;
      }
    }
    function resumeAutoLater(delay = 6200) {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => startAuto(), delay);
    }

    if (prevBtn)
      prevBtn.addEventListener('click', () => {
        pauseAuto();
        moveTo(currentIndex - 1);
        resumeAutoLater();
      });

    if (nextBtn)
      nextBtn.addEventListener('click', () => {
        pauseAuto();
        moveTo(currentIndex + 1);
        resumeAutoLater();
      });

    // 드래그/스와이프
    let isDragging = false,
      started = false;
    let startX = 0,
      startY = 0,
      startTX = 0,
      curTX = 0,
      lastX = 0,
      lastT = 0,
      v = 0,
      raf = null,
      isTouchMode = false;

    const TH = 8,
      FRICTION = 0.95,
      MIN_V = 0.8;

    function getTX() {
      const m = track.style.transform.match(/translateX\((-?\d+(?:\.\d+)?)px\)/);
      return m ? parseFloat(m[1]) : 0;
    }

    function onStart(e) {
      if (e.type === 'mousedown' && e.button !== 0) return;
      const touchEvent = e.type.startsWith('touch');
      isTouchMode = touchEvent;

      const point = touchEvent ? e.touches[0] : e;
      isDragging = true;
      started = false;
      startX = point.clientX;
      startY = point.clientY;
      startTX = getTX();
      curTX = startTX;
      lastX = startX;
      lastT = performance.now();
      v = 0;
      slider.classList.add('dragging');
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      pauseAuto();

      // 마우스 드래그에서는 기본 동작 막아 텍스트 선택 방지
      if (!touchEvent && e.cancelable) e.preventDefault();
    }

    function onMove(e) {
      if (!isDragging) return;
      const touchEvent = e.type.startsWith('touch');
      const point = touchEvent ? e.touches[0] : e;
      const now = performance.now();
      const x = point.clientX;
      const y = point.clientY;
      const dx = x - lastX;
      const dt = Math.max(1, now - lastT);

      // 🔹 처음 움직임에서 수평/수직 제스처 구분
      if (!started) {
        const totalDX = x - startX;
        const totalDY = y - startY;

        // 수평 스와이프라고 판단
        if (Math.abs(totalDX) > TH && Math.abs(totalDX) > Math.abs(totalDY)) {
          started = true;
        }
        // 수직 스크롤 의도 → 드래그 취소하고 브라우저 기본 스크롤에 맡김
        else if (Math.abs(totalDY) > TH && Math.abs(totalDY) > Math.abs(totalDX)) {
          isDragging = false;
          slider.classList.remove('dragging');
          resumeAutoLater();
          return; // ❗️preventDefault 호출 X → 페이지가 자연스럽게 아래로 스크롤
        }
      }

      if (started) {
        let next = startTX + (x - startX);
        const minT = -(maxIndex * (cardWidth + gap));
        const maxT = 0;
        if (next > maxT) next = maxT + (next - maxT) * 0.3;
        else if (next < minT) next = minT + (next - minT) * 0.3;

        curTX = next;
        track.style.transform = `translateX(${next}px)`;

        const iv = dx / dt;
        v = v * 0.8 + iv * 0.2;

        // 수평 드래그 중일 때만 기본 동작 막기 → 세로 스크롤과 충돌 방지
        if (e.cancelable) e.preventDefault();
      }

      lastX = x;
      lastT = now;
    }

    function snap() {
      const step = cardWidth + gap;
      const idx = Math.round(-curTX / step);
      const clamp = Math.max(0, Math.min(idx, maxIndex));
      currentIndex = clamp;
      setTransform(clamp, true);
    }

    function momentum() {
      if (raf) return;
      function frame() {
        if (Math.abs(v) < MIN_V) {
          snap();
          raf = null;
          return;
        }
        curTX += v * 16; // ~60fps
        const minT = -(maxIndex * (cardWidth + gap));
        const maxT = 0;
        if (curTX > maxT || curTX < minT) {
          v *= -0.3;
          curTX = Math.max(minT, Math.min(maxT, curTX));
        }
        track.style.transform = `translateX(${curTX}px)`;
        v *= FRICTION;
        raf = requestAnimationFrame(frame);
      }
      frame();
    }

    function onEnd(e) {
      if (!isDragging) return;
      isDragging = false;
      slider.classList.remove('dragging');

      if (started) {
        if (Math.abs(v) > MIN_V) momentum();
        else snap();
        // 수평 드래그를 실제로 했던 경우에만 기본 동작 방지
        if (e && e.cancelable) e.preventDefault();
      } else {
        resumeAutoLater();
      }
    }

    slider.addEventListener('mousedown', onStart, { passive: false });
    document.addEventListener('mousemove', onMove, { passive: false });
    document.addEventListener('mouseup', onEnd, { passive: false });

    slider.addEventListener('touchstart', onStart, { passive: false });
    slider.addEventListener('touchmove', onMove, { passive: false });
    slider.addEventListener('touchend', onEnd, { passive: false });
    slider.addEventListener('touchcancel', onEnd, { passive: false });

    slider.addEventListener(
      'click',
      (e) => {
        if (started) {
          e.preventDefault();
          e.stopPropagation();
          started = false;
        }
      },
      true
    );

    slider.addEventListener('dragstart', (e) => e.preventDefault());

    // 자동 롤링
    const INTERVAL = 4200;
    let auto = null;
    let resumeTimer = null;

    function step() {
      const next = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      moveTo(next);
    }
    function startAuto() {
      stopAuto();
      auto = setInterval(step, INTERVAL);
    }
    function stopAuto() {
      if (auto) {
        clearInterval(auto);
        auto = null;
      }
    }

    // 리사이즈 & visibility
    function init() {
      updateDimensions();
      setTransform(0, false);
      startAuto();
    }

    let rTimer = null;
    window.addEventListener('resize', () => {
      pauseAuto();
      clearTimeout(rTimer);
      rTimer = setTimeout(() => {
        updateDimensions();
        setTransform(Math.min(currentIndex, maxIndex), false);
        resumeAutoLater();
      }, 200);
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) pauseAuto();
      else resumeAutoLater(1800);
    });

    init();
  }

  // 🔹 DOMContentLoaded 시 #hg-slide 위치에 nb3 섹션 삽입 + 초기화
  document.addEventListener('DOMContentLoaded', function () {
    const mount = document.getElementById('hg-slide');
    if (!mount) return;

    mount.innerHTML = NB3_TEMPLATE;

    const root = mount.querySelector('#nb3');
    if (!root) return;

    initRateRings(root);
    initNb3Slider(root);
  });
})();
