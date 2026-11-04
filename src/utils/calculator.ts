export type Operator = '+' | '-' | '*' | '/'

export function calculate(
  first: number,
  second: number,
  operator: Operator
): string{
  let result: number

  switch(operator){

    case '+':
      result = first + second
      break

    case '-':
      result = first - second
      break

    case '*':
      result = first * second
      break

    case '/':
      if (second === 0){
        return 'Error'
      }
      result = first / second
      break
  }

  if(!Number.isFinite(result)){
    return 'Error'
  }

  return Number(result.toPrecision(12)).toString()
}