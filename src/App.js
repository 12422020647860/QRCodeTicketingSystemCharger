import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { QrReader } from "react-qr-reader";

function App() {
  const [data, setData] = useState("");

  return (
    <Stack sx={{ height: "100vh" }}>
      <Stack sx={{ flexGrow: "1" }} justifyContent="center" alignItems="center">
        {data ? (
          <p>{data}</p>
        ) : (
          <div style={{ width: "320px" }}>
            <QrReader
              onResult={(result, error) => {
                if (!!result) {
                  setData(result?.text);
                }

                if (!!error) {
                  console.info(error);
                }
              }}
            />
          </div>
        )}
      </Stack>
    </Stack>
  );
}

export default App;
