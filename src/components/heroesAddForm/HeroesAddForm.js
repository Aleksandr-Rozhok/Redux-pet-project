import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useSelector, useDispatch } from 'react-redux';

import {useHttp} from '../../hooks/http.hook';
import { addChar } from '../../actions';

const HeroesAddForm = () => {
    const {request} = useHttp();
    const filters = useSelector(state => state.filters.filters);
    const dispatch = useDispatch();

    const renderOptionsList = (arr) => {
        return arr.map((item, i) => {
            return <option key={i} value={item.filter}>{item.title}</option>
        })
    }

    const options = renderOptionsList(filters);
    return (
        <Formik initialValues = {{
            name: '',
            description: '',
            element: '',
            id: uuidv4()
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                    .required("Обязательное поле!")
                    .min(2, "Минимум 2 символа!"),
            description: Yup.string()
                    .required("Обязательное поле!")
                    .min(5, "Минимум 5 символов!"),
            element: Yup.string()
                    .required("Обязательное поле!"),
        })}
        onSubmit = {async (values, actions) => {
            await dispatch(addChar(request, JSON.stringify(values, null, 2)))
            actions.resetForm({
                values: {
                    name: '',
                    description: '',
                    element: '',
                    id: 0
                }})
        }}>
            <Form className="border p-4 shadow-lg rounded"> 
                <div className="mb-3">
                    <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                    <Field 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Как меня зовут?"/>
                    <ErrorMessage style={{color: "#e53e3e", marginTop: "8px"}} name="name" component="div"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label fs-4">Описание</label>
                    <Field
                        name="description"
                        as="textarea" 
                        className="form-control" 
                        placeholder="Что я умею?"
                        style={{"height": '130px'}}/>
                    <ErrorMessage style={{color: "#e53e3e", marginTop: "8px"}} name="description" component="div"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                    <Field 
                        className="form-select"
                        as="select" 
                        name="element">
                            {options}
                    </Field>
                    <ErrorMessage style={{color: "#e53e3e", marginTop: "8px"}} name="element" component="div"/>
                </div>

                <button type="submit" className="btn btn-primary">Создать</button>
            </Form>
        </Formik>
    )
}

export default HeroesAddForm;