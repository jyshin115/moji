# QUESTIONS.md

Team: Team 3 
Members: 박승찬, 정찬양, 신지엽, 신희진
Last updated: 2026-09-28

Your biggest open questions about this project.
Write this together, after the premortem merge.

At most five, most important first.
The consultation opens with question 1, so put the one you are least sure about there, not the one that is easiest to ask.

Write in Korean or English.
Keep the headings exactly as they are.

---

## What counts as an open question

- **The answer would change what you do next.** If every possible answer leaves your next two weeks the same, it is curiosity, not an open question.
- **It is specific to this project.** "Is our idea good?" cannot be answered in 30 minutes. "We assume the person in `PROJECT.md` will enter data by hand every day, and none of us has asked one. How do we test that in a week?" can.
- **You have already tried something.** Say what you think the answer is today, even if it is a guess. A question with a guess attached gets a much better answer than a bare one.

Two good places to look for questions:

- `docs/PREMORTEM.md` — a cause of failure you could not find a countermeasure for is a question.
- `docs/PROJECT.md` — the section you argued about longest, or the one where you wrote "nobody yet".


## Our questions

### 1. 공고 추천·알림과 사업계획서 초안을 갖춘 서비스가 이미 있고(SeedUp), 비슷한 기능에 선정 가능성 진단까지 붙인 Poliflo는 연 6만 원을 받고도 2026년 9월 30일 문을 닫는다. 우리는 무엇이 달라서 살아남고, 돈은 누가 내는가?


- **Why it matters:** 우리가 만들려는 핵심 기능(신청 가능 공고 안내·마감 알림, 사업계획서 초안)은 SeedUp이 이미 제공하고, 중기부 통합지원 플랫폼도 추천과 사업계획서 초안을 무료로 준다. 차별점과 지불 주체를 어디에 두느냐에 따라 타깃 정의, 화면, 가격이 전부 바뀐다.
- **What we think today:** 기능 자체는 차별점이 아니라고 본다. 우리가 기대는 것은 세 가지다. 첫째, SeedUp은 예비·초기 창업자와 창업 지원사업에 맞춰져 있고, 우리는 이미 장사를 하고 있는 5인 미만 영세사업장을 본다. 둘째, 이들은 지금 연 100~200만 원을 내고 신청 대행을 사고 있으므로, 그보다 싸게 혼자 신청을 끝내게 해 주면 돈을 낼 이유가 있다. 셋째, 세무법인이 가진 사업자 데이터로 입력 부담을 줄이고, 세무법인을 통해 대표에게 닿을 수 있다. 다만 Poliflo가 왜 닫았는지(비용인지 수요인지)는 공지에 나와 있지 않아 모른다.
- **Who could answer it:** 교수님, 정찬양 님 세무법인의 5인 미만 거래처 대표, 신지엽 님(대행 상품 시장), Poliflo 전 이용자나 업계 관계자.

### 2. 한 학기 MVP는 어디까지 만들고 어디서 멈춰야 하는가?

- **Why it matters:** 같은 "안내·알림 + 사업계획서 초안"이라도 범위가 크게 달라진다. 어떤 지원사업까지 다룰지(소상공인 대상 사업만인지, 대출·이자 같은 정책자금까지인지), 초안을 계획서 전체로 쓸지 핵심 항목만 쓸지, 제출 서류 준비까지 도울지에 따라 데이터, 역할, 데모 장면이 달라진다.
- **What we think today:** MVP는 좁히고 비전은 넓게 둔다. 5인 미만 파일럿 사업장 5곳을 대상으로 소상공인이 많이 신청하는 공고 몇 개를 골라 신청 가능 공고 안내 → 마감 알림 → 사업계획서 초안까지 한 바퀴 돌린다. 정책자금·제출 서류 자동 준비·선정 후 사후관리는 로드맵으로 둔다. 어느 공고 유형을 고를지와 초안을 어디까지 쓸지는 아직 정하지 못했다.
- **Who could answer it:** 교수님.

### 3. 공고문에서 "누가 신청할 수 있는지"와 "사업계획서 양식"을 기계가 쓸 수 있는 형태로 뽑을 수 있는가, 그리고 초안이 쓸 만한지 무엇으로 검증하는가?

- **Why it matters:** 신청 자격과 사업계획서 양식은 API 필드에 없고 HWP·PDF 첨부문서의 표와 각주 안에 있다. 자격을 못 뽑으면 "신청 가능 공고 안내"가 틀리고, 양식을 못 뽑으면 초안이 공고 양식과 어긋난다. 답에 따라 첫 2주를 개발에 쓸지, 공고 정본을 사람이 만드는 데 쓸지가 갈린다.
- **What we think today:** 컨설팅 직후 첫 주에 공고 30건의 자격 조건과 계획서 양식을 사람이 정리하고, 자동 추출 결과와 나란히 놓고 맞은 비율과 건당 검수 시간을 잰다. 명확한 조건(업종·지역·업력·매출·상시근로자 수)은 규칙으로 걸러낸다. 초안은 두 가지로 검증하려 한다. 하나는 신지엽 님이 심사위원 관점에서 읽히는 계획서인지 보는 것, 다른 하나는 파일럿 대표가 초안을 받고 "이대로 고쳐서 내겠다"고 하는지 보는 것이다.
- **Who could answer it:** 교수님(수업에서 인정하는 검증 수준), 지원사업 심사·신청 경험자, 그리고 첫 주에 직접 해 보는 것.

### 4. 공공 공고 데이터와 세무법인 거래처 데이터를 서비스에 써도 되는가, 어디까지 되는가?

- **Why it matters:** 공고 원문·첨부파일을 저장하고 가공해 상업 서비스에 쓸 수 없다면 "원문 링크 안내" 모델로 바꿔야 한다. 세무 데이터를 쓸 수 없거나 홈택스 세무대리인 연동 같은 인증이 막히면, 대표가 모든 정보를 직접 입력해야 해서 입력 부담을 줄인다는 강점이 사라진다. 수업 데모에서 실데이터를 보여줄 수 있는지도 여기에 달려 있다.
- **What we think today:** 확인하지 않았다. 기업마당과 중기부 사업공고 API는 인증키 발급이 필요하고, 중기부 API는 운영 단계에 심의승인이 필요하다. 첨부파일의 재배포·상업적 이용 범위는 약관을 읽고 제공기관에 서면으로 문의할 계획이다. 세무 데이터는 파일럿 사업장에서 명시적 동의를 받아 쓰는 방안을 생각하고 있다. 세무대리인 비밀유지 의무와의 관계는 모른다.
- **Who could answer it:** 정찬양 님(세무대리인 실무 기준), API·공고 제공기관 담당자, 필요하면 법률 자문.

### 5. 사업장 1곳에 공고 안내와 사업계획서 초안을 제공하는 데 드는 비용(LLM 토큰, 파싱, 사람 검수, 매일 갱신)이 대표가 낼 수 있는 가격 안에 들어오는가?

- **Why it matters:** 이 서비스는 매일 수집·파싱·알림을 돌리는 고정비 사업이고, 사업계획서 초안은 토큰 비용이 크다. 입력 공백을 사람이 인터뷰로 메우면 인건비가 붙는다. 건당 비용이 연 100~200만 원짜리 대행 상품보다 충분히 낮은 가격 안에 들어오지 않으면, 기능을 줄이거나 사람이 개입하는 시점을 바꿔야 한다.
- **What we think today:** 아직 한 번도 재 보지 않았다. 첫 주 공고 30건 처리와 파일럿 초안 작성 때 건당 토큰 비용과 검수 시간을 함께 기록할 계획이다. 사람의 개입은 "처음 사업장 정보를 만들 때 한 번"으로 제한하는 것을 검토하고 있다.
- **Who could answer it:** 직접 만들어 봐야 안다. 가격 쪽은 파일럿 대표들(대행 대신 얼마까지 낼지)과 정찬양 님, 교수님.

## Where we disagree

- **서비스 구축의 범위.** 넓히자는 쪽(정찬양): 예비창업자·폐업 예정 사업자, 대출·이자 같은 정책자금 안내까지 다뤄야 대표에게 실제로 쓸모가 있다. 좁히자는 쪽: 5인 미만 사업장의 신청 가능 공고 안내·알림과 사업계획서 초안까지만 한 학기 안에 제대로 만든다.
- **서비스 구축 후 타깃 고객.** 사업장 대표에게 직접 팔자는 쪽: 대행비 대신 내는 돈이므로 대표가 지불 주체다. 세무법인을 통해 팔자는 쪽: 데이터와 대표와의 접점이 세무법인에 있으니 세무법인이 거래처에 제공하는 구조(B2B2C)가 현실적이다. 지자체·협회가 관내 사업자에게 제공하는 구조도 후보로 남아 있다.

---

## After the consultation

Fill this in within a week of your slot.

| # | What we heard | What we will do about it | Owner | By when |
|---|---|---|---|---|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

## Revision log

| Date | What changed and why |
|---|---|
| 2026-09-26 | Draft for consultation (팀원 4명의 질문 목록을 합쳐 5개로 정리) |
| 2026-09-28 | PROJECT.md 방향 변경(5인 미만, 선정 가능성 제외, 안내·알림 + 사업계획서 초안)에 맞춰 질문 5개를 고치고 순서를 바꿈. Where we disagree를 범위와 타깃 고객 두 가지로 정리 |
