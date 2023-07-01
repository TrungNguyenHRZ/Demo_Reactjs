import React from "react";

interface Props {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  birthday: string;
  salary: number;
  phone: string;
}

export const Person: React.FC<Props> = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  birthday,
  salary,
  phone,
}) => {
  return (
    <>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{birthday}</td>
      <td>{salary}</td>
      <td>{phone}</td>
    </>
  );
};
