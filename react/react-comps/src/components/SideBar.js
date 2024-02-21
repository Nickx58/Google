import Link from "./Link";

const SideBar = () => {
    const links = [
        { label: "Drop Down", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Buttons", path: "/buttons" }
    ]

    const renderLinks = links.map((link) => {
        return <Link key={link.label} to={link.path}>{link.label}</Link>
    })
    return (
        <div className="sticky top-0 flex flex-col">
            {renderLinks}
        </div>
    )
}

export default SideBar