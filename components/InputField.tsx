import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  name: string;
  label: string;
  placeholder: string;
  textarea?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({ size: _, ...props }) => {
  // !!error : error in string so checking empty string
  const [field, { error }] = useField(props);
  return (
    <div className="w-full">
      <h4 className="text-p font-proxima">{props.label}</h4>
      {props.textarea ? (
        <textarea
          className="
        bg-blank
         w-full
         p-[24px]
         mb-32
         h-256
         "
          {...props}
          {...field}
          id={field.name}
          autoComplete="off"
          placeholder={props.placeholder}
        />
      ) : (
        <input
          className="
       bg-blank
        w-full
        p-[24px]
        mb-32
        "
          {...props}
          {...field}
          id={field.name}
          autoComplete="off"
          placeholder={props.placeholder}
        />
      )}

      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default InputField;
