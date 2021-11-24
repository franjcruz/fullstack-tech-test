import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import InputField from '../InputField';
import SelectField from '../SelectorField';
import SubmitButton from '../SubmitButton';

interface ICreateForm {
  material: string,
  radio: number,
  decoration: boolean,
}

const initialValues: ICreateForm = {
  material: "",
  radio: 10,
  decoration: false,
}

const validationSchema = Yup.object().shape({
  radio: Yup.number()
    .min(10, 'Radio must be 10 at least')
    .required('Enter a valid number'),
  material: Yup.string()
    .required('Enter a valid option'),
  decoration: Yup.boolean()
    .required('Enter a valid option'),
})

const onSubmit = (values: ICreateForm) => {
  console.log('values :>> ', values)
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))

  }, 500)
}

const CreateForm: React.FC = () => (
  <Formik initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    render={(props: FormikProps<ICreateForm>) => {
      const {
        touched,
        errors,
      } = props

      return (
        <Form>
          <InputField
            text="Radio"
            type="number"
            name="radio"
            error={!!(errors.radio && touched.radio)}
          />
          <SelectField
            text="Material"
            name="material"
            error={!!(errors.material && touched.material)}
          >
            <option value="iron">Iron</option>
            <option value="stone">Stone</option>
            <option value="steel">Steel</option>
          </SelectField>
          <SelectField
            text="Decoration"
            name="decoration"
            error={!!(errors.decoration && touched.decoration)}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </SelectField>
          <SubmitButton text="Submit"
            disabled={
              // isSubmitting ||
              !!(errors.radio && touched.radio) ||
              !!(errors.material && touched.material) ||
              !!(errors.decoration && touched.decoration)
            }
          ></SubmitButton>
        </Form>
      )
    }}>
  </Formik>
)

export default CreateForm