import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Form, Formik, FormikHelpers } from 'formik';
import { FormItem, Input, Select, SubmitButton } from 'formik-antd';
import Link from 'next/link';
import React from 'react';
import AlertModal from './AlertModal';
import * as Yup from 'yup';
import { useRouter } from 'next/router';

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

const StyledSelect = styled(Select)`
    &:not(.ant-select-customize-input) .ant-select-selector {
        ${stylings}
    }
`;

interface IUserRegisteration {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    referralCode: string;
    userType: string;
}

const intialValues: IUserRegisteration = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    userType: '',
};

const validation = Yup.object().shape({
    fullName: Yup.string().required('Fullname is required'),
    email: Yup.string().email('must be a valid email address').required('email is required'),
    password: Yup.string().required('No password provided.').min(8, 'Password is too short( minimum of 8 characters)'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('confirm password is required'),
    referralCode: Yup.string(),
    userType: Yup.string().required('please select a user type'),
});

const simulateApi = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('User Created'), 1000);
    });

function RegisterForm() {
    const [showModal, setShowModalAlert] = React.useState(false);
    const handleSubmit = async (values: IUserRegisteration, bag: FormikHelpers<IUserRegisteration>) => {
        bag.setSubmitting(true);
        console.log(values);
        await simulateApi();
        setShowModalAlert(true);
        bag.setSubmitting(false);
    };

    const router = useRouter();

    return (
        <Formik initialValues={intialValues} onSubmit={handleSubmit} validationSchema={validation}>
            <Form className="w-full md:justify-end flex items-start">
                <div className="w-full max-w-[404px] bg-white shadow-form rounded-[10px] p-8">
                    <FormItem name="fullName">
                        <StyledInput suffix={<span />} name="fullName" placeholder="Valid first name & last name" />
                    </FormItem>
                    <FormItem name="email">
                        <StyledInput suffix={<span />} name="email" type="email" placeholder="Email address" />
                    </FormItem>
                    <FormItem name="password">
                        <StyledPasswordInput suffix={<span />} name="password" placeholder="Password" />
                    </FormItem>
                    <FormItem name="confirmPassword">
                        <StyledPasswordInput suffix={<span />} name="confirmPassword" placeholder="Confirm password" />
                    </FormItem>
                    <FormItem name="referralCode">
                        <StyledInput suffix={<span />} name="referralCode" placeholder="Referral Code (Optional)" />
                    </FormItem>
                    <FormItem name="userType">
                        <StyledSelect
                            options={[
                                { value: 'engineer', label: 'Engineer' },
                                { value: 'client', label: 'Client' },
                            ]}
                            name="userType"
                            placeholder="User type"
                        />
                    </FormItem>
                    <p className="text-[#7A7A7A] text-xs text-center">
                        By clicking on register, you are agreeing to our{' '}
                        <Link href={'/#'}>
                            <span className="text-black font-medium cursor-pointer"> Privacy Policy</span>
                        </Link>{' '}
                        and{' '}
                        <Link href={'/#'}>
                            <span className="text-black font-medium cursor-pointer">Terms of service.</span>
                        </Link>
                    </p>
                    <SubmitButton className="block w-full h-[53px] my-5 bg-primary border-primary">
                        Create Account
                    </SubmitButton>
                    <p className="text-center">
                        Already have an account?{' '}
                        <Link href="/login">
                            <span className="text-primary cursor-pointer">Sign In</span>
                        </Link>
                    </p>
                </div>
                <AlertModal
                    actionText="Sign in to dashboard"
                    onActionClick={() => router.push('/referral/dashboard')}
                    message="Account Registration Success!"
                    isOpen={showModal}
                    onClose={() => setShowModalAlert(false)}
                />
            </Form>
        </Formik>
    );
}

RegisterForm.propTypes = {};

export default RegisterForm;
