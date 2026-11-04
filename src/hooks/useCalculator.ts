import { useState } from "react";
import { calculate, Operator } from "../utils/calculator";

export function useCalculator(){

  const [display, setDisplay] = useState('0')

  const [firstValue, setFirstValue] = useState<number | null>(null)

  const [operator, setOperator] = useState<Operator | null>(null)

  const [waitingForSecond, setWaitingForSecond] = useState(false)

  const handleNumber = (number: string) =>{

    if(display === 'Error'){
      setDisplay(number)
      setWaitingForSecond(false)
      return
    }

    if(waitingForSecond){
      setDisplay(number)
      setWaitingForSecond(false)
      return
    }

    setDisplay(previous =>
      previous === '0' ? number : previous + number
    )
  }

  const handleDecimal = () => {

    if(waitingForSecond || display === 'Error'){
      setDisplay('0.')
      setWaitingForSecond(false)
      return
    }

    if(!display.includes('.')){
      setDisplay(previous => previous + '.')
    }
  }

  const handleOperator = (selectOperator: Operator) => {

    if(display === 'Error'){
      return
    }

    const currentValue = Number(display)

    if(
      operator !== null &&
      firstValue !== null &&
      !waitingForSecond
    ){

      const result = calculate(firstValue, currentValue, operator)

      if(result === 'Error'){
        setDisplay('Error')
        setFirstValue(null)
        setOperator(null)
        setWaitingForSecond(true)
        return
      }

      setDisplay(result)
      setFirstValue(Number(result))

    } else{
      setFirstValue(currentValue)
    }

    setOperator(selectOperator)
    setWaitingForSecond(true)

  }

  const handleEqual = () => {
    if(
      operator === null ||
      firstValue === null ||
      waitingForSecond ||
      display === 'Error'
    ) {
      return
    }

    const secondValue = Number(display)

    const result = calculate(
      firstValue,
      secondValue,
      operator
    )

    setDisplay(result)

    setFirstValue(null)
    setOperator(null)
    setWaitingForSecond(true)
  }

  const handleClear = () => {

    setDisplay('0')
    setFirstValue(null)
    setOperator(null)
    setWaitingForSecond(false)
  }

  const handleDelete = () => {

    if(display === 'Error'){
      handleClear()
      return
    }

    if(waitingForSecond) return

    if(
      display.length === 1 ||
      (display.length === 2 && display.startsWith('-'))
    ) {
      setDisplay('0')
    } else {
      setDisplay(previous => previous.slice(0, -1))
    }
  }

  return{
    display,
    firstValue,
    operator,

    handleNumber,
    handleDecimal,
    handleOperator,
    handleEqual,
    handleClear,
    handleDelete
  }
}