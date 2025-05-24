import { mount } from '@vue/test-utils'
import Todo from '@/components/Todo.vue'

describe('Todo.vue', () => {
  it('interaction: adds a new todo on button click', async () => {
    const wrapper = mount(Todo)

    const input = wrapper.find('[data-testid="todo-input"]')
    await input.setValue('Learn Vue 3')
    await wrapper.find('[data-testid="add-button"]').trigger('click')

    const todos = wrapper.findAll('[data-testid="todo-item"]')
    expect(todos).toHaveLength(1)
    expect(todos[0].text()).toContain('Learn Vue 3')
  })

  it('edge case: does not add empty todo', async () => {
    const wrapper = mount(Todo)

    // Attempt to add an empty todo
    const input = wrapper.find('[data-testid="todo-input"]')
    await input.setValue('')
    await wrapper.find('[data-testid="add-button"]').trigger('click')

    // Should display an error message
    expect(wrapper.text()).toContain('Todo cannot be empty')

    // Should not add an empty todo
    expect(wrapper.vm.todos.length).toBe(0)
  })
})
