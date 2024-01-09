export default function JoinForm({ styles }) {
    return (
        <form className="account_form">
            <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
                className="account_input"
            />

            <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                className="account_input"
            />
            <input
                type="password"
                id="password_check"
                name="password_check"
                placeholder="비밀번호 확인"
                className="account_input"
            />
            <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="닉네임"
                className="account_input"
            />

            <button type="submit" className={`submit_btn ${styles.join_btn}`}>
                가입하기
            </button>
        </form>
    );
}
