#  Unit Test Notes for Todo.vue

## Mocking
No external modules needed mocking.
Used `setData` to simulate internal state in the computed property test.
`mount()` used over `shallowMount()` to render full DOM interactions.

## Failing Test: Empty Input
Initially, the empty input test failed because the component lacked validation logic.

## js
// This failed initially because blank input was still being added
await input.setValue('')
await wrapper.find('button').trigger('click')
expect(wrapper.vm.todos.length).toBe(0)

## Fix: Added a check in the addTodo method in Todo.vue:

addTodo() {
  if (this.newTodo.trim() === '') return
  this.todos.push({ text: this.newTodo })
  this.newTodo = ''
}
After fixing, the test passed successfully