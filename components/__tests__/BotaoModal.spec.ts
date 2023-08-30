import { render, getByText, screen } from "@testing-library/vue"
import BotaoModal from '~/components/BotaoModal.vue'

test('buttaum open-modal', async () => {
    render(BotaoModal)

    screen.getByText('Open Dialog')

})