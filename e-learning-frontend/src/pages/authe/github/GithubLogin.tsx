import { Icon } from "@iconify/react";

const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const REDIRECT_URI = "http://localhost:3000/auth/github/callback";

const GithubLogin = () => {
    const githubLogin = () => {
        const githubAuthURL =
            `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}` +
            `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
            `&scope=user:email`;
        window.location.href = githubAuthURL;
    }

    return (
        <button onClick={githubLogin} className="rounded-[10px] bg-transparent border-[1px] border-[#9FEF2E] flex flex-row justify-center items-center space-x-2 ~w-[250px]/[343px] ~h-[30px]/[40px] ~text-[12px]/[16px]">
            <Icon icon="octicon:mark-github-24" className="~w-[20px]/[24px] ~h-[20px]/[24px]" />
            <p>Login with GitHub</p>
        </button>
    );
};

export default GithubLogin;
