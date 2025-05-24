# End-to-End Test Notes

## Handling Flakiness

To avoid flakiness:

- We use `await page.waitForURL()` and `expect().toContainText()` to assert only after elements are stable.
- Added retry-ability via Playwright’s built-in auto-wait and assertions.
- Avoided hardcoded `waitForTimeout()` delays.
- Test runs in `test.describe()` scope to isolate context.

## Reporting Failures

- Use Playwright's built-in HTML reporter:  
  Run with: `npx playwright test --reporter=html`
- For CI, failed tests will show up with trace + video if configured:
  bash
  npx playwright test --trace=on --video=on

## CI Integration
This test is CI-ready:

- Run npx playwright install during setup

- Add npx playwright test to your CI pipeline 

- Use artifacts (HTML reports, videos, traces) for post-failure debugging

Example:
name: Run Playwright tests
  run: |
    npm ci
    npx playwright install
    npx playwright test
