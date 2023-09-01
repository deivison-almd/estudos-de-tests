import { render, getByRole, fireEvent } from '@testing-library/vue'
import {screen} from '@testing-library/dom'
import CampoTexto from '~/components/CampoTexto.vue'

it('should have a label with passed text', async () => {
  const { emitted } = render(CampoTexto, {
    props: {
      label: 'My label',
      value: null,
      id: 'test',
    },
  })

  const data = 'my new value'
  await fireEvent.update(
    screen.getByRole('textbox', { name: /my label/i }),
    data
  )

  expect(emitted().input[0]).toEqual([data])
})
