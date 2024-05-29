import Link from 'next/link';
import {
    FaHouse,
    FaComment,
    FaListCheck, FaPuzzlePiece, FaHandshakeAngle, FaNewspaper
} from "react-icons/fa6";


function Menu() {
    // ...
    return (
        <>
            <section className={"NAVS"}>
                <nav style={styles.navbar}>
                    <ul style={styles.menu}>
                        <li style={styles.menuItem}>
                            <Link style={styles.menuLink} href="/">
                                <FaHouse style={{fontSize: '1.2rem'}}/>
                                <span style={styles.menuLinkSpan}>Accueil</span>
                            </Link>
                        </li>
                        <li style={styles.menuItem}>
                            <Link style={styles.menuLink} href="/blog">
                                <FaNewspaper style={{fontSize: '1.2rem'}}/>
                                <span style={styles.menuLinkSpan}>Blog</span>
                            </Link>
                        </li>
                        <li style={styles.menuItem}>
                            <Link style={styles.menuLink} href="/projets">
                                <FaListCheck style={{fontSize: '1.2rem'}}/>
                                <span style={styles.menuLinkSpan}>Projets</span>
                            </Link>
                        </li>
                        <li style={styles.menuItem}>
                            <Link style={styles.menuLink} href="/contact">
                                <FaComment style={{fontSize: '1.2rem'}}/>
                                <span style={styles.menuLinkSpan}>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
}

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: '60px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px',
        borderRadius: '0.5rem',
    },
    menu: {
        maxWidth: '75rem',
        width: '100%',
        listStyle: 'none',
        gap: '0.2rem',
        padding: 0,
        display: 'flex',
    },
    menuItem: {
        width: '100%',
        minWidth: 0,
        padding: '0 5px',
    },
    menuLink: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.2rem',
        fontSize: '0.8rem',
        color: '#000'
    },
    menuLinkSpan: {
        maxWidth: '100%',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    logo: {
        maxWidth: '350px',
        maxHeight: '100%',
        marginLeft: '10px',
    },
    menuButton: {
        marginRight: '10px',
        marginLeft: 'auto',
        padding: '10px',
        fontSize: '1.5em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '15px',
        fontFamily: "Expansiva Regular",
        color: '#fff',
        backgroundColor: 'transparent',
        border: 'none',

    },
    menuBarContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'flex-end',
        gap: '5px',
    },
    menuBar: {
        width: '30px',
        height: '3px',
        backgroundColor: '#fff',
        borderRadius: ' 10px 0 0 10px'
    },
    middleBar: {
        width: '40px',
    },
};

export default Menu;
