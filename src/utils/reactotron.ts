import {reactotronRedux} from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Reactotron?.setAsyncStorageHandler!(AsyncStorage)
  .configure()
  .use(reactotronRedux())
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .connect();
