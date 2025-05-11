import { Formik, Form, Field } from "formik"
import { useId } from "react";
import { FaBookmark } from "react-icons/fa";
import s from "./SearchBox.module.css"

function SearchBox({onSearch}) {
    const findUserID = useId();
    return ( 
            <Formik
                initialValues={{ search: "" }}
                onSubmit={() => { }}
        >
            {({ values, handleChange }) => (
                <Form className={s.form}>
                    <label htmlFor={findUserID}>Find contacts by name</label>
                    <div className={s.inputGroup}>
                        <FaBookmark />
                        <Field
                            id={findUserID}
                            name="search"
                            type="text"
                            value={values.search}
                            onChange={(e) => {
                                handleChange(e);
                                onSearch(e.target.value);
                            }}
                        />
                    </div>
                </Form>)}
            </Formik>
    )
}

export default SearchBox;