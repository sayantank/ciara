import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SubmitBtn } from "../Buttons";
import { Divider } from "../Divider";
import FancyTitle from "../FancyTitle";
import StyledSection from "../StyledSection";
import axios from "axios";

interface ContactFormProps {}

type ContactInputs = {
  name: string;
  email: string;
  contact: string;
  // plan: string;
  message?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({}) => {
  const { register, handleSubmit, errors } = useForm<ContactInputs>();
  const validatePhoneNo = (value) => {
    if (isNaN(value) || value.trim().length !== 10) {
      return false;
    }
    return true;
  };

  const [submitText, setSubmitText] = useState("SUBMIT");
  const [errorMsg, setErrorMsg] = useState(null);

  const onSubmit = async (data: ContactInputs) => {
    // console.log(data);
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
          }, 3000);
        } else {
          setSubmitText("INVALID INPUT");
          setTimeout(() => {
            setSubmitText("SUBMIT");
          }, 3000);
        }
      })
      .catch((_) => {
        //console.log(err);
        setErrorMsg("Something went wrong. Please contact us");
        setTimeout(() => {
          setErrorMsg(null);
        }, 3000);
      });
  };
  return (
    <StyledSection>
      <Container>
        <FancyTitle>REQUEST A CALLBACK</FancyTitle>
        <Divider width="120px" margin="36px" height="6px" />
        <Form onSubmit={handleSubmit(onSubmit)} id="contact-form">
          <Wrapper>
            <div className="left">
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
                  type="tel"
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
              When do you plan to buy?
              <select name="plan" ref={register}>
                <option value="immediately">Immediately</option>
                <option value="months_3_to_6">3-6 Months</option>
                <option value="months_6_to_12">6-12 Months</option>
                <option value="year_1">1 year</option>
              </select>
            </Label> */}
            </div>
            <div className="right">
              <Label>
                Your Message
                <TextArea form="contact-form" ref={register} name="message" />
              </Label>
            </div>
          </Wrapper>
          <ButtonWrapper>
            <SubmitBtn type="submit">{submitText}</SubmitBtn>
            {errorMsg && <Label style={{ color: "red" }}>{errorMsg}</Label>}
          </ButtonWrapper>
        </Form>
      </Container>
    </StyledSection>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ButtonWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  .left {
    flex: 1;
    padding: 12px;
  }
  .right {
    flex: 1;
    padding: 12px 36px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    .left {
      padding: 0;
    }
    .right {
      padding: 0;
    }
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.blue};
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
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;
    margin: 8px 0px;
    border-radius: 5px;

    &:focus {
      outline-width: 0;
    }
    @media screen and (max-width: 1024px) {
      padding: 6px 8px;
    }
  }
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: solid 3px;
  border-color: ${({ theme }) => theme.colors.gold};
  border-radius: 10px;
  padding: 12px 16px;
  margin: 8px 0px;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 500;
  width: 100%;
  &:focus {
    outline-width: 0;
  }

  @media screen and (max-width: 1024px) {
    padding: 6px 8px;
  }
`;

const TextArea = styled.textarea`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  border: solid 3px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.gold};
  padding: 8px 14px;
  margin: 8px 0px;
  resize: none;
  width: 100%;
  height: 240px;

  &:focus {
    outline-width: 0;
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

// const NumberWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;

//   h1 {
//     font-size: 1.4rem;
//     color: ${({ theme }) => theme.colors.gold};
//     margin-right: 12px;
//   }
// `;

export default ContactForm;
