import { Formik } from 'formik';
import React from 'react';

import { FormikBasic } from './formik.cmp';
import { RhfBasic } from './rhf.cmp';

export const Zajecia6 = props => {
  return (
    <div>
      <h1>Formik</h1>
      <FormikBasic />

      <h1>React hook form</h1>
      <RhfBasic />

    </div>
  );
}