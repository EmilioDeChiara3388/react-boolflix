import { GlobalContextProvider, useGlobalContext } from "./contexts/GlobalContext"
import SearchBar from "./components/SearchBar";
import ListOfResults from "./components/ListOfResults";

function App() {

  return (
    <>

      <GlobalContextProvider>

        <SearchBar />
        <main>
          <ListOfResults />
        </main>

      </GlobalContextProvider>


    </>
  )
}

export default App


