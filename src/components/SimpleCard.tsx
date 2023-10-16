import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
 
export function SimpleCard() {
  return (
    <>
    <div className="flex flex-wrap gap-4 justify-center mt-20">
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Direito Civil
          </Typography>
          <Typography>
          Lidando com questões relacionadas a contratos, propriedade, responsabilidade civil e litígios entre indivíduos e empresas.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Direito Penal
          </Typography>
          <Typography>
          Envolve casos criminais, representando nossos clientes, tanto na defesa quanto na acusação.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Direito do Trabalho
          </Typography>
          <Typography>
          Focado na relação de emprego, na defesa dos direitos do empregado e empregador.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Direito de família e sucessões
          </Typography>
          <Typography>
          Tratando de questões como divórcio, custódia de crianças, pensão alimentícia, adoção, elaboração de testamento e inventário.
          </Typography>
        </CardBody>
      </Card>
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Direito do Agronegócio
          </Typography>
          <Typography>
          Atuando na resolução de conflitos no âmbito judicial e extrajudicial, envolvendo propriedades e demais débitos.
          </Typography>
        </CardBody>
      </Card>
    </div>
    </>
  );
}