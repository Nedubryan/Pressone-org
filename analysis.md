# Bug Analysis – Duplicate Todo Items

## Steps to Reproduce

1. Navigate to the Todo app.
2. In the input field, type a new todo (e.g., "Buy groceries").
3. Press Enter rapidly multiple times (e.g. 2–3 times in under a second).
4. Observe multiple identical todos appearing.
5. Try deleting one of the duplicates.

Expected:
- Only one todo should be created.
- Deleting one todo should remove only that specific item.

Actual:
- Multiple identical todos appear.
- Deleting one may remove multiple items.



## Root Cause Hypothesis

### Duplicate Entry Cause:
- The `addTodo` function likely does not check for duplicates or debounce input.
- Pressing Enter quickly fires multiple events before the `newTodo` string is cleared or the UI re-renders.
- Each event pushes the same string into the list.

### Deletion Bug Cause:
- If todos are stored as objects without unique IDs (e.g., just `{ text: 'Buy groceries' }`), the `deleteTodo(index)` function may misbehave if list indices shift quickly.
- It's possible the app deletes by `text` or relies on non-unique keys in the UI, causing more than one identical item to be removed or re-rendered incorrectly.



### How to Prevent Regression

### 1. Assign Unique IDs
- Modify todos to have a unique `id`:

## js
this.todos.push({ id: Date.now(), text: this.newTodo })

2. Debounce or Disable Input
- Disable the "Add" button immediately after it is clicked.

Or debounce the Enter key event handler.

3. Block Duplicate Text
Optionally prevent identical text entries:

- if (this.todos.some(t => t.text === this.newTodo.trim())) return

4. Test Coverage
Add unit and E2E tests for:

- Preventing duplicate todos when Enter is pressed rapidly.

- Deleting a single todo only removes one item.

By improving ID handling, debouncing inputs, and adding safeguards against duplicate text, we can eliminate this class of bug and ensure future stability.

