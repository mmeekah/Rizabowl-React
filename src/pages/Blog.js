import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import { ProductContext } from "../context";
import blogDate from "../blog-data";
import SingleBlog from "../components/SingleBlog";
import "../blog.css";

const Blog = () => {
  return (
    <>
      <Hero hero="blogHero">
        <Banner title="Blog">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <section className="featured-rooms" />
      <Title title="What We Do" />
      <div className="blogs">
        {blogDate.map(blog => (
          <SingleBlog blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blog;
