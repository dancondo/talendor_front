import { Gutter } from "components/Base/Gutter/styles";
import { TextBox } from "components/Base/TextBox/styles";
import { CardContainer, CardImage } from "./styles";
import { Typography } from "components/Base/Typography/styles";
import { Col, Row } from "react-grid-system";
import { formatPrice } from "utils/format";
import { Button } from "components/Base/Button/styles";

type ProductCardProps = {
  product: ProductDTO;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => (
  <CardContainer
    padding="md"
  >
    <CardImage
      url={product.image}
    />
    <Gutter
      padding="sm"
    >
      <Row>
        <Col
          xs={8}
        >
          <Gutter>
            <Typography
              fontSize="subtitle"
            >
              { product.name }
            </Typography>
          </Gutter>
          <Gutter
            paddingTop="xs"
          >
            <Typography>
              { product.description }
            </Typography>
          </Gutter>
        </Col>
        <Col
          xs={4}
        >
          <Gutter>
            <Typography
              fontSize="subtitle"
              color="statusSuccess"
            >
              { formatPrice(product.price) }
            </Typography>
          </Gutter>
        </Col>
        <Col
          xs={12}
        >
          <TextBox
            textAlign="center"
          >
            <Button
              textColor="lightPure"
              backgroundColor="statusError"
              onClick={() => onDelete(product.id)}
            >
              Delete
            </Button>
          </TextBox>
        </Col>
      </Row>
    </Gutter>
  </CardContainer>
)

export default ProductCard