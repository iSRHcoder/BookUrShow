import "./App.css";
import PageRoutes from "./routes/PageRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MovieListProvider from "./contexts/MovieListContext";
import ThemeProvider from "./contexts/ThemeContext";
import AuthProvider from "./contexts/AuthContext";
import UserProvider from "./contexts/UserContext";
import SelectedSeatsProvider from "./contexts/SelectedSeatsContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <MovieListProvider>
              <SelectedSeatsProvider>
                <PageRoutes />
              </SelectedSeatsProvider>
            </MovieListProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
