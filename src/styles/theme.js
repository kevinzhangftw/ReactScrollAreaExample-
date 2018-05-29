import { teal500, green400 } from 'material-ui/styles/colors'

const theme = {
  fontFamily: 'Open Sans, sans-serif',
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  palette: {
    textColor: '#5C5C5C',
    alternateTextColor: '#FFFFFF',
    alternateTextColor1: '#807E7E',
    alternateTextColor2: '#ADADAD',
    errorTextColor: '#F44336',
    accent1Color: '#49B3CD',
    primary1Color: '#5C5C5C',
    primary2Color: 'black',
    primary3Color: teal500,
    primary4Color: green400,
    confirmButtonPrimaryBackgroundColor: '#49B3CD',
    dividerColor: '#ADADAD',
    disabledTextColor: '#ADADAD',
    iconColor: '#979797'
  },
  appBar: {
    height: 44,
    titleStyle: {
      fontSize: 18
    }
  },
  toolbar: {
    backgroundColor: '#FFF'
  },
  contentContainer: {
    maxWidth: 600
  },
  button: {
    borderRadius: 3
  }
}

export default theme
