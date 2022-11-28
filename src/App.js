import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Box, Typography } from "@mui/material";
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
  Upload
} from "./components";

import { auth } from "./utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {

  const [user] = useAuthState(auth);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#111" }}>
        <Navbar user={user} />
        <Routes>
          <Route exact path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          {user ? (
            <Route path="/upload" element={<Upload />} />
          ) : (
            <Route path="/upload" element={
                <Typography variant="h4" color="error" sx={{
                  minHeight: "92vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  Unauthorized Access
                </Typography>
          } />
          )}
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
