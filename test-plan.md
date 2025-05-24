# Test Plan – Todo.vue

##  Objective
Ensure the `Todo.vue` component works as expected across its core features—adding, completing, and deleting tasks—using a combination of unit, integration, and end-to-end (E2E) testing.



## Types of Tests & Priorities


Test Type	Description	Priority
Unit Tests	Validate logic in methods, computed properties and component state	High
Integration	Confirm proper interactions between 'Todo.vue' and child/parent components	Medium
E2E Tests	Simulate full user flows like adding, completing and deleting todos	High




##  Tools
Unit/Integration: [Vue Test Utils](https://test-utils.vuejs.org/)
E2E: [Playwright](https://playwright.dev/)



##  Test Focus Areas
Adding a new todo item
Marking a todo as complete
Deleting a todo item
Preventing empty inputs
UI state/feedback (e.g., strike-through when completed)
(Optional) Data persistence across reloads



##  Test Cases

### Test Case 1: Add a New Todo
Description: Verify that a new task is added to the list.
Preconditions: App is loaded, and the input field is visible.
Steps to Reproduce:
  1. Type 'Read book' in the input field.
  2. Press Enter or click the "Add" button.
Expected Result: A new task labeled 'Read book' appears in the todo list.



### Test Case 2: Mark Todo as Complete
Description: Verify that marking a task as complete updates its visual state.
Preconditions: At least one task exists in the list.
Steps to Reproduce:
  1. Click the checkbox next to an existing task.
Expected Result: Task is visually marked as complete (e.g., with strike-through styling).



### Test Case 3: Delete a Todo
Description: Ensure tasks can be removed individually.
Preconditions: At least one task exists in the list.
Steps to Reproduce:
  1. Click the delete icon (e.g., trash can) next to the task.
Expected Result: The selected task is removed from the list.



### Test Case 4: Add Empty Todo
Description: Prevent users from adding empty tasks.
Preconditions: App is loaded.
Steps to Reproduce:
  1. Leave the input field blank.
  2. Click the "Add" button or press Enter.
Expected Result: No task is added. Optionally, an error message is displayed or the button is disabled.



### Test Case 5: Persistent State (Optional Feature)
Description: Tasks should persist on page reload (if persistence is implemented).
Preconditions: Add one or more tasks.
Steps to Reproduce:
1. Refresh the browser page.
Expected Result:Previously added tasks remain in the list.



