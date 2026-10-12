# PREMORTEM.md

Team: Team 3 
Members: 박승찬, 신지엽, 정찬양, 신희진
Merged on: 2026-09-27
Last updated: 2026-09-28

> **Order matters, and here it is the entire method.**
> Every member first writes their own list in `docs/premortem/<name>.md`, alone.
> Only then does the team fill in this file.
>
> If you brainstorm as a group first, the first risk named anchors everyone else, and the quiet member's risk, which is usually the real one, never gets written down.
>
> Write content in Korean or English.
> Keep the headings exactly as they are.

---

## 1. Individual lists

| Member | File | Written on | Causes listed |
|---|---|---|---|
| 박승찬 | `docs/premortem/seungchan.md` | 2026-09-24 | 5 |
| 신지엽 | `docs/premortem/jiyeop.md` | 2026-09-27 | 8 |
| 정찬양 | `docs/premortem/chanyang.md` | 2026-09-27 | 5 |
| 신희진 | `docs/premortem/heejin.md` | 2026-09-27 | 5 |

## 2. Read-out

Go around the table.
One cause each, in turn, until every list is exhausted.
No debating during the read-out, and nobody reads their whole list at once.
People have to feel safe saying the awkward one, so the only allowed response is writing it down.

## 3. The merged list

Every cause from every list goes here.
Stack the repeats into one row and keep the sharpest wording, not the most diplomatic one.
Cluster by problem, never by role or department: once a cluster is called "development", half the team decides it is somebody else's problem.

Sort by how many members raised it, most first.
The repeats are your priority signal, and you get it for free.
Break ties by expected damage.

Mark a cause with **(us)** when it exists because of who is on this team, not because of the software.
At least two rows must carry that mark: skill asymmetry, time asymmetry, who will actually debug the code the artificial intelligence (AI) wrote, who has a product launch at work in November, who agrees in meetings and then goes quiet.
A premortem with no **(us)** rows is a premortem about software, not about this team.

| # | Failure cause (past tense, specific) | Problem cluster | Raised by | How many |
|---|---|---|---|---|
| 1 | 엉뚱한 사업을 추천했다. 단어가 비슷하다는 이유로 목적이 다른 공고가 올라왔고, 출처가 불확실한 수기 데이터로 돌린 매칭 결과는 대표도 우리도 믿지 못했다. 확인하지 못한 조건은 "추가 확인 필요"로 남겨, 가장 어려운 확인 작업을 사용자에게 다시 넘겼다. | 추천·판정 오류 | 신지엽(#5), 정찬양(#2), 신희진(추가 확인 필요) | 3 |
| 2 | 한 사람에게 일을 몰아줬고, 그 사람이 막혀도 공유되지 않았다. 파일럿 소통은 지엽, API 연동은 승찬, 기업 섭외는 지엽·찬양에게 맡긴 뒤 나머지는 손을 뗐다. 승찬은 10월 말 API 연동이 막힌 것을 11월 중순까지 공유하지 못했고, 파싱 결과는 "글자가 나온다"는 이유로 원문 대조 없이 다음 단계로 넘어갔다. **(us)** | 일임과 공유 지연 | 박승찬(#1·#2·#3), 신희진(개발 담당 결과를 확인 없이 넘김) | 2 |
| 3 | 팀원마다 누구의 어떤 문제를 푸는지 이해가 달랐다. 한 명은 지원사업에 익숙하지 않은 대표를, 다른 한 명은 조건으로 공고를 거르는 기능을, 또 다른 한 명은 신청 준비와 알림을 떠올렸고, 그 차이를 정리하지 않은 채 기능을 더했다. 기능 우선순위를 여러 번 바꾸며 한정된 시간을 썼다. **(us)** | 누구의 문제인지 합의 실패 | 신지엽(#7), 신희진(사용자 정의) | 2 |
| 4 | 기업 정보를 제대로 받지 못했다. 10월 셋째 주 외부 테스트 배포 후 대표들은 개업일·업종·매출을 귀찮아하며 대충 적었고, 사업계획서용 인터뷰 텍스트를 끝까지 입력한 사업자는 한 명도 없었다. 모호한 사업 설명을 되묻는 질문도 없었다. | 기업 정보 확보 실패 | 정찬양(#1·#2), 신지엽(#4) | 2 |
| 5 | 공고의 자격 조건은 API 필드가 아니라 HWP·PDF 첨부문서의 표와 각주 안에 있었다. 텍스트가 추출되면 파싱이 됐다고 봤지만 표의 행과 열, 예외 각주, 본사·공장 소재지 구분이 깨졌고, 신청할 수 없는 사업을 추천했다. | 공고가 판정 가능한 데이터가 아니었다 | 신지엽(#2), 신희진(텍스트 추출 ≠ 조건 추출) | 2 |
| 6 | 대표들이 가장 힘들어한 것은 공고 탐색이 아니라 신청서 작성과 발표 준비였다. 신청을 돕는 API는 연동이 막힌 곳이 많았고, 인터뷰에 응한 대표들도 사업계획서를 직접 다듬어야 한다는 걸 알자 중도 포기했다. 남은 대표들의 사업 컨설팅을 우리가 무상으로 떠안았다. | 진짜 병목(신청)을 못 풀었다 | 박승찬(#2), 정찬양(#4) | 2 |
| 7 | "이미 있는 서비스 아니냐", "대기업 서비스는 인증만 하면 자동 조회되던데 왜 다 입력하냐"는 말을 들었다. 11월 말 정부 서비스가 선정 가능성·비용효율 로직을 반영했고, 사람 손이 필요한 영역은 액셀러레이터·컨설팅사가 이미 잡고 있었다. 시작 후 경쟁 서비스를 추적하지 않아 차별점이 사라진 것을 늦게 알았다. | 차별점 소멸 | 박승찬(#5), 정찬양(#5) | 2 |
| 8 | 수집 대상을 처음부터 넓게 잡았고, 파싱이 막힌 뒤에도 "다양한 공고를 보여줘야 추천 서비스 같다"며 범위를 줄이지 않았다. 흩어진 공고를 수동으로 모으고 문서마다 보완하느라 시간을 다 써서 주요 공고를 충분히 확보하지 못했다. | 범위를 줄이지 못했다 | 신지엽(#1), 신희진(범위 유지) | 2 |
| 9 | 거래처와 포트폴리오 기업의 신청·선정·탈락 이력을 쉽게 모을 수 있다고 예상했지만 실제로 모인 사례가 부족했다. 추천 결과가 맞았는지 검증할 시간과 데이터를 끝내 확보하지 못했다. | 검증 불가 | 신지엽(#8), 신희진(검증 시간 미확보) | 2 |
| 10 | 연천 폐기물 처리업체와 10월 첫째 주에는 호의적으로 연락했지만, 10월 셋째 주부터 "현업이 바쁘다"며 답이 늦어졌다. 11월 둘째 주까지 로직 검증용 데이터를 받지 못했다. 파일럿은 목표 5곳 중 2곳에 그쳤고, 두 사람의 네트워크 외에 기업을 찾을 경로가 없었다. **(us)** | 파일럿 기업 확보 | 박승찬(#1·#3) | 1 |
| 11 | 11월 첫째 주 대표 인터뷰로 방식을 바꿨지만 찬양의 세무 결산 업무와 팀원 각자의 현업 때문에 일정이 맞지 않았다. 5개사만 간신히 만났고, 인적 공수에 지친 팀은 데모데이를 목업으로 넘기기만 바랐다. **(us)** | 현업 일정과 사람 손이 드는 작업 | 정찬양(#3) | 1 |
| 12 | 비용을 아끼려고 승찬의 집 맥미니를 서버로 썼고, 12월 19일 데모데이 당일 맥미니가 뻗어 시연을 하지 못했다. 모두가 비용 절감에 동의했기에 아무도 의심하지 않았다. **(us)** | 데모 인프라 | 박승찬(#4) | 1 |
| 13 | 앱이 추천을 해도 본업에 치인 대표들은 사업계획서·발표 준비가 필요하다는 걸 알자 신청을 포기했다. 지원사업 수주에 필요한 대표의 의지를 끌어낼 장치가 없었다. | 대표의 실행 의지 | 정찬양(#4) | 1 |
| 14 | AI 호출과 수동 검수에 예상보다 많은 비용과 시간이 들었다. 소량으로 건당 비용과 검수 시간을 재 보지 않은 채 처리량을 늘렸다. | 비용과 운영 부담 | 신지엽(#3) | 1 |
| 15 | 수정 공고와 조기 마감을 반영하지 못해 이미 무효가 된 조건과 일정을 안내했다. 신규 수집만 챙기고 기존 공고의 변경을 확인하는 절차가 없었다. | 공고 갱신 | 신지엽(#6) | 1 |

## 4. What only one person saw

| Cause | Raised by | What we decided to do about it |
|---|---|---|
| #10 파일럿 기업 확보 **(us)** | 박승찬 | Top 3에 넣는다. |
| #11 현업 일정과 사람 손이 드는 작업 **(us)** | 정찬양 |  |
| #12 맥미니 서버 다운 **(us)** | 박승찬 |  |
| #13 대표의 실행 의지 | 정찬양 |  |
| #14 비용과 운영 부담 | 신지엽 |  |
| #15 공고 갱신 | 신지엽 |  |

A cause only one person saw is not a weak signal.
It is usually the one the rest of the team is structurally unable to see.

## 5. The three we act on

Pick at most three.
More than three is a list, not a plan.

The top of the merged list is where you start looking, not an automatic answer.
If a cause only one person saw is the one that would end the project, pick it.

| # | Failure cause | Early warning signal — what we would actually observe, and when | Countermeasure — the action | Owner | By when |
|---|---|---|---|---|---|
| 1 | #2 한 사람에게 일을 몰아주고, 막혀도 공유되지 않았다 **(us)** | 매주 일요일 체크인에서 "막힌 것 없음"이 2주 연속 나오는데 담당 작업의 결과물(화면·데이터)이 팀 채널에 올라오지 않는다 | 매주 일요일 21시 15분 체크인을 열고, 각자 "이번 주 결과물 링크 1개 + 막힌 것 1개"를 팀 채널에 올린다. 모든 작업에 담당자 외 확인자 1명을 붙인다 | 박승찬 | 10/4 첫 체크인 |
| 2 | #5 공고가 판정 가능한 데이터가 아니었다 | 10/9까지 공고 30건 중 자격 조건을 원문과 대조해 맞게 뽑은 비율이 60% 미만이다 | 공고 30건의 자격 조건을 사람이 원문에서 표로 정리하고, 자동 추출 결과와 나란히 놓고 맞은 비율과 건당 검수 시간을 기록한다. 60% 미만이면 대상 업종·지역을 하나로 줄인다 | 신희진 | 10/9 |
| 3 | #10 파일럿 기업 확보 **(us)** | 10/16까지 신청 이력과 데이터 사용 동의를 받은 파일럿 기업이 3곳 미만이다 | 정찬양·신지엽이 각자 후보 기업 5곳 명단을 내고, 10/16까지 기업별로 데이터 사용 동의서를 받는다. 연천 업체 연락은 담당자 외 1명을 참조로 넣는다 | 정찬양, 신지엽 | 10/16 |

Three tests every row must pass:

- **The signal is observable.** "We notice we are falling behind" is not a signal. "Two members have not opened the project in seven days" is.
- **The countermeasure is an action, not a posture.** "열심히 하기", "우선순위 관리", and "we will be careful" are intentions. "Call three potential users and write down what they say" is an action. If it has no verb, rewrite it.
- **The owner is one named person, and there is a date.** "The team" owns nothing. A countermeasure with no date is a countermeasure with no week: it never lands on anyone's calendar.

You do not need a 1-to-5 likelihood and impact matrix, and we would rather you did not add one.
It makes every risk look equally considered whether or not it was.

Everything in section 3 that is not in this table is a risk you are knowingly leaving alone for now.
That is a decision, and it is fine.

---

## Revision log

Any change of direction needs a new row here within one week.
A premortem that analyzes a product you no longer build is worse than none, because it reads as covered.

| Date | What changed and why |
|---|---|
| 2026-09-26 | Draft for consultation |
| 2026-09-28 | Revised after consultation |

---

Method note: Gary Klein, "Performing a Project Premortem", Harvard Business Review, September 2007.
