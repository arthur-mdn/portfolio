import Image from "next/image";
function AboutSection() {
    return (
        <>
            <br/>
            <section className={"AS fc g1"}>
                <h2 className={"s-font"}>À propos</h2>

                <div className={"fr g1"}>
                    <div className={"sms orange"}>
                        <h4 className={"s-font"}>
                            Arthur Mondon, Développeur Web full-stack freelance en Provence (Vaucluse).
                        </h4>
                    </div>
                    <div className={"sms"}>
                        <h4 className={"s-font"}>
                            Je vais au-delà du simple codage, en fusionnant compétences techniques, créativité
                            artistique et acuité commerciale. Pour des résultats qui surpassent les attentes.
                        </h4>
                    </div>
                </div>

                <div className={"fr g1 fc_on_mobile"}>
                    <div className={"AS_card"}>
                        <Image src={"/illustrations/memoji2.png"} alt={"avatar"} width={120} height={150} style={{margin: "auto", objectFit:"contain"}}/>
                        <div>
                            <h2 className={"HS_title s-font"}>Expertise en Développement Web</h2>
                            <p className={"HS_txt s-font"}>
                                Passionné par le web, je crée des applications web responsives et des sites vitrines
                                dynamiques. Mon expertise s&apos;étend des PWA innovantes aux solutions web
                                personnalisées, utilisant les dernières technologies et frameworks. Fondateur d&apos;<a
                                href={"https://eradion.fr"}>Eradion</a>, j&apos;apporte une approche entrepreneuriale à
                                chaque projet.
                            </p>
                        </div>
                    </div>
                    <div className={"fc g1"}>
                        <div className={"AS_card grey"}>
                            <h2 className={"s-font"}>Compétences Multidisciplinaires</h2>
                            <p className={"s-font"}>
                                Mon savoir-faire ne se limite pas au code. Je possède également des compétences en
                                marketing numérique et en design graphique, me permettant de concevoir des projets web
                                esthétiques et stratégiquement efficaces.
                            </p>
                        </div>
                        <div className={"AS_card grey"}>
                            <h2 className={"s-font"}>Technophile</h2>
                            <p className={"s-font"}>
                                Mon usage quotidien d&apos;outils comme Linux, Docker, et GIT témoigne de mon engagement
                                à rester à la pointe de la technologie.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"fc g1"}>
                    <div className={"fr sms orange g1 ai-c"} style={{flexDirection:"row"}}>
                        <Image src={"/illustrations/france-map.svg"} alt={"map france"} width={65} height={65} style={{margin: "auto", objectFit:"contain"}}/>
                        <h4 className={"s-font"}>
                            Arthur Mondon, Développeur Web full-stack freelance situé en région Provence-Alpes-Côte d&apos;Azur.
                            Originaire du Vaucluse, je propose mes services dans le Var et dans l&apos;Hérault.
                            Je peux également me déplacer et/ou réaliser des missions à distance.
                        </h4>
                    </div>
                </div>


            </section>
        </>
    );
}

export default AboutSection;
