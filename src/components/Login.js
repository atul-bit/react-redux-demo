import React, { useState, FormEvent, Dispatch, useEffect } from "react";
// import { OnChangeModel } from "../../common/types/Form.types";
import { useDispatch } from "react-redux";
// import { login } from "../../store/actions/account.actions";
import TextInput from "../common/components/TextInput";
import { useNavigate } from 'react-router-dom'

const Login = () => {
  console.log("coming in...");
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: { error: "", value: "" },
    password: { error: "", value: "" }
  });

  function hasFormValueChanged(model) {
    setFormState({ ...formState, [model.field]: { error: model.error, value: model.value } });
  }



  function isFormInvalid() {
    return (formState.email.error || formState.password.error
      || !formState.email.value || !formState.password.value);
  }

  function getDisabledClass() {
    let isError = isFormInvalid();
    return isError ? "disabled" : "";
  }

  const navigate = useNavigate();
  function submit(e) {
    e.preventDefault();
    if(isFormInvalid()) { return; }
    console.log("coming in else")
    localStorage.setItem('login',true)
    navigate('/')
    // dispatch(login(formState.email.value));
  }
  useEffect(() => {
      localStorage.getItem('login') ? navigate('/') : navigate('/login')
  },[])

  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                    </div>
                    <form className="user" onSubmit={submit}>
                      <div className="form-group">

                        <TextInput id="input_email"
                          field="email"
                          value={formState.email.value}
                          onChange={hasFormValueChanged}
                          required={true}
                          maxLength={100}
                          label="Email"
                          placeholder="Email" />
                      </div>
                      <div className="form-group">
                        <TextInput id="input_password"
                          field="password"
                          value={formState.password.value}
                          onChange={hasFormValueChanged}
                          required={true}
                          maxLength={100}
                          type="password"
                          label="Password"
                          placeholder="Password" />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                          <label className="custom-control-label"
                            htmlFor="customCheck">Remember Me</label>
                        </div>
                      </div>
                      <button
                        className={`btn btn-primary btn-user btn-block ${getDisabledClass()}`}
                        type="submit">
                        Login
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
