// ./js/form.js
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("form_contact");
    if (!container) return;

    // ====== 폼 HTML 주입 (style + markup 그대로, script/inline 이벤트는 JS로 처리) ======
    container.innerHTML = `
<section id="consultFormSection">
  <style>
    /* ===== Scope: #consultFormSection only ===== */
    #consultFormSection{
      --ink:#0b1220;
      --muted:#556070;
      --brand:#13b5a3;   /* 포인트 민트 */
      --accent:#11a292;  /* 호버/진한 민트 */
      --bg:#f6f8fa;      /* 연한 배경 */
      --bubble:#e9f5f3;  /* 라이트 버블 */
      --line:#e8ecef;
      --card:#ffffff;
      --radius:18px;
      --shadow:0 16px 40px rgba(0,0,0,.10);
      --soft:0 1px 3px rgba(19,181,163,.12), 0 1px 2px rgba(0,0,0,.04);
      --soft-hover:0 6px 16px rgba(19,181,163,.16), 0 2px 4px rgba(0,0,0,.05);

      font-family:Pretendard, "Noto Sans KR", system-ui, -apple-system, "Noto Sans KR", sans-serif;
      color:var(--ink);
      background:#fff;
      position:relative;
      isolation:isolate;
      overflow:hidden;
      padding:100px 16px;
    }

    /* 라이트 버블 배경 */
    #consultFormSection .gc-bubble{
      position:absolute;
      border-radius:50%;
      background:var(--bubble);
      filter:blur(.2px);
      opacity:.75;
      z-index:0;
    }
    #consultFormSection .gc-b1{
      width:520px;height:520px;
      left:-160px;top:-160px;
      opacity:.75;
    }
    #consultFormSection .gc-b2{
      width:420px;height:420px;
      right:-120px;bottom:-120px;
      opacity:.55;
    }
    #consultFormSection .gc-b3{
      width:360px;height:360px;
      right:40%;top:52%;
      translate:50% -50%;
      opacity:.45;
    }
    @media (max-width:940px){
      #consultFormSection .gc-b3{display:none;}
    }

    /* 폼 카드 래퍼 */
    #consultFormSection #consultForm{
      max-width:960px;
      margin:0 auto;
      position:relative;
      z-index:1;

      background:var(--card);
      border:1px solid var(--line);
      border-radius:var(--radius);
      box-shadow:var(--shadow);
      padding:28px 22px 26px;
      line-height:1.6;
      color:var(--ink);
    }

    /* 상단 헤더 */
    #consultFormSection .gc-header{
      text-align:center;
      margin-bottom:2rem;
    }

    #consultFormSection .gc-tag{
      display:inline-block;
      background:var(--bg);
      color:var(--brand);
      padding:6px 14px;
      border-radius:999px;
      font-weight:700;
      font-size:.88rem;
      margin-bottom:12px;
      border:1px solid rgba(19,181,163,.28);
      box-shadow:0 1px 0 rgba(255,255,255,.6) inset;
    }

    #consultFormSection .gc-deco{
      display:none; /* 기존 금색 바는 숨김 */
    }

    #consultFormSection .gc-header h2{
      font-size:clamp(26px,3.4vw,32px);
      font-weight:900;
      line-height:1.3;
      letter-spacing:-.02em;
      margin:0 0 .4rem;
      color:var(--ink);
    }

    #consultFormSection .gc-header h2 span{
      display:block;
      font-size:clamp(24px,3.1vw,28px);
      color:var(--brand);
      margin-top:4px;
    }

    #consultFormSection .gc-header p{
      margin-top:0.35rem;
      font-size:.96rem;
      color:var(--muted);
    }

    /* 진행바 */
    #consultFormSection .gc-stepbar{
      margin-bottom:1.8rem;
    }

    #consultFormSection .gc-progress{
      height:4px;
      background:#edf1f5;
      border-radius:999px;
      overflow:hidden;
    }

    #consultFormSection .gc-progress-fill{
      width:100%;
      height:100%;
      background:linear-gradient(90deg, var(--brand), var(--accent));
    }

    /* 공통 타이틀, 라벨 */
    #consultFormSection h2{
      font-size:1.8rem;
      margin-bottom:2rem;
      color:var(--ink);
    }

    #consultFormSection .form-group{
      margin-bottom:1.8rem;
    }

    #consultFormSection .form-label{
      font-weight:800;
      font-size:.98rem;
      margin-bottom:0.8rem;
      color:#2c313a;
    }

    /* 버튼 그룹 (선택 칩 스타일) */
    #consultFormSection .button-group{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:0.55rem;
    }

    #consultFormSection .option-btn{
      width:100%;
      padding:0.6rem 0.4rem;
      border-radius:12px;
      border:1.5px solid var(--line);
      background:#fff;
      color:var(--ink);
      font-size:.9rem;
      font-weight:700;
      cursor:pointer;
      transition:all .2s ease;
      box-shadow:var(--soft);
      white-space:nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
    }

    #consultFormSection .option-btn:hover{
      box-shadow:var(--soft-hover);
      border-color:rgba(19,181,163,.5);
    }

    #consultFormSection .option-btn.active{
      background:var(--brand);
      color:#fff;
      border-color:var(--brand);
      box-shadow:0 8px 18px rgba(19,181,163,.28);
      font-weight:800;
    }

    /* 인라인 필드 */
    #consultFormSection .inline-fields{
      display:flex;
      flex-wrap:wrap;
      gap:1rem;
    }

    #consultFormSection .inline-fields input,
    #consultFormSection .inline-fields select{
      flex:1 1 0;
      min-width:0;
      padding:0.8rem 0.9rem;
      border:1.5px solid var(--line);
      border-radius:12px;
      background:#fff;
      color:var(--ink);
      font-size:1rem;
      height:60px;
      box-sizing:border-box;
      outline:none;
      transition:border-color .2s ease, box-shadow .2s ease;
    }

    #consultFormSection input::placeholder,
    #consultFormSection textarea::placeholder{
      color:#9aa4b2;
    }

    #consultFormSection .inline-fields input:focus,
    #consultFormSection .inline-fields select:focus,
    #consultFormSection textarea:focus{
      border-color:rgba(19,181,163,.55);
      box-shadow:0 0 0 4px rgba(19,181,163,.15);
    }

    /* Select 커스텀 */
    #consultFormSection select{
      -webkit-appearance:none;
      -moz-appearance:none;
      appearance:none;
    }
    #consultFormSection select:invalid{color:#9e9e9e;}

    #consultFormSection .select-wrap{
      position:relative;
      flex:1 1 0;
      min-width:0;
      width:100%;
    }

    #consultFormSection .select-wrap::after{
      content:"";
      position:absolute;
      top:50%;right:1rem;
      width:8px;height:8px;
      border-right:2px solid #666;
      border-bottom:2px solid #666;
      transform:translateY(-50%) rotate(45deg);
      pointer-events:none;
    }

    #consultFormSection .select-wrap select{
      display:block;
      width:100%;
      max-width:100%;
    }

    /* 텍스트 영역 */
    #consultFormSection textarea{
      width:100%;
      min-height:150px;
      padding:12px 14px;
      font-size:1rem;
      border-radius:12px;
      border:1.5px solid var(--line);
      background:#fff;
      color:var(--ink);
      resize:vertical;
      box-sizing:border-box;
    }

    /* 개인정보 동의 영역 */
    #consultFormSection .checkbox-area{
      display:flex;
      align-items:center;
      font-size:.9rem;
      margin-top:-0.5rem;
      color:var(--muted);
      flex-wrap:wrap;
      gap:4px;
    }

    #consultFormSection .checkbox-area input{
      margin-right:0.35rem;
    }

    #consultFormSection .privacyBtn{
      color:var(--brand) !important;
      font-weight:600 !important;
      font-size:13px !important;
      margin-top:0 !important;
      cursor:pointer;
      text-decoration:underline;
      text-underline-offset:2px;
    }

    /* 제출 버튼 */
    #consultFormSection input.submit-btn{
      width:100%;
      background:var(--brand);
      color:#fff;
      padding:0.95rem 1rem;
      font-size:1.05rem;
      border:none;
      border-radius:999px;
      cursor:pointer;
      font-weight:900;
      transition:background .2s, box-shadow .2s, transform .05s;
      box-shadow:0 8px 18px rgba(19,181,163,.35);
      margin-top:0.4rem;
    }

    #consultFormSection input.submit-btn:hover{
      background:var(--accent);
      box-shadow:0 10px 22px rgba(19,181,163,.4);
    }

    #consultFormSection input.submit-btn:active{
      transform:translateY(1px);
      box-shadow:0 6px 14px rgba(19,181,163,.3);
    }

    /* 반응형 */
    @media (max-width:1024px){
      #consultFormSection .button-group{
        grid-template-columns:repeat(3,1fr);
      }
    }

    @media (max-width:768px){
      #consultFormSection{
        padding:72px 14px;
      }
      #consultFormSection #consultForm{
        padding:22px 18px 20px;
      }
      #consultFormSection .inline-fields{
        flex-direction:column;
      }
      #consultFormSection .button-group{
        grid-template-columns:repeat(2,1fr);
      }
    }

    @media (max-width:550px){
      #consultFormSection .checkbox-area{
        flex-direction:column;
        align-items:flex-start;
      }
      #consultFormSection .button-group{
        grid-template-columns:1fr;
      }
    }
  </style>

  <!-- 배경 버블 -->
  <span aria-hidden="true" class="gc-bubble gc-b1"></span>
  <span aria-hidden="true" class="gc-bubble gc-b2"></span>
  <span aria-hidden="true" class="gc-bubble gc-b3"></span>

  <div id="consultForm">
    <form id="form_e11" name="frm_phonecall_web" action="" method="post" target="hidden_iframe11" class="gc-form" novalidate>
      <input type="hidden" name="entry.637408694" value="본문 신청폼">  
      <input type="hidden" name="entry.339503137" value="당근 - 서민채무 - 더엘">

      <div class="gc-header">
        <span class="gc-tag">무료 빚탕감 진단 신청</span>
        <h2>채무긴급대응 법률센터<br><span>무료상담신청</span></h2>
        <p>간단한 정보를 남겨주시면,<br>현재 상황에서 예상 가능한 빚 조정 방향을 전문가가 안내해 드립니다.</p>
      </div>

      <div class="gc-stepbar">
        <div class="gc-progress"><div class="gc-progress-fill"></div></div>
      </div>

      <!-- 01. 직업종류 -->
      <div class="form-group">
        <p class="form-label">01. 직업종류</p>
        <div class="button-group" data-type="radio" data-name="직업종류">
          <input type="button" class="option-btn intro_select1"  data-value="급여소득자" value="급여소득자">
          <input type="button" class="option-btn intro_select1"  data-value="자영업자" value="자영업자">
          <input type="button" class="option-btn intro_select1"  data-value="일용직/아르바이트" value="일용직/아르바이트">
          <input type="button" class="option-btn intro_select1"  data-value="기타" value="기타">
        </div>
        <input type="hidden" name="entry.966666468" id="job_style">
      </div>

      <!-- 02. 월수입 -->
      <div class="form-group">
        <p class="form-label">02. 월평균 수입(실수령액)</p>
        <div class="button-group" data-type="radio" data-name="월수입">
          <input type="button" class="option-btn intro_select2"  data-value="100만원 이하" value="100만원 이하">
          <input type="button" class="option-btn intro_select2"  data-value="100~200만원 사이" value="100~200만원 사이">
          <input type="button" class="option-btn intro_select2"  data-value="200~400만원 사이" value="200~400만원 사이">
          <input type="button" class="option-btn intro_select2"  data-value="400만원 이상" value="400만원 이상">
        </div>
        <input type="hidden" name="entry.820371290" id="income">
      </div>

      <!-- 03. 채무금액 -->
      <div class="form-group">
        <p class="form-label">03. 채무금액</p>
        <div class="button-group" data-type="radio" data-name="채무금액">
          <input type="button" class="option-btn intro_select"  data-value="2000~5000만원 미만" value="2000~5000만원 미만">
          <input type="button" class="option-btn intro_select"  data-value="5000~8000만원 미만" value="5000~8000만원 미만">
          <input type="button" class="option-btn intro_select"  data-value="8000~1억원 미만" value="8000~1억원 미만">
          <input type="button" class="option-btn intro_select"  data-value="1-3억" value="1-3억">
          <input type="button" class="option-btn intro_select"  data-value="3-5억" value="3-5억">
          <input type="button" class="option-btn intro_select"  data-value="5억 이상" value="5억 이상">
        </div>
        <input type="hidden" name="entry.1263415590" id="debt">
      </div>

      <!-- 04. 부양가족수 -->
      <div class="form-group">
        <p class="form-label">04. 부양가족수</p>
        <div class="button-group" data-type="radio" data-name="가족수">
          <input type="button" class="option-btn intro_select3"  data-value="자녀없음" value="자녀없음">
          <input type="button" class="option-btn intro_select3"  data-value="1명" value="1명">
          <input type="button" class="option-btn intro_select3"  data-value="2명" value="2명">
          <input type="button" class="option-btn intro_select3"  data-value="3명 이상" value="3명 이상">
        </div>
        <input type="hidden" name="entry.478230096" id="family">
      </div>

      <!-- 05. 최근대출유무 -->
      <div class="form-group">
        <p class="form-label">05. 최근대출유무</p>
        <div class="button-group" data-type="radio" data-name="최근대출">
          <input type="button" class="option-btn intro_select4" data-value="최근 3개월내 대출 있음" value="최근 3개월내 대출 있음">
          <input type="button" class="option-btn intro_select4" data-value="최근 3개월내 대출 없음" value="최근 3개월내 대출 없음">
        </div>
        <input type="hidden" name="entry.277781686" id="loan_3month">
      </div>

      <!-- 06. 부동산 유무 -->
      <div class="form-group">
        <p class="form-label">06. 부동산 유무 <small>(배우자 명의 포함)</small></p>
        <div class="button-group" data-type="radio" data-name="부동산유무">
          <input type="button" class="option-btn intro_select6" data-value="있음" value="있음">
          <input type="button" class="option-btn intro_select6" data-value="없음" value="없음">
        </div>
        <input type="hidden" name="entry.2018620676" id="realstate">
      </div>

      <!-- 07. 채무 원인 -->
      <div class="form-group">
        <p class="form-label">07. 채무 원인 <small>(다중선택가능)</small></p>
        <div class="button-group" data-type="checkbox" data-name="채무원인">
          <input type="button" class="option-btn intro_select5"  data-value="사기(전세,보이스피싱)" value="사기(전세,보이스피싱)">
          <input type="button" class="option-btn intro_select5"  data-value="생활비로 인한 채무" value="생활비로 인한 채무">
          <input type="button" class="option-btn intro_select5"  data-value="사업자금" value="사업자금">
          <input type="button" class="option-btn intro_select5"  data-value="도박 및 주식" value="도박 및 주식">
          <input type="button" class="option-btn intro_select5"  data-value="병원비" value="병원비">
          <input type="button" class="option-btn intro_select5"  data-value="그 외" value="그 외">
        </div>
        <input type="hidden" name="entry.1487248962" id="reason">
      </div>

      <!-- 기본 정보 -->
      <div class="form-group">
        <p class="form-label">성함 / 거주지 / 연락처</p>
        <div class="inline-fields">
          <input type="text" id="name" name="entry.1584470138" placeholder="성함 입력" maxlength="4" style="min-height:60px;font-size:1rem;">
          <input type="text" id="phone" name="entry.730014522" placeholder="연락처 입력 (-없이 입력해주세요.)." maxlength="11" style="min-height:60px;font-size:1rem;">
        </div>
      </div>

      <!-- 거주지 / 상담가능시간 -->
      <div class="form-group">
        <p class="form-label">거주지 / 상담가능시간</p>
        <div class="inline-fields">
          <div class="select-wrap">
            <select name="entry.1911857506" id="location" required>
              <option value="" disabled selected hidden>거주지 선택</option>
              <option value="서울">서울</option>
              <option value="인천">인천</option>
              <option value="세종">세종</option>
              <option value="대전">대전</option>
              <option value="대구">대구</option>
              <option value="울산">울산</option>
              <option value="광주">광주</option>
              <option value="부산">부산</option>
              <option value="제주">제주</option>
              <option value="강원도">강원도</option>
              <option value="경기도">경기도</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
            </select>
          </div>

          <div class="select-wrap">
            <select name="entry.1971910392" id="time_c" required>
              <option value="" disabled selected hidden>상담가능시간</option>
              <option value="언제나 통화 가능">언제나 통화 가능</option>
              <option value="오전 09:00~10:00">오전 09:00 ~ 10:00</option>
              <option value="오전 10:00~11:00">오전 10:00 ~ 11:00</option>
              <option value="오전 11:00~12:00">오전 11:00 ~ 12:00</option>
              <option value="점심 12:00~01:00">점심 12:00 ~ 01:00</option>
              <option value="오후 01:00~02:00">오후 01:00 ~ 02:00</option>
              <option value="오후 02:00~03:00">오후 02:00 ~ 03:00</option>
              <option value="오후 03:00~04:00">오후 03:00 ~ 04:00</option>
              <option value="오후 04:00~05:00">오후 04:00 ~ 05:00</option>
              <option value="오후 05:00~06:00">오후 05:00 ~ 06:00</option>
              <option value="오후 06:00~07:00">오후 06:00 ~ 07:00</option>
            </select>
          </div>
        </div>
      </div>

      <div class="form-group">
        <p class="form-label">상담 내용</p>
        <div class="inline-fields">
          <textarea name="entry.1470467061" id="message" placeholder="상담하고 싶은 내용을 남겨주세요."></textarea>
        </div>
      </div>

      <!-- 개인정보 동의 -->
      <div class="checkbox-area">
        <label class="gc-consent">
          <input type="checkbox" name="agree_r1" id="agree11" checked>
          개인정보 수집·이용에 동의합니다.&nbsp;&nbsp;
        </label>
        <span class="privacyBtn">
          [개인정보취급동의] 
        </span>
        <br><br>
      </div>

      <!-- 제출 버튼 -->
      <input type="submit" id="send_message" class="submit-btn" value="무료 상담 신청하기" disabled>
    </form>

    <iframe name="hidden_iframe11" id="hidden_iframe11" style="display:none;" onload=""></iframe>
    <iframe name="hidden_iframe12" id="hidden_iframe12" style="display:none;" onload=""></iframe>
    <iframe name="hidden_iframe13" id="hidden_iframe13" style="display:none;" onload=""></iframe>
  </div>
</section>

    `;

    const section = container.querySelector("#consultFormSection");
    if (!section) return;

    // ====== 전역 플래그 (기존 코드 호환용) ======
    if (typeof window.submitted === "undefined") window.submitted = false;
    if (typeof window.submitted2 === "undefined") window.submitted2 = false;
    if (typeof window.submitted3 === "undefined") window.submitted3 = false;

    // ====== 라디오 그룹 → hidden 값 매핑 (intro_select1~6, intro_select) ======
    function bindRadioToHidden(selector, hiddenId) {
      const buttons = section.querySelectorAll(selector);
      const hiddenInput = section.querySelector("#" + hiddenId);
      if (!buttons.length || !hiddenInput) return;

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          buttons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
          hiddenInput.value = button.getAttribute("data-value") || "";
        });
      });
    }

    bindRadioToHidden(".intro_select1", "job_style");
    bindRadioToHidden(".intro_select2", "income");
    bindRadioToHidden(".intro_select",  "debt");
    bindRadioToHidden(".intro_select3", "family");
    bindRadioToHidden(".intro_select4", "loan_3month");
    bindRadioToHidden(".intro_select6", "realstate");

    // ====== 체크박스 그룹 (intro_select5) → hidden "reason" (다중 선택) ======
    (function () {
      const checkboxes = section.querySelectorAll(".intro_select5");
      const hiddenInput = section.querySelector("#reason");
      if (!checkboxes.length || !hiddenInput) return;

      checkboxes.forEach(function (button) {
        button.addEventListener("click", function () {
          // active 클래스로 토글 (CSS와 일치)
          button.classList.toggle("active");

          const selectedValues = Array.from(checkboxes)
            .filter(btn => btn.classList.contains("active"))
            .map(btn => btn.getAttribute("data-value") || "");

          hiddenInput.value = selectedValues.join(", ");
        });
      });
    })();

    // ====== 개인정보 동의 여부에 따른 submit 버튼 활성/비활성 ======
    const agree = section.querySelector("#agree11");
    const submitBtn = section.querySelector("#send_message");

    function toggleSubmit() {
      if (!submitBtn) return;
      submitBtn.disabled = !(agree && agree.checked);
    }

    if (agree) {
      toggleSubmit();
      agree.addEventListener("change", toggleSubmit);
    }

    // ====== 개인정보취급동의 버튼 클릭 처리 ======
    const privacyBtn = section.querySelector(".privacyBtn");
    if (privacyBtn) {
      privacyBtn.addEventListener("click", function () {
        if (typeof window.privacyPopUp === "function") {
          window.privacyPopUp();
        } 
      });
    }

    // ====== 폼 submit 처리 (dll() 호출 + 동의 체크 방어) ======
    const form = section.querySelector("#form_e11");
    if (form) {
      form.addEventListener("submit", function (e) {
        // 동의 안했으면 전송 막기
        if (!(agree && agree.checked)) {
          e.preventDefault();
          alert("개인정보 수집·이용에 동의해 주세요.");
          return;
        }

        // 기존 dll() 함수가 있으면 호출 (없으면 무시)
        if (typeof window.dll === "function") {
          try {
            window.dll();
          } catch (err) {
            console.error("dll() 실행 중 오류:", err);
          }
        }

        window.submitted = true;
        // target="hidden_iframe11"으로 전송됨
      });
    }
  });
})();
