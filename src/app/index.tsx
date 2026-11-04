import {View, Text, SafeAreaView} from 'react-native'

import CalculatorButton from '@/components/CalculatorButton'
import { useCalculator } from '@/hooks/useCalculator'
import { styles } from '@/styles/calculator.styles'

export default function HomeScreen() {
  const {
    display,
    firstValue,
    operator,

    handleNumber,
    handleDecimal,
    handleOperator,
    handleEqual,
    handleClear,
    handleDelete,

  } = useCalculator()

  const displayOperator = operator === '*'
    ? '×'
    : operator === '/'
      ? '÷'
      : operator

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.header}>CALCULATOR</Text>

        <Text style={styles.headerSubtitle}>Smart Calculation. Simplified.</Text>

      </View>

      <View style={styles.displayContainer}>

        <Text style={styles.previousText}>
          {firstValue !== null
            ? `${firstValue} ${displayOperator}`
            : ' '}
        </Text>

        <Text
          style={styles.displayText}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {display}
        </Text>

      </View>

      <View style={styles.buttonsContainer}>

        {/* Row 1 */}
        <View style={styles.buttonRow}>

          <CalculatorButton
            title="AC"
            variant="action"
            onPress={handleClear}
          />

          <CalculatorButton
            title="DEL"
            variant="action"
            onPress={handleDelete}
          />

          <CalculatorButton
            title="÷"
            variant="operator"
            onPress={() => handleOperator('/')}
          />

          <CalculatorButton
            title="×"
            variant="operator"
            onPress={() => handleOperator('*')}
          />

        </View>


        {/* Row 2 */}
        <View style={styles.buttonRow}>

          <CalculatorButton title="7" onPress={() => handleNumber('7')} />

          <CalculatorButton title="8" onPress={() => handleNumber('8')} />

          <CalculatorButton title="9" onPress={() => handleNumber('9')} />

          <CalculatorButton
            title="−"
            variant="operator"
            onPress={() => handleOperator('-')}
          />

        </View>


        {/* Row 3 */}
        <View style={styles.buttonRow}>

          <CalculatorButton title="4" onPress={() => handleNumber('4')} />

          <CalculatorButton title="5" onPress={() => handleNumber('5')} />

          <CalculatorButton title="6" onPress={() => handleNumber('6')} />

          <CalculatorButton
            title="+"
            variant="operator"
            onPress={() => handleOperator('+')}
          />

        </View>


        {/* Row 4 */}
        <View style={styles.buttonRow}>

          <CalculatorButton title="1" onPress={() => handleNumber('1')} />

          <CalculatorButton title="2" onPress={() => handleNumber('2')} />

          <CalculatorButton title="3" onPress={() => handleNumber('3')} />

          <CalculatorButton
            title="="
            variant="equal"
            onPress={handleEqual}
          />

        </View>


        {/* Row 5 */}
        <View style={styles.buttonRow}>

          <CalculatorButton
            title="0"
            flex={3}
            onPress={() => handleNumber('0')}
          />

          <CalculatorButton
            title="."
            onPress={handleDecimal}
          />

        </View>

      </View>

      <Text style={styles.footer}>
        © 2026 Lasandi Salwathura. All rights reserved.
      </Text>

    </SafeAreaView>
  )
}