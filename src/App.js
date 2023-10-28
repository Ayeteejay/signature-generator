import { useState } from "react";
import styled from "styled-components";
import Layout from "./components/Layout";
import { PrimaryButton } from "./components/Buttons";
import Hero from "./components/Hero";
import SignatureRenderer from "./components/Renderer";
import Clipboard from "./components/Copy";

const SignatureWrapper = styled.div`
  position: relative;
  .signature {
    position: relative;
    z-index: 2;
    background: var(--iron);
    padding: 2rem;
    margin: 4rem 0 2rem 0;
  }
  .error-message {
    position: absolute;
    z-index: 1;
    height: 100%;
    inset: 0 auto auto 0;
    transform: translateY(0);
    transition: all 500ms ease-in-out;
    background: var(--bronze);
    padding: 0.75rem 1.25rem;
    p {
      font-family: var(--rift);
      font-weight: bold;
      color: var(--ink);
    }
    @media screen and (max-width: 999px) {
      width: 100%;
      text-align: center;
      p {
        font-size: 1rem;
      }
    }
  }
  .show-error-message {
    transform: translateY(-50px);
  }
`;

const InputSignature = styled.div`
  border: 1px solid var(--slate);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  input {
    color: var(--smoke);
    font-size: var(--font-medium);
    font-family: var(--rift);
    font-weight: bold;
    padding: 1.75rem 1.25rem;
    background: none;
    border: none;
    transition: all 300ms;
    &:focus {
      background: var(--tombstone);
      outline: none;
    }
  }
  input.full-name {
    border-right: 1px solid var(--slate);
    border-bottom: 1px solid var(--slate);
  }
  input.pronouns {
    border-bottom: 1px solid var(--slate);
  }
  input.title {
    border-right: 1px solid var(--slate);
  }
  ::placeholder {
    color: var(--smoke);
    opacity: 0.65;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    input.full-name {
      border-bottom: 1px solid var(--slate);
      border-right: none;
    }
    input.pronouns {
      border-bottom: 1px solid var(--slate);
    }
    input.title {
      border-right: none;
      border-bottom: 1px solid var(--slate);
    }
  }
`;

const GeneratedSignature = styled.div`
  #signature-container {
    background: var(--smoke);
    transition: all 300ms;
  }
  .top-row {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.25rem;
    margin: 0 0 3px 0;
  }
  .name-pronouns {
    display: flex;
    gap: 0.25rem;
  }
  .middle-row {
    margin: 0 0 6px 0;
  }
  p.success-message {
    color: var(--smoke);
    font-family: var(--rift);
    font-size: var(--font-large);
    font-weight: bold;
    line-height: 1.15;
  }
  p.phone-number {
    font-size: 10px;
    font-family: "Elza", sans-serif; // Do not use CSS variables
    color: black; // Do not use CSS variables
  }
  a.site-link {
    font-size: 10px;
    font-family: "Elza", sans-serif; // Do not use CSS variables
    color: black; // Do not use CSS variables
    text-decoration: none;
  }
`;

export default function App() {
  const [generateEmail, setGenerateEmail] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);
  const [emailFields, setEmailFields] = useState({
    full_name: "",
    pronouns: "",
    title: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmailFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createSignature = () => {
    const validateFields = () => {
      const requiredFields = ["full_name", "title"];
      for (let field of requiredFields) {
        if (!emailFields[field] || emailFields[field].trim() === "") {
          return false;
        }
      }
      return true;
    };
    if (validateFields()) {
      setGenerateEmail(!generateEmail);
    } else {
      setErrorMessage(true);
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
  };

  const createAgain = () => {
    setGenerateEmail(!generateEmail);
    const resetFields = Object.keys(emailFields).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {});
    setEmailFields(resetFields);
  };

  return (
    <Layout>
      <Hero />
      <SignatureWrapper>
        <div className="signature">
          <div style={{ display: generateEmail ? "block" : "none" }}>
            <InputSignature>
              <input
                className="full-name"
                placeholder="Full Name"
                name="full_name"
                onChange={handleInputChange}
                type="text"
                value={emailFields.full_name}
              ></input>
              <input
                className="pronouns"
                placeholder="Your Pronouns (They/Them)"
                name="pronouns"
                onChange={handleInputChange}
                type="text"
                value={emailFields.pronouns}
              ></input>
              <input
                className="title"
                placeholder="Your Title/Role"
                name="title"
                onChange={handleInputChange}
                type="text"
                value={emailFields.title}
              ></input>
              <input
                placeholder="Phone No."
                name="phone"
                type="telephone"
                onChange={handleInputChange}
                value={emailFields.phone}
              ></input>
            </InputSignature>
          </div>
          <GeneratedSignature
            style={{
              display: !generateEmail ? "block" : "none",
            }}
          >
            <p className="success-message">
              You're done! Copy and paste into your email client.
            </p>
            <Clipboard
              data={{
                default_text: "Copy Signature",
                copied_text: "Copied!",
                selection: "signature-container",
              }}
            />
            <div id="signature-container" style={{ padding: "30px" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                      <html>
                        <head>
                          <style>
                          #signature-container{
                            background:#fff !important;
                          }
                            @media (prefers-color-scheme: dark) { 
                              #signature-container{ 
                                background: #fff !important;
                                color: #000 !important;
                              }
                            }
                            #vssl-site{
                              color: black !important;
                            }
                          </style>
                        </head>
                      </html>
                    `,
                }}
              />
              <div className="top-row">
                <img
                  src="/images/vssl.png"
                  alt="VSSL flag logomark"
                  width={35}
                  height={26}
                />
                <div>
                  <div className="name-pronouns">
                    <SignatureRenderer
                      data={{
                        color: "ink",
                        size: "17px",
                        text: emailFields.full_name,
                        brackets: false,
                        font_size: "regular",
                      }}
                    />
                    <SignatureRenderer
                      data={{
                        color: "iron",
                        size: "17px",
                        text: emailFields.pronouns,
                        brackets: true,
                        font_size: "regular",
                      }}
                    />
                  </div>
                  <SignatureRenderer
                    data={{
                      color: "iron",
                      size: "13px",
                      text: emailFields.title,
                      brackets: false,
                      font_size: "small",
                    }}
                  />
                </div>
              </div>
              <div className="middle-row">
                <p
                  className="phone-number"
                  style={{
                    display:
                      emailFields.phone.length > 0 ? "inline-block" : "none",
                    fontFamily: "Elza, sans-serif !important",
                  }}
                >
                  {emailFields.phone}
                  {"\u00A0".repeat(2)}|{"\u00A0".repeat(2)}
                </p>
                <a
                  href="https://vsslagency.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="site-link"
                  id="vssl-site"
                  style={{
                    color: "black !important",
                    textDecoration: "none !important",
                    fontFamily: "Elza, sans-serif !important",
                  }}
                >
                  vsslagency.com
                </a>
              </div>
              <img
                src="/images/one-percent.png"
                alt="1% For The Planet"
                width={48}
                height={20}
              />
            </div>
          </GeneratedSignature>
          <PrimaryButton
            data={{
              title: `${generateEmail ? "Generate" : "Generate Another"}`,
              action: generateEmail ? createSignature : createAgain,
            }}
          />
        </div>
        <div
          style={{
            display:
              emailFields.full_name.length > 0 && emailFields.title.length > 0
                ? "none"
                : "block",
          }}
          className={`error-message ${
            errorMessage ? "show-error-message" : ""
          }`}
        >
          <p>
            Bogus!{" "}
            {emailFields.full_name.length === 0 && emailFields.title
              ? "Full Name"
              : ""}{" "}
            {emailFields.title.length === 0 && emailFields.full_name
              ? "Title/Role"
              : ""}{" "}
            {emailFields.full_name.length === 0 &&
            emailFields.title.length === 0
              ? `Full Name and Title/Role`
              : ""}{" "}
            missing.
          </p>
        </div>
      </SignatureWrapper>
    </Layout>
  );
}
