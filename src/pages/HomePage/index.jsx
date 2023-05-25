
import Header from "../../components/Header";
import CategoryList from "../../components/CategoryList";
const HomePage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <CategoryList/>
            </div>
        </>
    )
}

export default HomePage;