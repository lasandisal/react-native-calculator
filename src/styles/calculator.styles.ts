
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  // Main screen
  container: {
    flex: 1,
    backgroundColor: '#171018',
    paddingHorizontal: 20,
    paddingTop: 25,
  },

  // Header
  header: {
    marginTop: 20,
    marginBottom: 20,
    color: '#F8EAF1',
  },

  headerTitle: {
    color: '#F8EAF1',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 3,
  },

  headerSubtitle: {
    color: '#C49BAF',
    fontSize: 13,
    marginTop: 5,
  },

  // Calculator display
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 30,
  },

  previousText: {
    color: '#B995A9',
    fontSize: 20,
    marginBottom: 15,
  },

  displayText: {
    color: '#FFF0F6',
    fontSize: 55,
    fontWeight: '300',
  },

  // Buttons container
  buttonsContainer: {
    flex: 2,
    justifyContent: 'center',
    gap: 12,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },

  // Normal number buttons
  button: {
    height: 65,
    borderRadius: 22,
    backgroundColor: '#261B28',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#F8EAF1',
    fontSize: 24,
    fontWeight: '500',
  },

  // Operator buttons (+, -, ×, ÷)
  operatorButton: {
    backgroundColor: '#493044',
  },

  operatorText: {
    color: '#F2B8D0',
  },

  // Action buttons (AC, DEL)
  actionButton: {
    backgroundColor: '#382838',
  },

  actionText: {
    color: '#E5A8C4',
  },

  // Equals button
  equalButton: {
    backgroundColor: '#B86B91',
  },

  // Button press effect
  pressedButton: {
    opacity: 0.65,
  },

  // Footer
  footer: {
    color: '#A88A9C',
    textAlign: 'center',
    paddingVertical: 15,
    fontSize: 11,
    letterSpacing: 0.4,
  },

});
