import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
  },
});

const CustomPagination = ({ setPage, numOfPages }) => {
  const handlePageChange = (page) => {
    setPage(page);
    document.getElementById("app").scroll(0, 0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
          paddingTop: "35px",
        }}
      >
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={numOfPages}
          size="large"
          hideNextButton
          hidePrevButton
        />
      </div>
    </ThemeProvider>
  );
};

export default CustomPagination;
