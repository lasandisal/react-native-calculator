import {View, Text, Pressable} from 'react-native'

import {styles} from '../styles/calculator.styles'

type  ButtonVariant = 'number' | 'operator' | 'action' | 'equal'

type CalculatorButtonProps = {
  title: string,
  onPress: () => void,
  variant?: ButtonVariant
  flex?: number
}

export default function CalculatorButton({
  title,
  onPress,
  variant = 'number',
  flex = 1,
}: CalculatorButtonProps ) {
  return (
    <Pressable
    onPress={onPress}
    style={({pressed}) => [
      styles.button,
      {flex},
      variant === 'operator' && styles.operatorButton,
      variant === 'action' && styles.actionButton,
      variant === 'equal' && styles.equalButton,

      pressed && styles.pressedButton,

    ]}
    >

      <Text
      style ={[
        styles.buttonText,
        
        variant === 'operator' && styles.operatorText,
        variant === 'action' && styles.actionText,
      ]}
      >
        {title}

      </Text>
    </Pressable>
  )
}