// ./js/form.js
(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("form_contact");
    if (!container) return;

    // ====== 폼 HTML 주입 (style + markup 그대로, script/inline 이벤트는 JS로 처리) ======
    container.innerHTML = `
<section id="consultFormSection">
  <style>
    #consultFormSection #consultForm {
      font-family: 'Noto Sans KR', sans-serif;
      padding: 2rem;
      line-height: 1.6;
      color: #222;
      background-color: #fff;
    }

    #consultFormSection .gc-deco {
      width: 60px;
      height: 6px;
      background: linear-gradient(90deg,#dcbe4e,#f8e18c);
      margin: 0 auto 1rem;
      border-radius: 3px;
    }

    #consultFormSection .gc-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    #consultFormSection .gc-header h2 {
      font-size: 2.15rem;
      font-weight: 800;
    }

    #consultFormSection .gc-header h2 span {
      display: block;
      font-size: 1.8rem;
      color: #dcbe4e;
    }

    #consultFormSection .gc-header p {
      margin-top: 0.5rem;
      font-size: 1rem;
      color: #555;
    }

    #consultFormSection .gc-stepbar {
      margin-bottom: 2rem;
    }

    #consultFormSection .gc-progress {
      height: 4px;
      background: #eee;
      border-radius: 2px;
      overflow: hidden;
    }

    #consultFormSection .gc-progress-fill {
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg,#dcbe4e,#bfa742);
    }

    #consultFormSection h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: #000;
    }

    #consultFormSection .form-group {
      margin-bottom: 2rem;
    }

    #consultFormSection .form-label {
      font-weight: bold;
      font-size: 1rem;
      margin-bottom: 0.8rem;
      color: #000;
    }

    #consultFormSection .button-group {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.5rem;
    }

    #consultFormSection .option-btn {
      width: 100%;
      padding: 0.5rem;
      border: 2px solid #dadada;
      border-radius: 8px;
      background-color: #fff;
      color: #000;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    #consultFormSection .option-btn.active {
      background-color: #c49b5a;
      color: #fff;
      border-color: #c49b5a;
      font-weight: bold;
    }

    #consultFormSection .inline-fields {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }

    /* input / select 기본 */
    #consultFormSection .inline-fields input,
    #consultFormSection .inline-fields select{
      flex:1 1 0;
      min-width:0;
      padding:0.8rem;
      border:2px solid #ccc;
      border-radius:6px;
      background:#fff;
      color:#000;
      font-size:1rem;
      height:60px;
      box-sizing:border-box;
    }

    #consultFormSection input::placeholder {
      color: #aaa;
    }

    #consultFormSection .checkbox-area {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      margin-top: -0.5rem;
    }

    @media screen and (max-width: 550px) {
      #consultFormSection .checkbox-area {
         flex-direction: column;
      }
    }

    /* === Select 커스텀화 ========================================== */
    #consultFormSection select{
      -webkit-appearance:none;
      -moz-appearance:none;
      appearance:none;
    }
    /* placeholder 느낌 방지 */
    #consultFormSection select:invalid{color:#9e9e9e;}

    /* 화살표 UI */
    #consultFormSection .select-wrap{position:relative;flex:1 1 0;min-width:0;width:100%;}
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
    /* select 가로 100% 유지 */
    #consultFormSection .select-wrap select{
      display:block;
      width:100%;
      max-width:100%;
    }

    #consultFormSection .checkbox-area input {
      margin-right: 0.5rem;
    }

    #consultFormSection input.submit-btn {
      width: 100%;
      background: #c49b5a;
      color: #fff;
      padding: 1rem;
      font-size: 1.1rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: background 0.3s;
    }

    #consultFormSection input.submit-btn:hover {
      background: #d8b56a;
    }

    @media (max-width: 1024px) {
      #consultFormSection .button-group {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 768px) {
      #consultFormSection .inline-fields {
        flex-direction: column;
      }

      #consultFormSection .button-group {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  </style>

  <div id="consultForm">
    <form id="form_e11" name="frm_phonecall_web" action="" method="post" target="hidden_iframe11" class="gc-form" novalidate>
      <input type="hidden" name="entry.637408694" value="본문 신청폼">  
      <input type="hidden" name="entry.339503137" value="당근 - 서민채무 - 더엘">
      <div class="gc-deco"></div>

      <div class="gc-header">
        <h2>채무긴급대응 법률센터<br><span>무료상담신청</span></h2>
        <p>지금 신청하면 채무 걱정이 사라집니다.<br>당신의 빚, 이젠 여기서 끝내세요.</p>
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
          <textarea name="entry.1470467061" id="message" placeholder="상담하고 싶은 내용을 남겨주세요." style="width:100%;min-height:150px;padding:10px;font-size:1rem;border:2px solid #ccc;"></textarea>
        </div>
      </div>

      <!-- 개인정보 동의 -->
      <div class="checkbox-area">
        <label class="gc-consent">
          <input type="checkbox" name="agree_r1" id="agree11" checked>
          개인정보 수집·이용에 동의합니다.&nbsp;&nbsp;
        </label>
        <span class="privacyBtn" style="color:#000;font-weight:400;font-size:13px;margin-top:0px;cursor:pointer;">
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
