const React = require("react-native");

const { StyleSheet } = React;

export default {

  containerView: {
    flex: 1,
  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
  },
  FormView: {
    flex: 1
  },
  FormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  Button: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  fbButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
};