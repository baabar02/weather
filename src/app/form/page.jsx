"use client";
import { animate } from "framer-motion";
import Container from "./_components/Container";

const FormPage = () => {
  return (
    <div className="flex">
      <Container animate={animate} />
      {/* <Container /> */}
    </div>
  );
};

export default FormPage;
