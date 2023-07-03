import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../Components/UsedInputs';
import Layout from '../Layout/Layout';
import { FiLogIn } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { LoginValidation } from '../Components/Validation/UserValidation';
import { yupResolver } from '@hookform/resolvers/yup';
import { InlineError } from '../Components/Notifications/Error';
import { loginAction } from '../Redux/Actions/userActions';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, isError, userInfo, isSuccess } = useSelector(
    (state) => state.userLogin
  );

  // validate user
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginValidation),
  });

  // on submit
  const onSubmit = (data) => {
    dispatch(loginAction(data));
  };

  // useEffect
  useEffect(() => {
    if (userInfo?.isAdmin) {
      navigate('/dashboard');
    } else if (userInfo) {
      navigate('/home');
    }
    if (isSuccess) {
      toast.success(`Welcome back ${userInfo?.fullName}`);
    }
  }, [userInfo, isSuccess, navigate]);

  // useEffect
  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch({ type: 'USER_LOGIN_RESET' });
    }
  }, [isError, dispatch]);

  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-Green  rounded-lg border border-border"
        >
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <div className="w-full">
            <Input
              label="Email" 
              placeholder="olympic@gmail.com"
              type="email"
              name="email"
              register={register('email')}
              bg={true}
            />
            {errors.email && <InlineError text={errors.email.message} />}
          </div>

          <div className="w-full">
            <Input
              label="Password"
              placeholder="*******"
              type="password"
              bg={true}
              name="password"
              register={register('password')}
            />
            {errors.password && <InlineError text={errors.password.message} />}
          </div>
          <div>
          <p className="text-center text-text flex justify-end">
  <Link to="/password-reset" className="text-dryGray font-semibold">
    Forgot Password?
  </Link>
</p>
</div>


          <button
            type="submit"
            disabled={isLoading}
            className="bg-gold transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            {
              // if loading show loading
              isLoading ? (
                'Loading...'
              ) : (
                <>
                  <FiLogIn /> Sign In
                </>
              )
            }
          </button>
          <div className="signinWith">
  <hr className="signinWithLine" style={{ height: '10px' }} />
  <p className="signinWithText">or sign in with</p>
  <div className="iconContainer" style={{ marginTop: '10px' }}>
    {/* Add your icons here */}
    {/* For example, you can use Font Awesome icons */}
    <FontAwesomeIcon
      icon={faGoogle}
      beatFade
      size="xl"
      style={{ color: '#00F2DB', marginRight: '15px' }}
    />
    <FontAwesomeIcon
      icon={faFacebook}
      beatFade
      size="xl"
      style={{ color: '#00F2DB', marginRight: '15px' }}
    />
    <FontAwesomeIcon
      icon={faTwitter}
      beatFade
      size="xl"
      style={{ color: '#00F2DB' }}
    />
    {/* Add other icons here */}
  </div>
</div>

          <p className="text-center text-text">
            Don't have an account?{' '}
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
