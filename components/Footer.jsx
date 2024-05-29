import Link from "next/link";

function Footer() {

    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split("-");
        return `${day}/${month}/${year}`;
    };

    return (
        <>
            <br/>
            <br/>
            <footer style={{backgroundColor: "#004500", color: "white"}}>
                <section className={"FS"}>
                    <div className={"FS_container"}>
                        <div className={"FS_content"}>
                            <h2 className={"FS_title s-font"}>Portfolio d&apos;Arthur Mondon.</h2>
                            <p style={{color: "lightgrey"}}>Développeur web FullStack dans le Vaucluse (à Carpentras,
                                Monteux, Aubignan et ses alentours).</p>
                            <br/>
                            <br/>
                            <div className={"fr g3"}>

                                <div>
                                    <h3 className={"s-font"}>Ressources</h3>
                                    <div className={"fc g0-5"}>
                                        <Link href={"/rgpd"}>
                                            RGPD
                                        </Link>
                                        <Link href={"/mentions-legales"}>
                                            Mentions légales
                                        </Link>
                                        <Link href={"/sitemap.xml"}>
                                            Sitemap
                                        </Link>

                                    </div>
                                </div>
                                <div>
                                    <h3 className={"s-font"}>Liens</h3>
                                    <div className={"fc g0-5"}>
                                        <Link href={"https://www.linkedin.com/in/arthurmondon/"}>
                                            LinkedIn
                                        </Link>

                                        <Link href={"https://github.com/arthur-mdn"}>
                                            Github
                                        </Link>

                                        <Link href={"https://www.youtube.com/@arthurmdn"}>
                                            YouTube
                                        </Link>

                                        <Link href={"/contact"}>
                                            Formulaire de Contact
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <p className={"s-font"}>
                        Copyright 2024 - Arthur MONDON
                    </p>
                </section>


            </footer>
        </>
    );
}

export default Footer;
