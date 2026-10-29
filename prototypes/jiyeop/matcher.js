function koreaDate(date = new Date()) {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
}
function matchGrant(grant, company, today) {
  if ((grant.end && grant.end < today) || (grant.start && grant.start > today)) return null;
  const matched = [], missing = [...grant.checks];
  let excluded = false;
  function compare(value, test, label, reason) {
    if (value === '' || value === null || value === undefined) missing.push(label + ' 확인 필요');
    else if (!test(value)) excluded = true;
    else matched.push(reason);
  }
  compare(company.small, v => v === 'yes', '소상공인 해당 여부', '소상공인 해당: 사용자 확인');
  if (grant.province) compare(company.province, v => v === grant.province, '시도', grant.province + ' 소재');
  if (grant.district) compare(company.district, v => v.trim() === grant.district, '시군구', grant.district + ' 소재');
  if (grant.industry) compare(company.industry, v => v === grant.industry, '주업종', '제조업 선택');
  if (grant.employeesBelow !== undefined) compare(company.employees, v => Number(v) < grant.employeesBelow, '직원 수', '직원 ' + grant.employeesBelow + '명 미만');
  if (grant.revenueMax !== undefined) compare(company.revenue, v => Number(v) <= grant.revenueMax, '매출액', '2025년 매출 3억원 이하');
  return excluded ? null : { grant, matched, missing, group: missing.length ? 'review' : 'match' };
}
if (typeof module !== 'undefined') module.exports = { matchGrant, koreaDate };
