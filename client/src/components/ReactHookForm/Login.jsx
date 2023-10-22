import { useForm } from "react-hook-form";
import "./Login.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`-- New Product Registered --\nName: ${data.name}\nQuantity: ${data.quantity}\nCategory: ${data.category}\nPrice: ${data.price}`);
  };

  return (
    <div>
      <h1 className="heading">New Product</h1>
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
        <input
          type="text"
          placeholder="Category"
          className="signup__input"
          {...register("category", { required: true })}
        />
        <input
          type="text"
          placeholder="Quantity"
          className="signup__input"
          {...register("quantity", { required: true })}
        />
        <input
          type="text"
          placeholder="Price"
          className="signup__input"
          {...register("price", { required: true })}
        />

        <button className="button__input" type="submit">
          Submit
        </button>
        <input className="button__cancel" type="reset" value="Cancel"></input>
        
      </form>
    </div>
  );
}

export default LoginForm;
