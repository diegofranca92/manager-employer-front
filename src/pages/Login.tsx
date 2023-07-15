import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate()
  

  function handleSubmit() {
    navigate('/home')
    console.log('Entrando...');
  }

  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Card color="transparent" className="p-4">
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Seja bem vind@
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Button className="mt-6" onClick={handleSubmit} fullWidth>
          Entrar
        </Button>
      </form>
    </Card>
    </main>
  );
}