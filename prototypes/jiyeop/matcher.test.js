const { test } = require('node:test');
const assert = require('node:assert/strict');
const grants = require('./data.js');
const { matchGrant, koreaDate } = require('./matcher.js');
const day = '2026-10-27';
const company = { province: '경북', district: '봉화군', industry: 'retail', small: 'yes', employees: '2', revenue: '20000' };
const bonghwa = grants.find(g => g.id === '126215');
test('봉화 매출 상한은 포함하고 초과는 제외', () => {
  assert.ok(matchGrant(bonghwa, {...company, revenue: '30000'}, day));
  assert.equal(matchGrant(bonghwa, {...company, revenue: '30001'}, day), null);
});
test('모름은 0과 다르게 확인 필요로 남김', () => {
  assert.ok(matchGrant(bonghwa, {...company, revenue: ''}, day).missing.includes('매출액 확인 필요'));
  assert.ok(!matchGrant(bonghwa, {...company, revenue: '0'}, day).missing.includes('매출액 확인 필요'));
});
test('명확한 불일치는 다른 정보 부족보다 우선', () => {
  assert.equal(matchGrant(bonghwa, {...company, small: '', province: '서울'}, day), null);
});
test('마감 당일 포함, 다음 날 제외, 시작 전 제외', () => {
  assert.ok(matchGrant(bonghwa, company, '2026-11-30'));
  assert.equal(matchGrant(bonghwa, company, '2026-12-01'), null);
  assert.equal(matchGrant(bonghwa, company, '2026-04-28'), null);
});
test('소상공인 비해당 시 결과 없음, 복구 및 마감 필터', () => {
  assert.equal(grants.filter(g => matchGrant(g, {...company, small: 'no'}, day)).length, 0);
  assert.equal(grants.filter(g => matchGrant(g, company, day)).length, 3);
  assert.equal(matchGrant(grants.find(g => g.id === '125880'), company, day), null);
});
test('예산 소진 공고는 현재 접수 여부를 단정하지 않음', () => {
  const result = matchGrant(grants.find(g => g.id === '125890'), {...company, province: '울산'}, day);
  assert.equal(result.group, 'review');
  assert.ok(result.missing.some(s => s.includes('예산')));
});
test('제조업 직원 10명 미만 조건과 미입력', () => {
  const g = grants.find(g => g.id === '127360');
  assert.ok(matchGrant(g, {...company, industry: 'manufacturing', employees: '9'}, day));
  assert.equal(matchGrant(g, {...company, industry: 'manufacturing', employees: '10'}, day), null);
  assert.ok(matchGrant(g, {...company, industry: 'manufacturing', employees: ''}, day).missing.includes('직원 수 확인 필요'));
});
test('한국 날짜는 UTC 자정이 아닌 한국 자정에 전환', () => {
  assert.equal(koreaDate(new Date('2026-10-26T15:00:00Z')), day);
});
test('10건의 원문 링크는 중복 없이 기업마당을 가리킴', () => {
  assert.equal(grants.length, 10); assert.equal(new Set(grants.map(g => g.id)).size, 10);
  grants.forEach(g => assert.equal(new URL(g.url).hostname, 'www.bizinfo.go.kr'));
});
