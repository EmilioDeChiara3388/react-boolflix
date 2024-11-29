import { GlobalContextProvider, useGlobalContext } from "./contexts/GlobalContext"
import AppHeader from "./components/AppHeader";
import ListOfResults from "./components/ListOfResults";

function App() {

  return (
    <>

      <GlobalContextProvider>

        <AppHeader />
        <main>
          <ListOfResults />
        </main>

      </GlobalContextProvider>


    </>
  )
}

export default App


