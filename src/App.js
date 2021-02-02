import React from 'react';
import { Formik, Field, Form } from 'formik';
import './App.css';

function App() {

  function onSubmit(values, actions) {
    console.log('SUBMIT', values);
  }

  function validade(values) {
    const errors = {};

    if (!values.name) {
      errors.name = 'Nome é obrigatório'
    }

    if (!values.email) {
      errors.email = 'Email é obrigatório'
    }
    return errors;
  }

  return (
    <div className="App">
      <Formik
        validade={validade}
        // validateOnMount
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: '',
        }}
        render={({ values, errors }) => (
          <Form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              {errors.name && (
                <span>{errors.name}</span>
              )}
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="email" />
              {errors.email && (
                <span>{errors.email}</span>
              )}
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
