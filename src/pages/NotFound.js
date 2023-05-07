import Animate from "../components/Animate/Animate";
import Container from "../components/Container/Container";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Animate>
      <Container>
        <div className="p-12 flex justify-center">
          <div className="text-center">
            <div className="font-bold text-7xl my-4">404</div>
            <div className="my-4 text-xl">PAGE NOT FOUND!</div>
            <div className="my-4">
              <Button onClick={() => navigate("/")}>Go back home</Button>
            </div>
          </div>
        </div>
      </Container>
    </Animate>
  );
};

export default NotFound;
