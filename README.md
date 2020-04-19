# React Native Line Awesome Icons

![Simple Example](https://s4.gifyu.com/images/rnlineawesome.gif)
You can easily add icons for your application using this package.
![Dw](https://img.shields.io/npm/dm/bottomsearchbar) ![lis](https://img.shields.io/npm/l/bottomsearchbar) ![is](https://img.shields.io/github/issues/xncn/reactnativebottomsearchbar)

# İnstall

This package dependency [react-native-svg](https://github.com/react-native-community/react-native-svg 'react-native-svg') , you need install this package.

    npm install react-native-svg;
    npx pod-install ios;
    npm install rnlineawesomeicons;

# How can I use this package?

```javascript
import React from 'react';
import {SafeAreaView} from 'react-native';
import RNLineAwesomeIcons from 'rnlineawesomeicons';

const App = () => {
  return (
    <SafeAreaView>
      <RNLineAwesomeIcons icon={'la-blind'} fill={'black'} />
    </SafeAreaView>
  );
};
export default App;
```

#Component Supported Props
| Prop Name | Description |
| ------------ | ------------ |
| icon | This is icon name property you can find icon names on Line Awesome web site|
| height | Specifies the height at which the component will fill the screen. |
| width | Specifies the width that the component will fill the screen. |
| fill | indicates the color of the component |
| stroke | indicates the outer frame color of the component |

Thanks icons8 team
https://icons8.com/line-awesome
VSCODE
