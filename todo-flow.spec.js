import { test, expect } from '@playwright/test'

test.describe('Todo Flow E2E', () => {
  test('Login, create todos, delete one, and logout', async ({ page }) => {
    // Go to login page
    await page.goto('http://localhost:5173/login')

    // Login
    await page.fill('input[name="username"]', 'testuser')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')

    // Wait for redirect to todo page
    await page.waitForURL('**/todo')

    // Add 3 todos
    const todos = ['Buy milk', 'Read book', 'Walk dog']
    for (const todo of todos) {
      await page.fill('input[placeholder="Add new task"]', todo)
      await page.click('button:text("Add")')
    }

    // Assert all 3 todos appear
    for (const todo of todos) {
      await expect(page.locator('ul')).toContainText(todo)
    }

    // Delete the second todo
    const secondTodo = page.locator('ul li').nth(1)
    await secondTodo.locator('button:text("Delete")').click()

    // Assert that second todo is removed
    await expect(page.locator('ul')).not.toContainText('Read book')

    // Optional: check updated count or filter if present
    await expect(page.locator('p')).toContainText('Total: 2')

    // Logout
    await page.click('button:text("Logout")')
    await expect(page).toHaveURL(/\/login/)
  })
})
