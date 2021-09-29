export default function Banner () {
    return (
        <div className="d-flex">
            <div className="col-8">
                <h1 className="pt-5 px-5">Keep Talking and Nobody Explodes</h1>
                <h2 className="pb-5 px-5">Helper in React.JS</h2>
            </div>
            <div className="col-4 pt-1 d-flex">
                <img className="img-fluid react mr-5 ml-auto" src="../images/react.png" alt="react"/>
            </div>
        </div>
    )
}