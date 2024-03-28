const data = [
    {name:"kishore", skills:"SAP-SD", image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"},
    { name: "sandy", skills: "React", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww" }
]
const Cards = () => {
    return {
        <div className="cards">
            <div>
                <img src={data[0].image}/>
                <h1>{data[0].name}</h1>
                <h2>{data[0].skills}</h2>
            </div>
            <div>
                <img src={data[1].image}/>
                <h1>Name : {data[1].name}</h1>
                <h2>Role : {data[1].skills}</h2>
            </div>
        </div >
    }
};

export default Cards;