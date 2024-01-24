"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Button, Typography } from "@mui/material";
import { useUnit } from "effector-react";
import { $random, plasRandom, minusRandom, random } from "@/stores/random";

export default function Home() {
  const plasStore = useUnit($random);

  return (
    <main>
      <div className="container">
        <div className="wrapper">
          <Typography variant="h2" className="title">Число: {plasStore}</Typography>
          <div className="btn">
            <Button variant="contained" onClick={() => plasRandom()}>
              Увеличить
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => minusRandom()}
            >
              Уменьшить
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => random()}
            >
              Рандом
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
