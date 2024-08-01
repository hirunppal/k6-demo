import { jUnit } from 'https://jslib.k6.io/k6-summary/0.0.2/index.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export function handleSummary(data) {
  console.log('Preparing the end-of-test summary...');
  return {
    'junit.xml': jUnit(data), // Transform summary and save it as a JUnit XML...
    'summary.html': htmlReport(data), // Transform summary and save it as an HTML report...
  };
}
