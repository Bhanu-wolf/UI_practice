import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  outerContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  lampContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',

    position: 'absolute',
  },
  lamp1: {
    height: 200,
    width: 100,
  },
  lamp2: {
    height: 150,
    width: 100,
  },
  formContainer: {
    height: '50%',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    position: 'absolute',
    bottom: 0,
    marginBottom: 5,
  },
  titleContainer: {
    alignItems: 'center',
    // borderWidth: 2,
    position: 'absolute',
    // width: '100%',
    top: '30%',
    left: '35%',
    // marginTop: -25, // Adjust top margin to center vertically
    // marginLeft: -60,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#D4D4D4',
    width: '90%',
    height: 45,
    borderRadius: 20,
    marginVertical: 15,
    elevation: 4,
    // borderWidth: 2,
  },
  inputText: {
    padding: 5,
    color: 'black',
    fontSize: 16,
    textAlignVertical: 'center',
    height: 45,
    marginLeft: 10,
  },
  buttonContainer: {
    backgroundColor: '#5CB3FF',
    width: '85%',
    height: 50,
    borderRadius: 20,
    marginVertical: 15,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    color: 'white',
    height: 50,
  },
  infoContainer: {
    flexDirection: 'row',

    width: '90%',
    justifyContent: 'center',
  },
  info: {
    color: 'black',
    fontWeight: '400',
  },
  signup: {
    color: '#5CB3FF',
    fontWeight: 'bold',
  },
});
