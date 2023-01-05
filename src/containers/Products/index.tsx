import { Gutter } from "components/Base/Gutter/styles"
import { TextBox } from "components/Base/TextBox/styles"
import ProductCard from "components/Products/Card"
import { Col, Container, Row } from "react-grid-system"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { deleteProduct, fetchProducts } from "services/products"

const Products: React.FC = () => {
  const queryClient = useQueryClient() 

  const { error, isLoading, data } = useQuery<any, Error, ProductDTO[]>('products', fetchProducts)
  
  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteProduct(id),
    onSuccess: (_, id) => {
      return queryClient.setQueryData(
        ['products'], 
        (old: any) => old.filter((item: ProductDTO) => item.id !== id)
      )
    },
  })

  const onDelete = (id: number) => {
    deleteMutation.mutate(id)
  }

  if (isLoading) return (
    <TextBox>
      Loading...
    </TextBox>
  )

  if (error) return (
    <TextBox
      color="statusError"
    >
      { error.message }
    </TextBox>
  )

  if (!data || data.length === 0) return (
    <TextBox>
      No product to display
    </TextBox>
  )

  return (
    <Container>
      <Row>
        {
          data.map(product => (
            <Col
              md={4}
              key={product.id}
            >
              <Gutter
                paddingBottom="md"
              >
                <ProductCard
                  product={product}
                  onDelete={onDelete}
                />
              </Gutter>
            </Col>
          )
        )}
      </Row>
    </Container>
  )
}

export default Products
