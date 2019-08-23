import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route, Link } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/

const panes = [
    {
        menuItem: {
            as: NavLink,
            content: "Home Page",
            to: "/",
            exact: true,
            key: "home",
            icon: "home"
        },
        render: () => (
            <Route path="/" exact>
                <Tab.Pane>
                    <WelcomePage />
                </Tab.Pane>
            </Route>
        )
    },
    {
        menuItem: {
            as: NavLink,
            content: "Characters",
            to: "/characters",
            key: "characters",
            icon: "user"
        },
        render: () => (
            <Route path="/characters">
                <Tab.Pane>
                    <CharacterList />
                </Tab.Pane>
            </Route>
        )
    },
    {
        menuItem: {
            as: NavLink,
            content: "Locations",
            to: "/locations",
            key: "locations",
            icon: "rocket"
        },
        render: () => (
            <Route path="/locations">
                <Tab.Pane>
                    <LocationsList />
                </Tab.Pane>
            </Route>
        )
    },
    {
        menuItem: {
            as: NavLink,
            content: "Episodes",
            to: "/episodes",
            key: "episodes",
            icon: "tv"
        },
        render: () => (
            <Route path="/episodes">
                <Tab.Pane>
                    <EpisodesList />
                </Tab.Pane>
            </Route>
        )
    }
]

export default function TabNav() {
    return (
    <Tab panes={panes} />
    );
};

