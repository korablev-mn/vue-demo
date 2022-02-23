import { mount } from '@vue/test-utils'
import post from '../../components/post'

describe('post component', () => {
  it('событие toggleClick', async () => {
    const wrapper = mount(post)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.find('.comment_user').exists()).toBe(true)
  })

  it('отрисовка элементов', async () => {
    const item = {
        username: 'test-url',
        Array: 'data'
    }
    const wrapper = mount(data, {
      propsData: {
        data: Array.from({length: 3}).map(x=> data)
      }
    })
    expect(wrapper.find('.container').exists()).toBe(false)

    await wrapper.find('.toggler button').trigger('click')
  
    expect(wrapper.findAll('.comment_user').length).toBe(3)
  })

  it('проверка на повторный вызов', () => {
    const item = {
        username: 'test-url',
        Array: 'data'
    },
    const wrapper = mount(data, {
      propsData: {
        data: Array.from({length: 3}).map(x=> data)
      }
    })
    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().toggleClick).toBeUndefined
  })
})