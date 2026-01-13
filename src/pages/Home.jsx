import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Home () {

    return (
        <div classname="app"> 
            <Sidebar />
            <main classname="main">
                <Header />
                <section classname="content">
                    <h1>Good afternoon!</h1>
                </section>
            </main>
        </div>
    );
}

export default Home;