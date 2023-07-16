// import {useEffect, useState} from "react";
// import  styles from'./sidebar.module.css'
// import 'boxicons'
// import classNames from 'classnames';
// import {Link} from "react-router-dom";
//
//
//
// const Sidebar = () => {
//     const useMediaQuery = (query) => {
//         const [matches, setMatches] = useState(false);
//
//         useEffect(() => {
//             const media = window.matchMedia(query);
//             if (media.matches !== matches) {
//                 setMatches(media.matches);
//             }
//             const listener = () => setMatches(media.matches);
//             window.addEventListener("resize", listener);
//             return () => window.removeEventListener("resize", listener);
//         }, [matches, query]);
//
//         return matches;
//     };
//     let menuItems = [
//         {
//             name: "MENU",
//             iconName: "menu",
//         },
//         {
//             name: "PL",
//             iconName: "football",
//             type: "solid",
//             path:"/mainPL"
//         },
//         {
//             name: "LALIGA",
//             iconName: "football",
//             type: "solid",
//             path:"/mainLL"
//
//         },
//         {
//             name: "KLEAGUE",
//             iconName: "football",
//             type: "solid",
//             path:"/mainKL"
//
//         }
// ,
//         {
//             name: "Log Out",
//             iconName: "log-out",
//             color: "red",
//             rotate: "180",
//         },
//     ];
//     const [hovered, setHovered] = useState(null);
//     const [active, setActive] = useState(1);
//     const [animate, setAnimate] = useState(false);
//     const [expanded, setExpanded] = useState(false);
//     const changeSmall = useMediaQuery("(max-height: 550px)");
//     // const boxiconClasses = classNames(styles['boxicon-container'], {
//     //     ['expanded-boxicon-container']: expanded,
//     // });
//     const boxiconClasses = classNames(styles['boxicon-container'], {
//         ['expanded-boxicon-container']: expanded,
//         ['false']: !expanded,
//     });
//
//     let delay = 1;
//     useEffect(() => {
//         setAnimate(true);
//         let timer = setTimeout(() => setAnimate(false), delay * 1000);
//
//         return () => {
//             clearTimeout(timer);
//         };
//     }, [active, delay]);
//
//     return (
//         <div className={`${styles.sidebar} ${expanded && styles.expanded}`}>
//             {menuItems.map((item, index) => {
//                 let middle = false;
//                 if (!(index === 0 || index === menuItems.length - 1)) {
//                     middle = true;
//                 }
//                 return (
//                     <div
//                         // className={`${styles['boxicon-container']} ${
//                         //     expanded ? styles['expanded-boxicon-container'] : ''
//                         // }`}
//                     className={boxiconClasses}
//
//                     onMouseEnter={() => {
//                             if (middle) {
//                                 setHovered(index);
//                             }
//                         }}
//                         onMouseLeave={() => {
//                             if (middle) {
//                                 setHovered(null);
//                             }
//                         }}
//                         onClick={() => {
//                             if (middle) {
//                                 setActive(index);
//                                 console.log('setActive',index,active)
//                             }
//                             if (index === 0) {
//                                 setExpanded(!expanded);
//                             }
//                         }}
//                         key={index}
//                     >
//
//
//                         <Link to={item.path}>
//                             <box-icon
//                                 className={`${middle && "boxicon"}
//             ${!middle && "first-and-last-trash-fix"}
//             ${active === index && styles.active}`}
//                                 size={changeSmall ? "sm" : "md"}
//                                 name={item.iconName}
//                                 type={item.type}
//                                 color={hovered === index || active === index ? "white" : item.color}
//                                 animation={active === index && animate ? "tada" : ""}
//                                 rotate={item.rotate}
//                             />
//
//
//
//
//
//                             <p
//                             className={`${styles.description}
//   ${expanded && styles["show-description"]}
//   ${active === index && styles["active-description"]}`}
//                         >
//                             {item.name}
//                         </p>
//                         </Link>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };
//
//
//
// export default Sidebar

import styled from 'styled-components'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Container = styled.div`
  position: fixed;
  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? '1.5' : '1rem')};
    transform: ${(props) => (props.clicked ? 'rotate(135deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.clicked ? '1.2' : '1.5rem')};
    transform: ${(props) => (props.clicked ? 'rotate(-135deg)' : 'rotate(0)')};
  }
`

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

const Logo = styled.div`
  width: 2rem;
  color:var(--white);
  svg {
    width: 100%;
    height: auto;
  }
`

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);
  padding: 2rem 0;
  position: absolute;
  top: 6rem;
  left: 0;
  width: ${(props) => (props.clicked ? '12rem' : '3.5rem')};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`

const Item = styled(Link)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    svg {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  svg {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
  img{
    width: 24px;
    height: 24px;
  }
`

const Text = styled.span`
  width: ${(props) => (props.clicked ? '100%' : '0')};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? '1.5rem' : '0')};
  transition: all 0.3s ease;
`

const Profile = styled.div`
  width: ${(props) => (props.clicked ? '14rem' : '3rem')};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? '9rem' : '0')};
  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`

const Details = styled.div`
  display: ${(props) => (props.clicked ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
`

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  svg {
    width: 100%;
    height: auto;
    filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
      brightness(100%) contrast(126%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`

const Sidebar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const apiUrl = process.env.REACT_APP_API_URL
    const [profileClick, setprofileClick] = useState(false)
    const handleProfileClick = () => setprofileClick(!profileClick)

    return (
        <Container>
            <Button clicked={click} onClick={() => handleClick()}>
                <BiMenu/>
            </Button>
            <SidebarContainer>
                {/* <Logo> */}
                {/*    <h2>CB</h2> */}
                {/* </Logo> */}
                <SlickBar clicked={click}>
                    <Item
                        onClick={() => setClick(false)}
                        exact
                        activeClassName="active"
                        to="/mainPL"
                    >
                        <img src={`${apiUrl}/etc?filename=soccer`} alt=""/>

                        <Text clicked={click}>Premier</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/mainLL"
                    >
                        <img src={`${apiUrl}/etc?filename=soccer`} alt=""/>

                        <Text clicked={click}>Laliga</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/mainKL"
                    >
                        {/* <svg viewBox="0 0 640 512" width="100" title="user-clock"> */}
                        {/*    <path d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z" /> */}
                        {/* </svg> */}
                        <img src={`${apiUrl}/etc?filename=soccer`} alt=""/>
                        <Text clicked={click}>KLeague</Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/"
                    >
                        <img src={`${apiUrl}/etc?filename=soccer`} alt=""/>

                        <Text clicked={click}></Text>
                    </Item>
                    <Item
                        onClick={() => setClick(false)}
                        activeClassName="active"
                        to="/"
                    >
                        <img src={`${apiUrl}/etc?filename=soccer`} alt=""/>

                        <Text clicked={click}></Text>
                    </Item>
                </SlickBar>

                <Profile clicked={profileClick}>
                    <img
                        onClick={() => handleProfileClick()}
                        src="https://picsum.photos/200"
                        alt="Profile"
                    />
                    <Details clicked={profileClick}>
                        <Name>
                            <h4>Jhon&nbsp;Doe</h4>
                            <a href="/#">view&nbsp;profile</a>
                        </Name>

                        <Logout>
                            <svg viewBox="0 0 512 512" width="100" title="power-off">
                                <path d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z" />
                            </svg>
                        </Logout>
                    </Details>
                </Profile>
            </SidebarContainer>
        </Container>
    )
}

export default Sidebar
