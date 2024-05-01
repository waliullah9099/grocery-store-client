import { useForm } from "react-hook-form";

type TInputProps = {
  name: string;
};

const GroceryInput = ({ name }: TInputProps) => {
  const { register } = useForm();
  return <input {...register(`{ name }`)} />;
};

export default GroceryInput;
