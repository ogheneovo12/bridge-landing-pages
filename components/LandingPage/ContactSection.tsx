import Container from 'components/Container';
import Image from 'next/image';
import React from 'react';
import { Form, Formik, ErrorMessage, FormikHelpers } from 'formik';
import { FormItem, Input as InputBare } from 'formik-antd';
import { Button } from 'antd';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import { IContactEmail } from '@/common/types/interfaces';
import helpers from '@/common/utils/helper';

const Input = styled(InputBare)`
    .ant-input {
        background: transparent;
        color: #fff;
    }
`;

const validation = Yup.object().shape({
    fullname: Yup.string().required('i would really love to know your name'),
    email: Yup.string().email('email must be a valid email').required('email is required'),
    subject: Yup.string().required('A brief summary of your message would help'),
    message: Yup.string().required("don't be shy!!, tell me about the idea you've got in mind"),
});

function ContactSection() {
    async function handleSubmit(value: IContactEmail, bag: FormikHelpers<IContactEmail>) {
        bag.setSubmitting(true);
        const res = await fetch('/api/sendgrid', {
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const { error } = await res.json();
        bag.setSubmitting(false);
        if (error) {
            helpers.openNotification({
                type: 'error',
                message: 'Failed To Send Email',
                description: error,
            });

            return;
        } else {
            helpers.openNotification({
                type: 'success',
                message: 'Message Succesfully Sent',
                description: 'Your Message has been receieved, i will get back to you Asap!',
            });
            return;
        }
    }
    return (
        <Container id={'contact'} sectionClass="bg-[#1D172F]" containerClass="py-[30px]">
            <h2 className="section-title gradient-text mb-[107px] animate__animated wow animate__fadeIn">Contact </h2>
            <div className="flex items-center justify-between flex-col-reverse md:flex-row">
                <div className="w-full max-w-[679px] text-white">
                    <h4 className=" text-2xl font-extrabold animate__animated animate__tada animate__slow animate__infinite">
                        👋<span className="gradient-text">Hire Me</span>
                    </h4>
                    <p className="my-[32px] animate__animated wow animate__fadeIn">
                        I am available for work. Connect with me via phone:{' '}
                        <span className="font-semi-bold text-primary">+2347014239218</span> or email:
                        <span className="font-semi-bold text-primary">ukuanovweogheneovo@gmail.com</span>
                    </p>
                    <Formik
                        validationSchema={validation}
                        initialValues={{
                            fullname: '',
                            email: '',
                            subject: '',
                            message: '',
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isValid, isSubmitting }) => (
                            <Form>
                                <FormItem name="fullname" className="mb-8">
                                    <Input
                                        suffix={<span className="bg-transparent" />}
                                        data-wow-duration=".5s"
                                        className="bg-transparent h-[55px] animate__fadeInLeft wow animate__animated"
                                        name="fullname"
                                        placeholder="Your Name"
                                    />
                                </FormItem>
                                <FormItem name={'email'} className="mb-8">
                                    <Input
                                        suffix={<span className="bg-transparent" />}
                                        data-wow-duration=".5s"
                                        data-wow-delay=".5s"
                                        className="bg-transparent animate__fadeInLeft wow animate__animated h-[55px]"
                                        name="email"
                                        placeholder="Your Email*"
                                    />
                                </FormItem>
                                <FormItem name="subject" className="mb-8">
                                    <Input
                                        suffix={<span className="bg-transparent" />}
                                        data-wow-duration=".5s"
                                        data-wow-delay="1s"
                                        className="bg-transparent h-[55px] animate__fadeInLeft wow animate__animated"
                                        name="subject"
                                        placeholder="write a subject"
                                    />
                                </FormItem>

                                <InputBare.TextArea
                                    showCount={false}
                                    prefix=""
                                    data-wow-duration=".5s"
                                    data-wow-delay="1.5s"
                                    rows={7}
                                    className="bg-transparent animate__fadeIn wow text-white"
                                    placeholder="your message"
                                    name="message"
                                />
                                <p className="ant-form-item-explain-error mb-4">
                                    <ErrorMessage name="message" />
                                </p>

                                <Button
                                    loading={isSubmitting}
                                    disabled={!isValid}
                                    data-wow-duration=".5s"
                                    data-wow-delay="1.5s"
                                    htmlType="submit"
                                    className="max-w-[189px] w-full h-[56px] disabled:opacity-40 border-primary bg-primary text-white hover:bg-primary hover:text-white"
                                >
                                    Submit
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="flex w-full justify-center md:justify-end items-center">
                    <div className="after_box w-full animated  max-w-[411px] my-[60px] h-[365px]">
                        <Image
                            className="animate__animated animate__rotateInUpRight wow"
                            layout="responsive"
                            width={411}
                            height={365}
                            src="/dp.png"
                            alt="ukuanovwe ovo avatar"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

ContactSection.propTypes = {};

export default ContactSection;
