import Layout from "components/Base/Layout"
import HealthCheck from "containers/Healthcheck"
import { TextBox } from "components/Base/TextBox/styles"
import Products from "containers/Products"
import { Gutter } from "components/Base/Gutter/styles"

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Gutter
        padding="md"
      >
        <TextBox
          textAlign="center"
        >
          <HealthCheck />
        </TextBox>
      </Gutter>
      <Products />
    </Layout>
  )
}

export default HomePage