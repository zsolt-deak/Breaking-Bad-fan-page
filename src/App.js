import "antd/dist/antd.css";
import CharactersPage from "./components/CharactersPage";
import QuotesPage from "./components/QuotesPage";
import EpisodesPage from "./components/EpisodesPage";
import AboutPage from "./components/AboutPage";
import CharacterPage from "./components/CharacterPage";
import { Route, Routes, Navigate } from "react-router";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Switch } from "antd";
import { useState, useEffect } from "react";
import { Button, Tooltip } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';



function App() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const r = document.querySelector(":root");
        const rs = getComputedStyle(r);
        const darkModeBgColor = rs.getPropertyValue("--darkMode-bg-color");
        const darkModeTextColor = rs.getPropertyValue("--darkMode-text-color");
        const lightModeBgColor = rs.getPropertyValue("--lightMode-bg-color");
        const lightModeTextColor = rs.getPropertyValue(
            "--lightMode-text-color"
        );
        if (darkMode === true) {
            r.style.setProperty("--bg-color", darkModeBgColor);
            r.style.setProperty("--text-color", darkModeTextColor);
        } else {
            r.style.setProperty("--bg-color", lightModeBgColor);
            r.style.setProperty("--text-color", lightModeTextColor);
        }
    }, [darkMode]);
    const handleSwitchDarkMode = function (isChecked) {
        setDarkMode(isChecked);

    };

    const scrollToTop = function () {
        var timerHandle = setInterval(function () {
            if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0)
                window.scrollBy(0, -80); else clearInterval(timerHandle);
        }, 10);
    };

    return (
        <div className="App">
            <Router>
                <header>
                    <ul>
                        <li>
                            <NavLink
                                to="/characters"
                                exact="true"
                                className={({ isActive }) =>
                                    isActive ? "navActive" : undefined
                                }
                            >
                                CHARACTERS
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/quotes"
                                exact="true"
                                className={({ isActive }) =>
                                    isActive ? "navActive" : undefined
                                }
                            >
                                QUOTES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/episodes"
                                exact="true"
                                className={({ isActive }) =>
                                    isActive ? "navActive" : undefined
                                }
                            >
                                EPISODES
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                exact="true"
                                className={({ isActive }) =>
                                    isActive ? "navActive" : undefined
                                }
                            >
                                ABOUT
                            </NavLink>
                        </li>
                    </ul>

                    <div id="DarkModeWidget">
                        <Switch
                            defaultChecked={darkMode}
                            onChange={handleSwitchDarkMode}
                        ></Switch>
                        <label>Dark mode</label>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<Navigate to="/characters" replace />} />
                    <Route path="/characters" element={<CharactersPage />} />
                    <Route path="/quotes" element={<QuotesPage />} />
                    <Route path="/episodes" element={<EpisodesPage />} />
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route
                        path="/characters/:id"
                        element={<CharacterPage />}
                    ></Route>
                </Routes>
                <footer>&#169;Copyright 2022 SDA Team</footer>
            </Router>
            <Tooltip title="Go to top">
                <Button shape="circle" icon={<ArrowUpOutlined style={{ fontSize: '30px' }} />} size="large" onClick={scrollToTop} />
            </Tooltip>
        </div>
    );
}
export default App;
