import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  validationRules: any;
  error: FieldError | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  register,
  validationRules,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={id} className="text-[#515B6F] text-base leading-[25.6px]" style={{ fontWeight: 600 }}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-4"
        {...register(id, validationRules)}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error.message as string}</p>}
    </div>
  );
};

export default InputField;
