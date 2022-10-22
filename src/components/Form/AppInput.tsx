import { useFormik, useFormikContext } from 'formik';
import React from 'react';

interface AppInputProps {}

const AppInput: React.FunctionComponent<AppInputProps> = () => {
  const { values, errors, touched, handleChange, setFieldTouched } =
    useFormikContext<Test>();
  //TODO create suitable input for it and error handler for it
  return <></>;
};

export default AppInput;

interface Test {
  firstName: string;
  lastName: string;
}
