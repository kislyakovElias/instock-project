import "./TitleWarehouseDetails.scss";
import { useNavigate } from "react-router-dom";
import "../button/Button";
import Button from "../button/Button";
import pencil from "../../assets/Icons/edit-24px.svg";

const TitleWarehouseDetails = ({ titleModeHandler, warehouse_name }) => {
  const nav = useNavigate();
  return (
    <>
      <div className="title-wh-details">
        <div className="title-wh-details__text-con">
          <div
            className="title-wh-details__img-con"
            onClick={() => {
              titleModeHandler();
              nav(-1);
            }}
          >
            <img
              className="title-wh-details__img-back"
              src={require("../../assets/Icons/arrow_back-24px.svg").default}
              alt="backarrow"
            />
          </div>
          <div className="title-wh-details__text">{` ${warehouse_name} `}</div>
          <div className="title-wh-details__button-con">
            <Button
              buttonText={"Edit"}
              buttonType={"button"}
              additionalClasses={"title-wh-details__btn"}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleWarehouseDetails;
