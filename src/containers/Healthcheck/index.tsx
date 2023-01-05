import { Typography } from "components/Base/Typography/styles"
import { useQuery } from "react-query"
import { fetchHeathCheck } from "services/heathcheck"

const HealthCheck: React.FC = () => {
  const { isLoading, error, data } = useQuery<any, Error, HealthCheckDTO>('healthcheck', fetchHeathCheck)

  if (isLoading) return (
    <Typography>
      Loading
    </Typography>
  )

  if (error) return (
    <Typography
      color="statusError"
    >
      {`Failed to fetch: ${error.message}`} 
    </Typography>
  )

  return (
    <Typography
      color="statusSuccess"
    >
      { data?.message }
    </Typography>
  )

}

export default HealthCheck