# restaurants-explorer

#### Tech Used

- React Native
-  Expo
-  Redux-toolkit
-  Axios
-  Moment
-  Prettier
-  react-native-elements
-  react-native-pagination
-  Formik

## The UI


<img src="https://user-images.githubusercontent.com/88689773/177746511-191a0c8c-0dbd-4627-9592-426698095bbe.png" alt="The User Interface" width="400"/>


## How To Run The App in an IOS Simulator

#### Step 1: 
- Clone the repo
- Open it in your favorite editor
- Open a terminal in your editor and run `yarn install`

#### Step 2: 
- Head over to https://newsapi.org/docs  registered and get an API key.
- Create a `.env` file in the root folder and put your keys in the file like this: 

```
API_KEY=YourOpenWeatherKeyHere
```

#### Step 3:

- Download xcode 
- In the menu bar go to Xcode -> Open Developer Tools -> Simulator

#### Step 4: 

- In your terminal run `yarn start`. 
- In the browser, click on `Run on IOS Simulator`.

## Dependencies 

```json
  "dependencies": {
  "@react-native-community/masked-view": "^0.1.11",
    "@react-native-picker/picker": "^2.4.2",
    "@reduxjs/toolkit": "^1.8.3",
    "@rneui/base": "^4.0.0-rc.5",
    "@rneui/themed": "^4.0.0-rc.5",
    "@types/lodash": "^4.14.182",
    "@types/node": "8",
    "antd-mobile": "^5.17.1",
    "axios": "^0.27.2",
    "babel-plugin-import": "^1.13.5",
    "expo": "~45.0.0",
    "expo-status-bar": "~1.3.0",
    "expo-updates": "~0.13.2",
    "fast-memoize": "^2.5.2",
    "formik": "^2.2.9",
    "lodash": "^4.17.21",
    "lodash.debounce": "^4.0.8",
    "moment": "^2.29.3",
    "prettier": "^2.7.1",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-native": "0.68.2",
    "react-native-animated-pagination-dot": "^0.3.2",
    "react-native-dotenv": "^3.3.1",
    "react-native-elements": "^3.4.2",
    "react-native-multi-selectbox": "^1.5.0",
    "react-native-pagination": "^1.5.5",
    "react-native-safe-area-context": "4.2.4",
    "react-native-screens": "^3.14.1",
    "react-native-svg": "12.3.0",
    "react-native-vector-icons": "^9.2.0",
    "react-native-web": "^0.18.2",
    "react-redux": "^8.0.2",
    "redux-devtools-extension": "^2.13.9"
  },
  
  ```
