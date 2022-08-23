const Container = (props) => {
    return(
        <div className="w-full px-5 md:px md:w-5/6 mx-auto">
            {props.children}
        </div>
    )
}

export default Container;