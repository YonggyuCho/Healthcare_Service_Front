import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
      UserPoolId: 'ap-northeast-2_zd2aqBRM4',
      ClientId: '684v4b4ei247ojk4pnqt88tapk'
}

export default new CognitoUserPool(poolData);

  