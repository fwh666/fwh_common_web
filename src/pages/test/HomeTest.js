import React from "react";
import {useNavigate} from "react-router-dom";

function HomeTest() {
    const navigate = useNavigate();

    // const history = useHistory();

    function handleClick() {
        //参见config.js文件
        navigate("/about");
        // history.push("/about")
    }

    return (
        <div>
            <button onClick={handleClick}>Go to new page</button>
            {/*<Routes>*/}
            {/*    <Route exact path="/about" component={About}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default HomeTest;
