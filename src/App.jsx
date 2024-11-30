import { GlobalContextProvider, useGlobalContext } from "./contexts/GlobalContext"
import AppHeader from "./components/AppHeader";
import ListOfResults from "./components/ListOfResults";
import AppFooter from "./components/AppFooter";

function App() {

  return (
    <>

      <GlobalContextProvider>

        <AppHeader />
        <main>
          <ListOfResults />
        </main>
        <AppFooter />

      </GlobalContextProvider>


    </>
  )
}

export default App


