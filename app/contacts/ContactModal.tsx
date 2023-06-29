'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import Input from '../components/inputs/Input';
import TextArea from '../components/inputs/TextArea';
import { motion } from 'framer-motion';
import ToolTip from '../components/ToolTip';
import Image from 'next/image';

interface ContactModal {
  textEnter: () => void;
  textLeave: () => void;
  variants: any;
  cursorVariant: any;
}

const ContactModal = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variant: any = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgb(244, 244, 244)',
      mixBlendMode: 'difference',
    },
    textwhite: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgb(255, 255, 255)',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/contact', data)
      .then(() => {
        toast.success('Details send!');
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // relative top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8 flex-col lg:flex-row md:flex-row

  return (
    <div className="flex mx-auto md:flex-row lg:flex-row flex-col">
      <div className="relative flex flex-col justify-center">
        <motion.div
          className="cursor"
          variants={variant}
          animate={cursorVariant}
        />
        <div className="relative flex flex-col pl-6 text-center">
          <div className="md:pr-4 w-[350px] pb-4 justify-center">
            <h2
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-4xl text-slate-700 justify-center font-bold pl-9 pb-10 underline hover:underline-offset-[3px] transition"
            >
              Chart with me
            </h2>

            <Image
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              src="/images/email.png"
              alt="email"
              width={500}
              height={500}
              className="pb-2 pl-11 w-auto h-auto"
            />
            <a
              href="mailto:anishchaudhary890@gmail.com"
              className="text-black font-semibold pl-8"
            >
              <ToolTip tooltip="Click me to send mail">
                <button className="bg-rose-300 p-4 text-slate-700 rounded-md hover:bg-rose-500 hover:text-white hover:underline hover:underline-offset-[3px] transition">
                  anishchaudhary890@gmail.com
                </button>

                {/* <Button
                  label="anishchaudhary890@gmail.com"
                  onClick={() => {}}
                /> */}
              </ToolTip>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full p-8 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
        <h1
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="text-4xl font-semibold text-center text-rose-400 underline uppercase decoration-wavy"
        >
          Contact Form
        </h1>
        <form className="mt-16 flex flex-col gap-6">
          <Input
            label="Your Name"
            id="name"
            type="name"
            disabled={isLoading}
            errors={errors}
            register={register}
            required
          />

          <Input
            id="email"
            label="Email"
            type="email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />

          <TextArea
            id="message"
            label="Message"
            type="message"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
          <ToolTip tooltip="Click to submit your message">
            <div className="mb-6 mt-6 hover:bg-rose-400 rounded-md transition">
              <Button
                outline
                label="Send Message"
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </ToolTip>
        </form>
      </div>
      {/* <iframe
        src=""
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
    </div>
  );
};

export default ContactModal;
