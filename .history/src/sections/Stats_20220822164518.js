import Logo from "../components/Logo";

const Stats = () => {
    return(
        <section className="w-full md:w-5/6 mx-auto">
            <h2>Early adopters <Logo /> have reported...</h2>
            <div>
                <div>
                    <span className="blockfont-medium"><Logo /> FMCGs</span>
                </div>
            </div>
        </section>
    )
}

export default Stats;