import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Greeter from '../Greeter.vue'

describe('Greeter Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(Greeter)
    expect(wrapper.find('.greeter-component').exists()).toBe(true)
    expect(wrapper.find('.greeter-button').exists()).toBe(true)
    expect(wrapper.find('.greeter-button').text()).toBe('Click to display message')
  })

  it('uses the default message when no message is provided', () => {
    const wrapper = mount(Greeter)
    const consoleSpy = vi.spyOn(console, 'log')
    
    wrapper.find('.greeter-button').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith('Hello World!')
    
    consoleSpy.mockRestore()
  })

  it('displays the provided message when clicked', () => {
    const message = 'Custom test message'
    const wrapper = mount(Greeter, {
      props: {
        message
      }
    })
    
    const consoleSpy = vi.spyOn(console, 'log')
    wrapper.find('.greeter-button').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith(message)
    
    consoleSpy.mockRestore()
  })

  it('emits message-clicked event with the message when clicked', async () => {
    const message = 'Test event emission'
    const wrapper = mount(Greeter, {
      props: {
        message
      }
    })
    
    await wrapper.find('.greeter-button').trigger('click')
    
    // Check if the event was emitted with the correct payload
    expect(wrapper.emitted()).toHaveProperty('messageClicked')
    expect(wrapper.emitted().messageClicked[0]).toEqual([message])
  })
})
