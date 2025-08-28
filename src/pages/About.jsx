import countryFacts from '../api/countryData.json'
import { Country } from './Country';

export const About = () => {
    return (
        <section className="section-about container">
            <h2 className="container-title">
                Here are the Intresting Facts
                <br />
                We're proud of
            </h2>
            <div className="gradient-cards">
                {
                    countryFacts.map((country) => {
                        const {id, name, capital, population, interestingFact} = country;
                        return (
                            <div className="card" key={id}>
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{name}</p>
                                    <p>
                                        <span className="card-description">Capital : </span>
                                        {capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Population : </span>
                                        {population}
                                    </p>
                                    <p>
                                        <span className="card-description">Intresting Fact : </span>
                                        {interestingFact}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}