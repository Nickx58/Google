import Link from "./Link";

const SideBar = () => {
    const links = [
        { label: "Drop Down", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Buttons", path: "/buttons" },
        { label: "Modal", path: "/modal" },
        { label: "Counter", path: "/counter" }
    ]

    const renderLinks = links.map((link) => {
        return <Link className="mb-3" key={link.label} to={link.path}>{link.label}</Link>
    })
    return (
        <div className="sticky top-0 flex flex-col">
            {renderLinks}
        </div>
    )
}

export default SideBar