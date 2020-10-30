export const isHomePage = () => {
    console.log(document.location.pathname);
    return (
        document.location.pathname === '/'
    );
}
