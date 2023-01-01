import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Form, Formik, FormikHelpers } from 'formik';
import { FormItem, Input, SubmitButton } from 'formik-antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AlertModal from './AlertModal';

const stylings = css`
    padding: 16px 16px 16px 20px;
    background: #ffffff;
    border: 0.5px solid #e2e3e4;
    border-radius: 4px;
    height: 56px;
`;

const StyledInput = styled(Input)`
    ${stylings}
`;
const StyledPasswordInput = styled(Input.Password)`
    ${stylings}
`;

interface IUserLogin {
    userName: string;
    password: string;
}

const intialValues: IUserLogin = {
    userName: '',
    password: '',
};

const simulateApi = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('User Created'), 1000);
    });

function LoginForm() {
    const [showModal, setShowModalAlert] = useState(false);

    const handleSubmit = async (values: IUserLogin, bag: FormikHelpers<IUserLogin>) => {
        bag.setSubmitting(true);
        console.log(values);
        await simulateApi();
        setShowModalAlert(true);
        bag.setSubmitting(false);
    };

    const router = useRouter();

    return (
        <Formik initialValues={intialValues} onSubmit={handleSubmit}>
            <Form className="w-full md:justify-end flex items-start">
                <div className="w-full max-w-[404px] bg-white shadow-form rounded-[10px] p-8">
                    <FormItem name="userName">
                        <StyledInput suffix={<span />} name="userName" placeholder="Email or phone number" />
                    </FormItem>

                    <FormItem name="password">
                        <StyledPasswordInput suffix={<span />} name="password" placeholder="Password" />
                    </FormItem>

                    <p className="text-primary text-right text-xs">Forgot your password?</p>
                    <SubmitButton className="block w-full h-[53px] my-5 bg-primary border-primary">
                        Create Account
                    </SubmitButton>
                    <p className="text-center">
                        Don&apos;t have a Bridge account?{' '}
                        <Link href={'/register'}>
                            <span className="text-primary cursor-pointer">Register</span>
                        </Link>
                    </p>
                </div>
                <AlertModal
                    actionText="Sign in to dashboard"
                    onActionClick={() => router.push('/referral/dashboard')}
                    message="Login Successfull!"
                    isOpen={showModal}
                    onClose={() => setShowModalAlert(false)}
                />
            </Form>
        </Formik>
    );
}

LoginForm.propTypes = {};

export default LoginForm;
