import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { SubmitBtn2 } from "./Buttons";

interface RegisterFormProps {
  show: boolean;
  position: boolean;
  toggle: any;
}

type ContactInputs = {
  name: string;
  email: string;
  contact: string;
  // plan: string;
  message: string;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  show,
  position,
  toggle,
}) => {
  const [submitText, setSubmitText] = useState("SUBMIT");
  const [errorMsg, setErrorMsg] = useState(null);
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm<ContactInputs>();

  const validatePhoneNo = (value) => {
    if (isNaN(value) || value.trim().length !== 10) {
      return false;
    }
    return true;
  };

  const onSubmit = async (data: ContactInputs) => {
    setDisable(true);
    axios
      .post("https://api.ciaraheights.com.au/registrations", {
        name: data.name.trim(),
        email: data.email.trim(),
        contact: data.contact.trim(),
        // plan: data.plan.trim(),
        message: data.message.trim(),
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setSubmitText("THANK YOU FOR REGISTERING");
          setTimeout(() => {
            setSubmitText("SUBMIT");
            setDisable(false);
          }, 10000);
          reset();
        } else {
          setSubmitText("INVALID INPUT");
          setTimeout(() => {
            setSubmitText("SUBMIT");
            setDisable(false);
          }, 5000);
        }
      })
      .catch((_) => {
        //console.log(err);
        setErrorMsg("Something went wrong. Please contact us");
        setTimeout(() => {
          setErrorMsg(null);
          setDisable(false);
        }, 3000);
      });
  };
  return (
    <>
      <Overlay isOpen={show} onClick={toggle} />
      <MainContainer position={position}>
        <Wrapper>
          <CloseIcon>
            <Close onClick={toggle} />
          </CloseIcon>
          <ImageWrapper>
            <img
              src="/images/clara-full.png"
              alt="Ciara Heights"
              style={{ height: "100%", width: "auto" }}
            />
          </ImageWrapper>
          <Header>REGISTER WITH US</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              Full Name
              <Input
                name="name"
                type="text"
                ref={register({ required: "This field is required" })}
              />
              <ErrorMsg msg={errors.name?.message}>
                {errors.name?.message}
              </ErrorMsg>
            </Label>
            <Label>
              Email
              <Input
                name="email"
                type="email"
                ref={register({ required: "This field is required" })}
              />
              <ErrorMsg msg={errors.email?.message}>
                {errors.email?.message}
              </ErrorMsg>
            </Label>
            <Label>
              Mobile Number
              <Input
                name="contact"
                type="text"
                ref={register({
                  required: "This field is required",
                  validate: (value) =>
                    validatePhoneNo(value) || "Invalid Mobile Number",
                })}
              />
              <ErrorMsg msg={errors.contact?.message}>
                {errors.contact?.message}
              </ErrorMsg>
            </Label>

            {/* <Label>
                  When do you plan on buying?
                  <select name="plan" ref={register}>
                    <option value="immediately">Immediately</option>
                    <option value="months_3_6">3 to 6 Months</option>
                    <option value="months_6_12">6 to 12 Months</option>
                    <option value="year_1">1 year</option>
                  </select>
                </Label> */}
            <Label>
              Your Message
              <Input ref={register} name="message" type="text" />
            </Label>
            <SubmitBtn2 type="submit" disabled={disable}>
              {submitText}
            </SubmitBtn2>
            <Label style={{ color: "red" }}>{errorMsg}</Label>
          </Form>
        </Wrapper>
      </MainContainer>
    </>
  );
};

const Overlay = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  top: 0;
  position: fixed;
  background: ${({ isOpen }) => (isOpen ? "rgba(0,0,0,0.5)" : "none")};
  transition: 0.3s ease-in;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 150;
`;

const ImageWrapper = styled.div`
  height: 74px;
  width: auto;
  text-align: center;
  margin: 12px 0;
  margin-top: -30px;
  @media screen and (max-width: 1024px) {
    height: 40px;
    margin: 8px 0;
    margin-top: -40px;
  }
`;

const MainContainer = styled.div<{ position: any }>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 50vw;
  background-color: rgba(0, 41, 81, 1);
  right: ${({ position }) => (position ? "0" : "-50vw")};
  transition: all 0.5s ease-in-out;
  z-index: 300;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1024px) {
    width: 100vw;
    right: ${({ position }) => (position ? "0" : "-100vw")};
  }
`;

const Wrapper = styled.div`
  min-width: 40vw;
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  margin: 12px 0px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.blue};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gold};
  }

  @media screen and (max-width: 1024px) {
    min-width: 95vw;
  }
`;

const Header = styled.h1`
  width: 100%;
  text-align: center;
  font-family: "Ellen-Luff";
  font-size: 2.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gold};
  margin: 18px 0px;
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
    margin: 12px 0px;
  }
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 24;
  right: 0;
  font-size: 1.8rem;
  z-index: 20;
  cursor: pointer;
  margin-bottom: 12px;
`;

const Close = styled(FaTimes)`
  color: ${({ theme }) => theme.colors.gold};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 0px 8px;
`;

const Label = styled.label`
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 8px 0px;

  select {
    border: solid 3px;
    border-color: ${({ theme }) => theme.colors.gold};
    padding: 12px 16px;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 500;
    margin: 8px 0px;
    background-color: transparent;
    border-radius: 5px;
    &:focus {
      outline-width: 0;
    }

    option {
      background-color: rgba(0, 41, 81, 1);
    }
    @media screen and (max-width: 1024px) {
      padding: 6px 8px;
    }
  }
`;

const Input = styled.input`
  font-size: 1rem;
  border: solid 3px;
  border-color: ${({ theme }) => theme.colors.gold};
  padding: 12px 16px;
  margin: 8px 0px;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  &:focus {
    outline-width: 0;
  }

  @media screen and (max-width: 1024px) {
    padding: 6px 8px;
    margin: 8px 0px 0px 0px;
  }
`;

const ErrorMsg = styled.p<{ msg: string }>`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  display: ${(props) =>
    props.msg === "" || props.msg === undefined ? "none" : "block"};
`;

export default RegisterForm;
