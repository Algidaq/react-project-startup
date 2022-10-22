import { Formik, FormikConfig, FormikValues } from 'formik';
import React from 'react';

interface AppFormikProps extends FormikConfig<FormikValues> {}

const AppFormik: React.FunctionComponent<AppFormikProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  ...rest
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...rest}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppFormik;
