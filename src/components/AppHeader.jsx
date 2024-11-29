import SearchBar from "./SearchBar";

export default function AppHeader() {
    return (
        <>
            <header className="d-flex justify-content-between align-items-center p-3 bg-dark">
                <div>
                    <img src="https://fontmeme.com/permalink/241129/51f2b951c3aa35bc622da6c876b6405f.png" id="logo" alt="" />
                </div>
                <SearchBar />
            </header>
        </>
    )
}