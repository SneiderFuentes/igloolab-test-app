import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZES } from './global/globalStyles';

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 24,
    elevation: 4,
  },
  title: {
    fontSize: FONTSIZES.large,
    fontWeight: '700',
    marginBottom: 12,
  },
  message: {
    fontSize: FONTSIZES.medium,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
