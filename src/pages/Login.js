import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/user/actions";
import { userLoading } from "../store/user/selectors";

// Build a signup form!
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector(userLoading);

  const onFormSubmit = event => {
    event.preventDefault();
    dispatch(login(email, password, history));
  };


  return (
    <div>
      <h3>Login!</h3>

      {loading ? (
        <div>Lodaddag...</div>
      ) : (
        <form onSubmit={onFormSubmit}>
          <div>
            <label>Emasasasdal</label>
            <input name='emadsasas' onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Pasdasdasdard</label>
            <input
              name='pasdasdad'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button>Loasdasn</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
