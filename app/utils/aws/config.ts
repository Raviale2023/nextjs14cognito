import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '093ee488-2061-7048-2c47-2880f3cdc94f',
        userPoolId: 'ap-southeast-2_AfYOll4sa',
        }
      }
    }

export default amplifyConfig;
