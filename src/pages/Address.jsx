import React from "react";
import axios from "axios";

// const headers = {
//   Authorization:
//     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Rlc3QtcG9zLmRpZ2liaXJkLmlvL2FwaS92MS9mcm9udC9sb2dpbiIsImlhdCI6MTY4OTIzMDE5NywiZXhwIjoxNjg5MjUyMDk3LCJuYmYiOjE2ODkyMzAxOTcsImp0aSI6Im52dnFuVTNyVUpuaDJJMWMiLCJzdWIiOiI1IiwicHJ2IjoiMWQwYTAyMGFjZjVjNGI2YzQ5Nzk4OWRmMWFiZjBmYmQ0ZThjOGQ2MyJ9.O4Bw3xZdETUkUsQ7RSlxdJL7cKxELhOy6pOOK2RUCuc",
// };

function Address() {
  axios
    .get(
      "https://test-pos.digibird.io/api/v1/front/self/address?fields=id,xid,name,email,phone,address,shipping_address,city,state,country",
      {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3Rlc3QtcG9zLmRpZ2liaXJkLmlvL2FwaS92MS9mcm9udC9sb2dpbiIsImlhdCI6MTY4OTIzMDE5NywiZXhwIjoxNjg5MjUyMDk3LCJuYmYiOjE2ODkyMzAxOTcsImp0aSI6Im52dnFuVTNyVUpuaDJJMWMiLCJzdWIiOiI1IiwicHJ2IjoiMWQwYTAyMGFjZjVjNGI2YzQ5Nzk4OWRmMWFiZjBmYmQ0ZThjOGQ2MyJ9.O4Bw3xZdETUkUsQ7RSlxdJL7cKxELhOy6pOOK2RUCuc",
        },
      }
    )
    .then((response) => {
      // Process the API response here
      console.log(response.data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error, "error");
    });

  return <div>My Address</div>;
}

export default Address;
