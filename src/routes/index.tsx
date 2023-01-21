import { Fragment } from "react";

import { Container } from "~/components/Container";
import Main from "~/components/Main";

export default function Index() {
  return (
    <Fragment>
      <Main className="flex flex-col bg-black/80 backdrop-blur-sm">
        <Container
          minHeight="full"
          className="flex flex-1 flex-col items-center justify-center text-white"
        >
          <h1 className="text-5xl font-bold">eda.pro</h1>
          <p className="py-6">Сборник рецептов</p>
        </Container>
      </Main>
      <div
        className="fixed top-0 left-0 -z-10 h-screen w-screen"
        style={{
          backgroundImage:
            "url(https://cdn.discordapp.com/attachments/1061282284134731786/1062034617902841967/lily-banse--YHSwy6uqvk-unsplash.jpg)",
        }}
      ></div>
    </Fragment>
  );
}
