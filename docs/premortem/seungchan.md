# Premortem — 박승찬

Team: Team 3
Written on: 2026-09-24
I wrote this before reading anyone else's list: yes

Copy this file, rename it after yourself (for example `gildong.md`), and fill it in alone.
Do this before your team meets to merge, and do not read anyone else's list first.
Write your own list before you ask any artificial intelligence (AI).
An AI list anchors you the same way a teammate's would, and an AI does not know your team, so it can only give you the list every team would get.

Write in Korean or English, whichever you think in.
Keep the headings exactly as they are.

---

## The premise

It is December 19, 2026.
Demo Day.
Your team's project failed.
Not "went okay" — failed, visibly, in front of the class.

You are writing the explanation of why.

Write in the past tense, as fact.
This is not a hedge-your-bets risk survey.
Asserting the failure is what makes the honest answers come out, and that is the whole reason the technique works.

## My list

Four minutes.
At least five causes.
Include the uncomfortable one.
In class you wrote three in four minutes, about yourself; this one is about the project, and you have longer.

| # | What happened (past tense, specific) | When it started | Why nobody stopped it |
|---|---|---|---|
| 1 | 파일럿 대상으로 삼은 폐기물 처리업체와의 소통 지연으로 MVP 로직 검증이 지연됨 | 10월 첫째 주 첫 연락 때는 호의적으로 소통했으나, 세네 번의 연락이 오고 간 10월 셋째 주부터 현업이 바쁘다는 핑계로 지속적으로 딜레이가 발생. 11월 둘째 주까지 로직 검증용 데이터를 받지 못함 | 모두가 지엽님에게 소통을 일임했고, 지엽님도 현업 이슈로 제대로 돌보지 못함 |
| 2 | 신청에 도움을 주는 서비스 구현을 위한 API 연동에서 막힘(연동이 불가한 부분이 많음) → 원터치 신청 효율화 관점에서 서비스의 퀄리티가 매우 저하됨 | 처음부터 API 연동이 가능한지 제대로 확인한 채로 시작한 게 아니라, 10월 셋째 주 구현을 시작하고 하나하나 API를 붙여 보려 할 때 막히는 것을 인지. 10월 말부터 11월 중순까지 연쇄적으로 발생한 문제였음 | API 연동은 박승찬이 도맡았고 다른 팀원들은 모두 승찬에게 일임. 그런데 승찬이 이 문제를 빠른 시일 내에 공유하지 못해, 개선방안이나 대안을 도출하지 못한 채 불완전한 서비스로 데모데이를 맞음 |
| 3 | 파일럿 대상 기업이 부족했음(최소 5개를 목표로 삼았는데 2곳밖에 수급하지 못함) | 서비스 윤곽이 잡힌 10월 넷째 주부터 파일럿 테스트 대상 기업을 찬양님과 지엽님이 관리하는 회사들에서 수급하려 했는데 제대로 진행되지 못함. 11월 셋째 주까지 2곳에 머묾 | 두 사람 외에는 영세한 업체를 물색할 네트워크가 없었고, 지엽님과 찬양님에게 일임했기에 공개적인 루트로 확인하려는 노력을 하지 않음 |
| 4 | 서버 오류로 데모데이에 데모 서비스가 퍼블릭에서 보여지지 않음 | 10월 셋째 주 인프라를 정할 때, 퍼블릭 서버를 쓰면 비용이 발생하고 MVP의 기능적 사이즈를 키우고자 승찬의 집에 있는 맥미니를 로컬 서버로 삼고 그 위에 서비스를 구축함 → 12월 19일 데모데이 당일에 맥미니가 뻗어버려서 시연을 진행하지 못함 | 모두가 생각하지 못했던 이슈였고, 비용을 줄일 수 있다는 관점에서 모두가 동의했었기에 예상치 못한 이슈였음 |
| 5 | 정부 서비스 및 타사 서비스 대비 우리가 기획한 차별점이 무색해짐 (12월 전에 정부 서비스와 타사가 우리가 내세운 차별점을 모두 반영한 업데이트를 진행함) | 11월 말경 정부 서비스에서 우리가 차별점으로 내세운 선정 가능성 및 예상 비용효율 등의 로직을 구현해, 우리가 제공하려던 해자가 소실됨 | 프로젝트가 시작된 뒤로 정부 서비스 및 타사 서비스에 대한 모니터링과 트래킹을 지속하지 않아, 아무도 알아채지 못함 |

Three rules:

- **Past tense, specific.** "We never got one user outside our own team", not "user acquisition may be difficult".
- **Not generic.** "Scope creep" and "the team got busy" are true of every failed project ever, so they carry no information. What specifically crept? Who specifically got busy, in which week, because of what?
- **At least two causes involve the people in this team, and at least one of those is about you.** Skill gaps, who actually understands the code the AI wrote, who has a product launch at work in November, who says "sure" in meetings and disappears. If your list is all technical, it is a safe list, not an honest one.