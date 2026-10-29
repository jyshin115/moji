const form = document.getElementById('company');
const results = document.getElementById('results');
let verification = false;
function updateMode() {
  const mode = document.getElementById('mode');
  mode.className = 'notice' + (verification ? ' testing' : '');
  mode.textContent = verification ? '검증 모드 · 기준일 2026-10-27 고정 · 현재 모집 상태를 뜻하지 않습니다.' : '실제 날짜 모드 · 한국 기준 ' + koreaDate() + ' · 수록 자료는 자동 갱신되지 않습니다.';
}
function element(tag, text, className) {
  const node = document.createElement(tag); node.textContent = text;
  if (className) node.className = className;
  return node;
}
function search(event) {
  if (event) event.preventDefault();
  if (!form.reportValidity()) return;
  updateMode();
  const values = Object.fromEntries(new FormData(form));
  values.district = values.district.trim();
  const today = verification ? '2026-10-27' : koreaDate();
  const found = GRANTS.map(g => matchGrant(g, values, today)).filter(Boolean);
  results.replaceChildren();
  results.append(element('p', '수록 ' + GRANTS.length + '건 중 후보 ' + found.length + '건 · 마감·접수 전·명확한 불일치 제외', 'muted'));
  if (!found.length) {
    results.append(element('p', '수록 공고 중 후보가 없습니다. 입력을 수정해 다시 검색하거나 공식 사이트의 다른 공고를 확인하세요.', 'empty'));
    return;
  }
  for (const group of ['match', 'review']) {
    const items = found.filter(r => r.group === group);
    if (!items.length) continue;
    results.append(element('h3', (group === 'match' ? '수록 기본조건 일치' : '추가 확인이 필요한 후보') + ' · ' + items.length + '건'));
    for (const {grant, matched, missing} of items) {
      const card = element('article', '');
      card.append(element('span', grant.end ? '마감 ' + grant.end : '예산 소진 시까지 · 접수 확인 필요', 'badge ' + (group === 'review' ? 'review' : '')));
      card.append(element('h3', grant.title), element('p', grant.summary));
      if (matched.length) card.append(element('p', '일치한 기본 조건: ' + matched.join(' · ')));
      if (missing.length) {
        card.append(element('p', '확인할 내용'));
        const list = element('ul', '');
        missing.forEach(item => list.append(element('li', item)));
        card.append(list);
      }
      const link = element('a', '기업마당 공식 공고 보기 ↗');
      link.href = grant.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      card.append(link, element('p', '정보 확인 ' + grant.checkedOn + ' · 최종 자격 및 최신 접수 상태는 원문 확인', 'date'));
      results.append(card);
    }
  }
}
form.addEventListener('submit', search);
document.getElementById('sample').addEventListener('click', () => {
  form.reset();
  for (const [name, value] of Object.entries({ province: '경북', district: '봉화군', industry: 'retail', small: 'yes', employees: '2', revenue: '20000', founded: '2023-01-01' })) form.elements.namedItem(name).value = value;
  verification = true; updateMode();
  results.replaceChildren(element('p', '확인용 입력을 불러왔습니다. ‘후보 찾기’를 눌러주세요.', 'empty'));
});
document.getElementById('live').addEventListener('click', () => { verification = false; search(); });
form.reset(); updateMode();
