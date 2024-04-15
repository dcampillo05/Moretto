"use client";
import "../static/style.css"
import React, { Children } from "react";
import { Banner } from "../components/banner";
import Search from "../components/search";


export default function Home() {
  return (
    <>
      <body>

        <header>
          <section className="search">
            <Search />
          </section>

          <Banner />
        </header>


        <main>

          <h1>TESTE</h1>
        </main>
      </body>
    </>
  );
}
