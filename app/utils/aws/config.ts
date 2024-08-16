import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '6loktgs7i3s11b464qov0healr',
        userPoolId: 'ap-southeast-2_AfYOll4sa',
        }
      }
    }

export default amplifyConfig;
