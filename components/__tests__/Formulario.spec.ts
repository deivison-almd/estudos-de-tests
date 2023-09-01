import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import Formulario from '~/components/Formulario.vue'

describe('Formulario test', () => {
  it('should properly fill the model data', async () => {
    const {emitted } = render(Formulario)

    const name = 'John'
    const lastName = 'Doe'
    const expectedModel = {
      name,
      last_name: lastName,
      position: 'front',
    }

    const nomeInput = screen.getByRole('textbox', { name: 'Nome' })
    const sobrenomeInput = screen.getByRole('textbox', { name: 'Sobrenome' })
    const posicaoSelect = screen.getByRole('combobox', { name: 'Posição atual' })
    const salvarButton = screen.getByRole('button', { name: 'Salvar' })

    await userEvent.type(nomeInput, name)
    await userEvent.type(sobrenomeInput, lastName)
    await userEvent.selectOptions(posicaoSelect, 'Front End')
    await userEvent.click(salvarButton)

    expect(emitted().save[0][0]).toEqual(expectedModel)
  })
})
