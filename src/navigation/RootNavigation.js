import 'react-native-gesture-handler';

import * as React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();
console.log("dmfd");
export function getCurrentRouteName() {
  return navigationRef?.current?.getCurrentRoute()?.name
}
export function navigate(name, params) {
  console.log('name',name);
  navigationRef?.current?.navigate(name, params);
}

