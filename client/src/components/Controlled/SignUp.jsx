import { useForm } from "react-hook-form";
import "./SignUp.css";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`-- New Shop Registered --\nName: ${data.name} \nDescription: ${data.description}`);
  };

  return (
    <div>
  
      <h1 className="heading">New Shop</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input type="file" class="form-control" id="customFile" />
        <input
          type="text"
          placeholder="name"
          className="signup__input"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Description"
          className="signup__input"
          {...register("description", { required: true })}
        />

        <button className="button__input" type="submit">
          Submit
        </button>
        <input className="button__cancel" type="reset" value="Cancel"></input>

      </form>
    </div>
  );
}

export default SignUpForm;

