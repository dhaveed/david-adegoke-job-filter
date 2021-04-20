import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrap: {
    paddingTop: 80,
    marginBottom: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontWeight: '700',
    fontSize: 24,
    flex: 1,
  },
  content: {
    paddingHorizontal: 30,
    paddingTop: 20,
    paddingBottom: Layout.window.height * 0.15,
  },
  listingCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 8,
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,
    elevation: 5,
  },
  listingCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  listingImage: {
    height: Layout.window.width * 0.15,
    width: Layout.window.width * 0.15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  listingImageText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.white,
  },
  bookmarkWrap: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: Colors.mutedText + '25',
  },
  listingCardBody: {},
  listingCardTitle: {
    fontWeight: '600',
    fontSize: 20,
    marginVertical: 5,
  },
  listingCardDescription: {
    color: Colors.darkGray + '60',
    lineHeight: 24,
    fontSize: 16,
  },
  tagsWrap: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.light + '25',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: Colors.light,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
    paddingTop: 30,
    paddingBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
  },
  blockButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  buttonGray: {
    backgroundColor: Colors.mutedText + '25',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
