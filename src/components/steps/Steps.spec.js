import { shallowMount } from '@vue/test-utils'
import BSteps from '@components/steps/Steps'

let wrapper

describe('BSteps', () => {
    beforeEach(() => {
        wrapper = shallowMount(BSteps)
    })

    it('is called', () => {
        expect(wrapper.name()).toBe('BSteps')
        expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('render correctly', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
