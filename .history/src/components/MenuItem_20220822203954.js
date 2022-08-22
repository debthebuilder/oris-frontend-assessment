import { Link } from "react-router-dom";

const MenuItem = (props) => {
    return <Link to={'/'} className={"text-black font-medium hover:text-red text-sm no-underline hover:no-underline active:text-red visited:text-black mb-2"}>{props.label}</Link>
}