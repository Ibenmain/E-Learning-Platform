import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/AutheContext";

const BACKEND_URL = "http://localhost:8000/api/authe/github/";
const REDIRECT_URI = "http://localhost:3000/auth/github/callback";

const GithubCallback = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        const code = new URLSearchParams(window.location.search).get("code");

        if (code) {
            axios.post(BACKEND_URL, { code, redirect_uri: REDIRECT_URI })
                .then((res) => {
                    sessionStorage.setItem("access", res.data.access);
                    sessionStorage.setItem("refresh", res.data.refresh);
                    login?.();
                    navigate("/home");
                })
                .catch((err) => {
                    console.error("GitHub login failed:", err.response?.data || err);
                });
        } else {
            console.error("No code found in URL");
        }
    }, [navigate, login]);

    return <p>Processing GitHub login...</p>;
};

export default GithubCallback;
