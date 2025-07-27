import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const SkillCardComponent = ({ item }) => {
  console.log(item);
  return (
    <Card className="shadow-xl">
      <Link to={`/skillProjectDetails/${item._id}`}>
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={item?.project_img_url}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
      </Link>

      <CardBody>
        <div className="mb-2 border grid grid-cols-3 items-center justify-between rounded-lg px-2 py-1">
          <div className="col-span-2">
            <p className="text-xl font-semibold">{item?.title}</p>
          </div>

          <div className="flex gap-3 justify-end">
            <div className="flex justify-end">
              {/* <Link to={item?.erd_link} target="_blank">
                <button className="btn bg-black text-white"><FaGithub size={24} /> Link</button>
              </Link> */}
            </div>
            <div className="">
              <Link to={item?.live_link} target="_blank">
                <button className="btn bg-black text-white">Live Link</button>
              </Link>
            </div>
          </div>
        </div>

      </CardBody>
      <CardFooter className="pt-0">
        {/* <Link to={item?.erd_link}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            ERD Diagram
          </Button>
        </Link> */}
      </CardFooter>
    </Card>
  );
};

export default SkillCardComponent;