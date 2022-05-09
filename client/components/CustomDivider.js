import React from "react";
import { Card} from "@rneui/themed";

const CustomDivider = () =>{
    return(
        <Card.Divider
            style={{
              marginTop: 24,
              marginRight: -15,
              marginLeft: -15,
              elevation: 1,
            }}
          />
    );
};

export default CustomDivider;