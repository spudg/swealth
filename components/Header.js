import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import logo from "../images/swealth.png";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#ffffff00",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#84928b",
  fontFamily: theme.palette.text.secondary,
}));

export default function Header() {
  return (
    <>
      <main></main>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        alignItems="center"
      >
        <Image src={logo} height={60} />
        <Item elevation={0}>Dashboard</Item>
        <Item elevation={0}>About</Item>
        <Item elevation={0}>Contact</Item>
        <Item elevation={0}>Support</Item>
      </Stack>
    </>
  );
}
