import Button from "../../components/Button";
import Content from "../../components/Content";
import Footer from "../../components/Footer";

import Header from "../../components/Header";

const Home = () => {

    const login = (e) => {
        console.log(e);
    };

    const signup = (e) => {
        console.log(e);
    };

    const logout = (e) => {
        console.log(e);
    };
    return(
    <>
    <Header/>
    <Content>
        <Button  title="Login"
            type="Success"
            link="/login"
            clickHandler={login}
            
        />
           
            
        
        <Button  title="SignUp"
            type="Warning"
            link="/signup"
            clickHandler={signup}
        />
           
            
       
        <Button title="Log Out"
            type="Error"
            link="/logout"
            clickHandler={logout}
        />
             
    </Content>
    <Footer/>

    </>
    );

}

export default Home;