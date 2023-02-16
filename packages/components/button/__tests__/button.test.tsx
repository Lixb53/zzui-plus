import { markRaw, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { Search } from '@element-plus/icons-vue'

import Button from '../src/button.vue'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />)

    expect(wrapper.classes()).toContain('zz-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(() => <Button icon={markRaw(Search)} />)

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })

  it('text', async () => {
    const bg = ref(false)

    const wrapper = mount(() => <Button text bg={bg.value} />)

    expect(wrapper.classes()).toContain('is-text')

    bg.value = true

    await nextTick()
    expect(wrapper.classes()).toContain('is-has-bg')
  })
})
