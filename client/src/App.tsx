import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { newItemSchema, NewItemInput } from "./newItem.schema";
import ItemDetail from "./itemDetail";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewItemInput>({
    resolver: zodResolver(newItemSchema),
    defaultValues: {},
  });

  const [userCategory, setUserCategory] = useState<string[]>([]);
  const [categoryError, setCategoryError] = useState<string>("");

  type hanldeFunction = (value: string) => void;

  const addCategory: hanldeFunction = (value) => {
    let categories = [...userCategory];

    let check = categories.filter((category) => category === value);

    if (check.length === 0) {
      categories.push(value);
      setCategoryError("");
    }
    setUserCategory(categories);

    console.log("added", categories);
  };

  const removeCategory: hanldeFunction = (value) => {
    let categories = [...userCategory];
    if (categories.length === 0) {
      setCategoryError("Select at least one category");
    }
    if (categories.length > 0) {
      let check = categories.filter((category) => category !== value);
      setUserCategory(check);
      console.log("removed", check);
    }
  };

  type item = {
    name: string;
  };

  const items: item[] = [
    { name: "Developer" },
    { name: "Business Analysist" },
    { name: "System Administrator" },
    { name: "Student" },
    { name: "Organization" },
    { name: "IT Manager" },
  ];

  const onSubmit = (data: any) => {
    if (userCategory.length === 0) {
      setCategoryError("Select at least one category");
      return;
    }
    data.categories = userCategory;
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App__header">User Registration</header>

      <section className="App__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input__field">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              placeholder=""
              className="input__field--text"
              {...register("firstName")}
            />
            {errors?.firstName?.message && (
              <p className="input__field--error">{errors.firstName.message}</p>
            )}
          </div>

          <div className="input__field">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              placeholder="Your answer"
              className="input__field--text"
              {...register("lastName")}
            />
            {errors?.lastName?.message && (
              <p className="input__field--error">{errors.lastName.message}</p>
            )}
          </div>

          <div className="input__field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="Your answer"
              className="input__field--email"
              {...register("email")}
            />
            {errors?.email?.message && (
              <p className="input__field--error">{errors.email.message}</p>
            )}
          </div>

          <div className="input__field">
            <label htmlFor="dob">Date of birth</label>
            <input
              id="dob"
              type="date"
              className="input__field--email"
              {...register("dob", { valueAsDate: true })}
            />
            {errors?.dob?.message && (
              <p className="input__field--error">{errors.dob.message}</p>
            )}
          </div>

          <div className="input__field">
            <label htmlFor="contactNumber">Contact number</label>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
              }}
            >
              <div
                style={{
                  padding: ".5rem",
                  backgroundColor: "#fff",
                  marginTop: ".5rem",
                  color: "gray",
                  width: "6rem",
                }}
              >
                +61 -
              </div>
              <input
                id="contactNumber"
                type="number"
                className="input__field--number"
                placeholder="XXXXXXXXXX"
                {...register("contactNumber", { valueAsNumber: true })}
              />
            </div>

            {errors?.contactNumber?.message && (
              <p className="input__field--error">
                {errors.contactNumber.message}
              </p>
            )}
          </div>

          <div className="input__field" style={{ marginBottom: "0" }}>
            <label htmlFor="address">Address</label>
            <input
              id="unitNumber"
              type="text"
              placeholder="Unit/Appartment number"
              className="input__field--text"
              {...register("unitNumber")}
            />
            {errors?.unitNumber?.message && (
              <p className="input__field--error">{errors.unitNumber.message}</p>
            )}
          </div>

          <div>
            <input
              id="streetAddress"
              type="text"
              placeholder="Street number and name"
              className="input__field--text"
              {...register("streetAddress")}
            />
            {errors?.streetAddress?.message && (
              <p className="input__field--error">
                {errors.streetAddress.message}
              </p>
            )}
          </div>

          <div
            className="input__field"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
            }}
          >
            <div style={{ width: "50%", marginRight: ".25rem" }}>
              <input
                id="postCode"
                type="text"
                placeholder="Post code"
                className="input__field--text"
                {...register("postCode")}
              />
              {errors?.postCode?.message && (
                <p className="input__field--error">{errors.postCode.message}</p>
              )}
            </div>

            <div style={{ width: "50%", marginLeft: ".25rem" }}>
              <select
                id="state"
                className="input__field--select"
                {...register("state")}
              >
                <option value="">Select State</option>
                <option value="ACT">ACT</option>
                <option value="NSW">NSW</option>
                <option value="NT">NT</option>
                <option value="QLD">QLD</option>
                <option value="SA">SA</option>
                <option value="VIC">VIC</option>
                <option value="TAS">TAS</option>
                <option value="WA">WA</option>
              </select>
              {errors?.state?.message && (
                <p className="input__field--error">{errors.state.message}</p>
              )}
            </div>
          </div>

          <div className="input__field">
            <label htmlFor="address">Category</label>
            <div style={{ padding: "0.3rem 0" }}>
              {items.map((item, index) => {
                return (
                  <ItemDetail
                    key={index}
                    item={item}
                    addCategory={addCategory}
                    removeCategory={removeCategory}
                  />
                );
              })}
            </div>
            {categoryError && (
              <p className="input__field--error">{categoryError}</p>
            )}
          </div>

          <button type="submit" className="form__button">
            Register
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
