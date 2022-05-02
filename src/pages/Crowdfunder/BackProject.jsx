import React, { useState } from "react";
import { Button } from "../StyledComponents";
import { Input } from "../../components/styles/Styles";
import useInput from "../../hooks/useInput";

const BackProject = ({ handlePay }) => {
  const [isBacking, setIsBacking] = useState(false);
  const backingAmount = useInput();

  return (
    <>
      <Button
        onClick={() => {
          if (isBacking) handlePay(null, backingAmount.input, setIsBacking);
          else setIsBacking(true);
        }}
      >
        Back this project
      </Button>
      {isBacking && (
        <form
          style={{ marginTop: "20px" }}
          onSubmit={(e) => handlePay(e, backingAmount.input, setIsBacking)}
        >
          <Input
            {...backingAmount}
            placeholder="Enter amount in dollars"
            autoFocus
            type="number"
          />
        </form>
      )}
    </>
  );
};

export default BackProject;
