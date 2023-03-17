import Script from 'next/script';
import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';

export default function Footer() {


  useEffect(() => {
      window.algoliasearchNetlify({
        appId: 'HSPVQEW1FM',
        apiKey: '1e6495a9155bc2d3a7002f037b29b89c',
        siteId: 'c0ac1c6f-aed7-451e-9eb8-02f613b848fb',
        branch: 'main',
        selector: 'div#search',
      });
    })

  return (
    <>
     

      <footer>
        <section className="testimonial">
          <h2>
            “We look for world-class suppliers to support the successful delivery of the Wimbledon championships. Life Fitness was able to provide us with quality fitness equipment and a seamless solution, and the support we've received has been fantastic"
          </h2>
          <p>Andrew Ambrose, GM - All England Lawn Tennis Club</p>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          
          <div id="search">
            Search for a Product

          </div>

        </section>
        <div className="project-credit">
          <p>
            This project is <a href="https://github.com/bridgpal/shopify-next-netlify">open source on GitHub</a>
            , hosted with <a href="https://www.netlify.com/">Netlify</a>, built
            with Next.js and made with 💚 by Anil Bridgpal (
            <a href="https://twitter.com/bridgpal">@bridgpal</a>)
          </p>
        </div>

      </footer> 
    </>
  );
}
