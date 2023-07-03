import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Input } from '../Components/UsedInputs';
import Layout from '../Layout/Layout';

const ForgotPassword = () => {
  const { id, token } = useParams();
  const history = useNavigate();
  const [data2, setData] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(`/forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await res.json();

    if (data.status === 201) {
      console.log("user valid");
    } else {
      history("*");
    }
  };

  const setval = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();

    if (password === "") {
      toast.error("Password is required!", {
        position: "top-center"
      });
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!", {
        position: "top-center"
      });
    } else {
      const res = await fetch(`/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      const data = await res.json();

      if (data.status === 201) {
        setPassword("");
        setMessage(true);
      } else {
        toast.error("! Token Expired generate new Link", {
          position: "top-center"
        });
      }
    }
  };

  useEffect(() => {
    userValid();
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  return (
    <Layout>
      {data2 ? (
        <div className="container mx-auto px-2 my-24 flex-colo">
          <form
            className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-Green rounded-lg border border-border"
            onSubmit={sendpassword}
          >
            <div className="form_heading">
              <h1 className="w-full text-text text-3xl text-center mb-6">
                Enter Your NEW Password
              </h1>
            </div>

            <div className="w-full">
              <Input
                label="New Password"
                placeholder="Enter Your new password"
                type="password"
                name="password"
                value={password}
                onChange={setval}
                bg={true}
              />
              {message && (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Password Successfully Updated
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-gold transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
            >
              Send
            </button>

            <p className="text-center text-text">
              <NavLink to="/home">Home</NavLink>
            </p>
          </form>
        </div>
      ) : (
        <div
          className="flex justify-center items-center h-screen"
          style={{ background: "#f3f3f3" }}
        >
          <div className="text-center">
            Loading...
            <br />
            <div className="mt-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </Layout>
  );
};

export default ForgotPassword;
