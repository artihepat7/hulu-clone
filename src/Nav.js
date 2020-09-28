import React from "react";
import "./Nav.css";
import requests from "./requests";
import { NavLink } from "react-router-dom";

function Nav({ setFetcheNav }) {
  return (
    <div className="nav">
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchTrending);
        }}
      >
        Trending
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchTopRated);
        }}
      >
        Top Rated
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchActionMovies);
        }}
      >
        Action
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchComedyMovies);
        }}
      >
        Comedy
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchHorrorMovies);
        }}
      >
        Horror
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchRomanceMovies);
        }}
      >
        Romance
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchMystery);
        }}
      >
        Mystery
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchSciFi);
        }}
      >
        sci-fi
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchWestern);
        }}
      >
        Western
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchAnimation);
        }}
      >
        Animation
      </NavLink>
      <NavLink
        className="navlink"
        to="/"
        onClick={() => {
          setFetcheNav(requests.fetchTV);
        }}
      >
        Movie
      </NavLink>
    </div>
  );
}

export default Nav;
