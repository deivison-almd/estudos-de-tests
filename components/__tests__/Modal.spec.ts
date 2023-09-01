import { VueClass } from '@vue/test-utils'
//import { mocks } from '~/__test__/mock'
import {
  render,
  fireEvent,
  RenderOptions,
  GetByRole,
} from '@testing-library/vue'
import Modal from '~/components/Modal.vue'
import Vuetify from 'vuetify'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuetify)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    comtribuinte: {},
  },
  mutations: {},
  actions: {},
})
const renderPage = <V extends Vue>(
  component: VueClass<V>,
  callback?: any
) => {
  return render(
    component,
    {
      vuetify: new Vuetify(),
      
   
    },
    callback
  )
}

describe('testes do componente de Modal', () => {
  it('teste de open/close modal', async () => {
    const { emitted } = renderPage(Modal, {
      props: {
        value: true,
      },
    })
    expect(emitted()).toBeTruthy()
  })
})
