import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { useForm } from "react-hook-form";
//import axios from "axios";
import { SubmitBtn2 } from "./Buttons";

interface RegisterProps {}

type ContactInputs = {
  fullname: string;
  email: string;
  contact: string;
  postcode: string;
  when: string;
  find: string;
  size: string;
};

const Register: React.FC<RegisterProps> = ({}) => {
  const [opacity, setOpacity] = useState(0);
  const [show, setShow] = useState<Boolean>(false);

  const toggle = () => {
    setShow(!show);
    setTimeout(() => {
      setOpacity(Number(!opacity));
    }, 10);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [show]);

  const validatePhoneNo = (value) => {
    if (isNaN(value) || value.trim().length !== 10) {
      return false;
    }
    return true;
  };

  const onSubmit = async (data: ContactInputs) => {
    // const res = await axios.post(
    //   "https://sleepy-anchorage-19435.herokuapp.com/registrations",
    //   {
    //     fullname: data.fullname.trim(),
    //     email: data.email.trim(),
    //     contact: data.contact.trim(),
    //     postcode: data.postcode.trim(),
    //     when: data.when.trim(),
    //     find: data.find.trim(),
    //     size: data.size.trim(),
    //   }
    // );
    console.log(data);
  };

  const { register, handleSubmit, errors } = useForm<ContactInputs>();

  return (
    <>
      {show && (
        <MainContainer opacity={opacity}>
          <Wrapper>
            <CloseIcon>
              <Close onClick={toggle} />
            </CloseIcon>
            <Header>REGISTER WITH US</Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Label>
                Full Name
                <Input
                  name="fullname"
                  type="text"
                  ref={register({ required: "This field is required" })}
                />
                <ErrorMsg msg={errors.fullname?.message}>
                  {errors.fullname?.message}
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
                <NumberWrapper>
                  <h1>+61</h1>
                  <Input
                    name="contact"
                    type="text"
                    ref={register({
                      required: "This field is required",
                      validate: (value) =>
                        validatePhoneNo(value) || "Invalid Mobile Number",
                    })}
                  />
                </NumberWrapper>
                <ErrorMsg msg={errors.contact?.message}>
                  {errors.contact?.message}
                </ErrorMsg>
              </Label>
              <Label>
                Postal Code
                <Input
                  name="postcode"
                  type="text"
                  ref={register({ required: "This field is required" })}
                />
                <ErrorMsg msg={errors.postcode?.message}>
                  {errors.postcode?.message}
                </ErrorMsg>
              </Label>
              <Label>
                When do you plan on buying?
                <select name="when" ref={register}>
                  <option value="immediately">Immediately</option>
                  <option value="months_3_6">3 to 6 Months</option>
                  <option value="months_6_12">6 to 12 Months</option>
                  <option value="year_1">1 year</option>
                </select>
              </Label>
              <Label>
                What size block are you looking for?
                <select name="size" ref={register}>
                  <option value="less_than_400">Less than 400 m2</option>
                  <option value="from_400_to_450">400-450 m2</option>
                  <option value="from_450_to_500">450-500 m2</option>
                  <option value="from_500_to_550">500-550 m2</option>
                  <option value="from_550_to_600">550-600m2</option>
                  <option value="over_600">Over 600 m2</option>
                  <option value="house_and_land">House and Land</option>
                </select>
              </Label>
              <Label>
                How did you find out about us?
                <select name="find" ref={register}>
                  <option value="builder_referral">Builder Referral</option>
                  <option value="bus_signage">Bus Signage</option>
                  <option value="domain_com_au">Domain.com.au</option>
                  <option value="email_comm">Email Communication</option>
                  <option value="facebook">Facebook</option>
                  <option value="friend_family">Friends and Family</option>
                  <option value="google">Google</option>
                  <option value="newspaper">Newspaper</option>
                  <option value="myland_com_au">Myland.com.au</option>
                  <option value="realestate_com_au">Realestate.com.au</option>
                  <option value="signage">Signage</option>
                </select>
              </Label>
              <SubmitBtn2 type="submit">SUBMIT</SubmitBtn2>
            </Form>
          </Wrapper>
        </MainContainer>
      )}
      {!show && <Reveal onClick={toggle}>REGISTER</Reveal>}
    </>
  );
};

const Reveal = styled.div`
  position: fixed;
  writing-mode: vertical-rl;
  /* text-orientation: upright; */
  right: 0;
  top: 30vh;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.blue};
  padding: 16px 8px;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 2px;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 500;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
  }
`;

const MainContainer = styled.div<{ opacity: any }>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 41, 81, 0.95);
  opacity: ${({ opacity }) => opacity};
  transition: opacity 0.5s ease-in-out;
  z-index: 300;
  display: flex;
  justify-content: center;
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

  @media screen and (max-width: 768px) {
    min-width: 95vw;
  }
`;

const Header = styled.h1`
  width: 100%;
  text-align: center;
  font-family: "Ellen-Luff";
  font-size: 2.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gold};

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 24;
  right: 0;
  font-size: 1.4rem;
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
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 500;
    margin: 8px 0px;
    background-color: transparent;
    &:focus {
      outline-width: 0;
    }

    option {
      background-color: rgba(0, 41, 81, 1);
    }
    @media screen and (max-width: 768px) {
      padding: 6px 8px;
    }
  }
`;

const Input = styled.input`
  font-size: 1.2rem;
  border: solid 3px;
  border-color: ${({ theme }) => theme.colors.gold};
  padding: 12px 16px;
  margin: 8px 0px;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 500;
  width: 100%;
  background-color: transparent;
  &:focus {
    outline-width: 0;
  }

  @media screen and (max-width: 768px) {
    padding: 6px 8px;
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

const NumberWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gold};
    margin-right: 12px;
  }
`;

export default Register;
