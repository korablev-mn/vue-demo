import { shallowMount } from '@vue/test-utils'
import toggler from '../toggler'

describe('toggler component', () => {
  it('срабатывание события при клике', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.text').text()).toBe('Hide issue')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.text').text()).toBe('Show issue')
  })
})