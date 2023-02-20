import React, {useEffect, useRef} from "react";

const Header = ({handleshowlogin, handleMethod}) => {
    const isLoggedIn = false

    const box = useRef(null);
    useOutsideAlerter(box);

    // const showExtra = useSelector(state => state.TextSlice.card_status);
    // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    // const dispatch = useDispatch();

    const handleClickLogin = () => {
        localStorage.setItem("header", 1);
        handleshowlogin();
        handleMethod("Login");
    };

    const handleLoginMethodSignup = () => {
        localStorage.setItem("header", 1);
        handleshowlogin();
        handleMethod("Signup");
    };


    function logout() {
        // dispatch(logoutUserAuthAction())
        // localStorage.removeItem("auth_token");
        // localStorage.removeItem("isLoggedIn");


        // dispatch(setCardStatus(false))

        // navigate("/");
    }


    function showExtraOptions() {
        // dispatch(setCardStatus(!showExtra))
        // console.log(showExtra);
    }

    const onHandleMenu = (event) => {
        switch (event.key) {
            case "logout":
                logout()
                break;
            case "my-design":
                handleMethod('my-all-designs')
                break;
        }
        console.log("===============", event)
    }



    return (
        <div className="header">
            <div className="header-text" style={{
                paddingLeft: 171 }}>This is beta version
            </div>
            <div className="headerright">
                    <button className="login-btn" onClick={handleClickLogin}>
                        Login
                    </button>
                    <button className="signup-btn" onClick={handleLoginMethodSignup}>
                        Sign Up
                    </button>
                </div>
        </div>
    );
};

export default Header;


function useOutsideAlerter(ref) {
    // const dispatch = useDispatch();
    // const showExtra = useSelector(state => state.TextSlice.card_status);
    useEffect(() => {
        // Function for click event
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                // dispatch(setCardStatus(false))
            }
        }

        // Adding click event listener
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
}
