import React from "react";
import s from './FromsControl.module.css'
import {requiredField} from "../../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}: any) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    )
}

export const createField = (placeholder: string | null, name: string, component: any, validators: any, props: any = {}, text: string = '') => (
    <div>
        <Field placeholder={placeholder}
               component={component}
               name={name}
               validate={validators}
               {...props}
        /> {text}
    </div>
)
