import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })

  it('should handle the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se o menu tá escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
  })

  it('should show wishlight and account when logged in', () => {
    renderWithTheme(<Menu username="will" />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})

// import { screen, fireEvent } from '@testing-library/react'
// import { renderWithTheme } from 'utils/tests/helpers'
// import Menu from '.'

// describe('<Menu />', () => {
//   it('should render the menu', () => {
//     renderWithTheme(<Menu />)

//     expect(
//       screen.getByRole('img', { name: /logo won games/i })
//     ).toBeInTheDocument()
//     expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
//     expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
//     expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()

//     // expect(container.firstChild).toMatchSnapshot()
//   })

//   it('should handle the open/close menu in mobile', () => {
//     renderWithTheme(<Menu />)

//     // seleciona o elemento
//     const fullMenuElement = screen.getByRole('navigation', { hidden: true })

//     // verifica se está fechado através de atributo e estilo
//     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
//     expect(fullMenuElement).toHaveStyle({ opacity: 0 })

//     // clicar no botão de abrir e verificar se abriu.
//     // fireEvent é um método do testing library para simular ação
//     fireEvent.click(screen.getByLabelText(/open menu/i))
//     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
//     expect(fullMenuElement).toHaveStyle({ opacity: 1 })

//     // clicar no botão de fechar e verificar se fechou.
//     fireEvent.click(screen.getByLabelText(/close menu/i))
//     expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
//     expect(fullMenuElement).toHaveStyle({ opacity: 0 })
//   })

//   it('should render the register box when user it not logged', () => {
//     renderWithTheme(<Menu />)

//     // utilizamos o query ao invés do get em elementos que não temos certeza
//     // de que o elemento irá existir
//     expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
//     expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
//     expect(screen.getByText(/log in now/i)).toBeInTheDocument()
//     expect(screen.getByText(/sign up/i)).toBeInTheDocument()
//   })

//   it('should render the wishlist and account when user it logged', () => {
//     renderWithTheme(<Menu username="thiago" />)

//     expect(screen.getByText(/my account/i)).toBeInTheDocument()
//     expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
//     expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument()
//     expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
//   })
// })
