export default function LoginForm({ styles }) {
    return (
        <form className={`account_form ${styles.login_form}`}>
            <input
                type="text"
                id="id"
                name="id"
                placeholder="아이디"
                className="account_input"
            />
            <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                className="account_input"
            />
            <button type="submit" className="submit_btn">
                로그인
            </button>
        </form>
    );
}
