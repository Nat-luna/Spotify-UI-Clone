import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Home () {

    return (
        <div className="app"> 
            <Sidebar />
            <main className="main">
                <Header />
                <section className="content">
                    <h1>Good afternoon!</h1>
                </section>
            </main>
        </div>
    );
}

export default Home;