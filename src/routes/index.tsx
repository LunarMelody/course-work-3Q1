import { Container } from "~/components/Container";
import Main from "~/components/Main";

export default function Index() {
  return (
    <Main className="flex flex-col">
      <Container minHeight="full" className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">eda.pro</h1>
        <p className="py-6">Блог о современнах рецептах со всего мира</p>
      </Container>
    </Main>
  );
}
