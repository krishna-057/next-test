export default function login({
    children,
}: {
    children:React.ReactNode;
}) {
    return (
        <div>
            <h1>Login</h1>
            {children}
        </div>
    )
}