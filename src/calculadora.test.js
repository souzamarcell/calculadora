import React from 'react'
import ReactDOM from 'react-dom'
import Calculadora from './calculadora'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Calculadora', () => {
  it('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Calculadora />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('Deve limpar o campo de números', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('C'))
    expect(getByTestId('txtNumeros')).toHaveValue('0')
  })

  it('Deve somar 3 + 3 e obter 6', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumeros')).toHaveValue('6')
  })

  it('Deve subtrair 5 - 4 e obter 1', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('4'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumeros')).toHaveValue('1')
  })

  it('Deve dividir 8 / 4 e obter 2', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('8'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('4'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumeros')).toHaveValue('2')
  })

  it('Deve multiplicar 3 * 3 e obter 9', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('*'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumeros')).toHaveValue('9')
  })

  it('Deve somar 1.5 + 1 e obter 2.5', () => {
    const { getByTestId, getByText } = render(<Calculadora />)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('.'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('='))
    expect(getByTestId('txtNumeros')).toHaveValue('2.5')
  })
})
