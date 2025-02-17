import { StyleSheet } from 'react-native';
// Importar constantes globales si existen
import { COLORS, FONTSIZES } from './global/globalStyles';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white, // O '#fff'
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  name: {
    fontSize: FONTSIZES.large,
    fontWeight: '700',
    marginBottom: 4,
    color: COLORS.primaryText,
  },
  description: {
    fontSize: FONTSIZES.medium,
    color: COLORS.secondaryText,
    marginBottom: 4,
  },
  price: {
    fontSize: FONTSIZES.medium,
    color: COLORS.darkText,
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    fontSize: 20,
  },
});
