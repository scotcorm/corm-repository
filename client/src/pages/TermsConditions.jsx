import React from 'react';

export default function TermsConditions() {
  return (
    <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold lg:text-6xl'>Terms and Conditions:</h1>

      <div className='text-md text-gray-500 flex flex-col gap-6 min-h-screen'>
        <p>
          This site is intended as a portfolio/test project only. Any usage of
          this site is completely voluntary, and no guarantees are made about
          any information or data submitted by the site, to the site or via the
          site to associated databases. Once testing is over I may take the site
          down or move it somewhere else.
        </p>
        <p>
          Rules for Cited Images are determined by their origin sites-
          information and/or links to those sites are provided for each
          citation- and users are strongly recommended to visit the original
          sites for the most current information on citation rules and the best
          versions of images available. Most of what I use are CC0 licenses, and
          unlikely to change, but change is always possible.
        </p>

        <p>
          That said, I do my best to provide trustworthy links and materials, so
          if you find anything useful in the information provided, that's great!
        </p>
      </div>
    </div>
  );
}
