import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Navbar";
import {
  Text,
  Spacer,
  Input,
  Switch,
  Radio,
  Checkbox,
  Textarea,
  Grid,
  Container,
  Progress
} from "@nextui-org/react";
import { Box } from "../components/Box";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Formulário</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
          <Text h2>Formulário Teste</Text>
          <Text size="$lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus
            gravida quis blandit turpis. Augue neque gravida in fermentum et
            sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas.
            Elementum tempus egestas sed sed risus pretium quam vulputate.
            Interdum velit euismod in pellentesque massa placerat duis
            ultricies.
          </Text>

          <Spacer y={1} />
          <Container fluid css={{ width: "100%" }}>
            <Grid.Container gap={4} justify="flex-start">
              <Grid>
                <Input clearable bordered labelPlaceholder="Nome Completo" />
              </Grid>
              <Grid>
                <Input clearable bordered labelPlaceholder="Nome Completo" />
              </Grid>
              <Grid>
                <Input clearable bordered type={"date"} />
              </Grid>

              <Grid>
                <Input clearable bordered labelPlaceholder="Nome Completo" />
              </Grid>
              <Grid>
                <Switch shadow placeholder="Está de Férias?" checked />
              </Grid>
            </Grid.Container>
            <Spacer y={1} />
            <Grid.Container gap={4} justify="flex-start">
              <Grid>
                <Textarea labelPlaceholder="Default" status="default" />
              </Grid>
            </Grid.Container>
          </Container>

          <Progress
          indeterminated
          value={50}
          color="secondary"
          status="secondary"
        />
        </Box>
      </main>
    </Layout>
  );
};

export default Home;
