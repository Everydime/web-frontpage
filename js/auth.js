/**
 * Copyright 2017. Everydime. All rights reserved.
 *
 * Auth service
 */

AWS.config.region = 'us-east-1';

function getCognitoPool(timezone) {
  return new AWSCognito.CognitoIdentityServiceProvider
                       .CognitoUserPool(pools[timezone]);
}

function registerBenefactor(info) {
  let cognitoPool = getCognitoPool(info.timezone);
  let attrEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute({
    Name: "email",
    Value: info.email
  });
  let attrTimezone = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute({
    Name: "zoneinfo",
    Value: info.timezone.substring(3)
  });

  let attributeList = [attrEmail, attrTimezone];
  let benefactorCognito;
  cognitoPool.signUp(info.username, info.password, attributeList, null, function(error, result){
    if (error) {
      alert(error);
      return;
    }
    benefactorCognito = result.user;
  });
}
