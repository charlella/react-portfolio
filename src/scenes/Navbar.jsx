import { useState } from "react";
// To navigate to certains page of the page
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  // We lowercase the titles of Navbar
  const lowerCasePage = page.toLowerCase();
  return (
    // Rappel : by default selectedPage is "home" (App.js)
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      // Link towards the page
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
        {/* The second example uses quotes to define the className attribute value
      as a static string that is not interpolated from a JavaScript expression.
      The mx-auto and w-5/6 classes are fixed and will always be applied to the
      div element. In short, curly braces are used to interpolate a JavaScript
      expression within the className attribute value, while quotes are used to
      define a static string value. NOTE : curly braces would have worked as
      well !  */}
        <div className="flex items-start justify-between mx-auto w-5/6">
          <h4 className="font-playfair text-3xl font-bold">MA</h4>

          {/* { DESKTOP NAV} */}
          {isAboveSmallScreens ? (
            <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectePage={setSelectedPage}
              />
              <Link
                page="Compétences"
                selectedPage={selectedPage}
                setSelectePage={setSelectedPage}
              />
              <Link
                page="Projets"
                selectedPage={selectedPage}
                setSelectePage={setSelectedPage}
              />
              <Link
                page="Témoignages"
                selectedPage={selectedPage}
                setSelectePage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectePage={setSelectedPage}
              />
            </div>
          ) : (
            <button
              className="rounded-full bg-red p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <img alt="menu-icon" src="../assets/menu-icon.svg" />
            </button>
          )}

          {/* MOBILE MENU POPUP */}
          {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-blue w-[50%]">
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img alt="close-icon" src="../assets/close-icon.svg" />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 ml-[10%] text-2xl text-deep-blue">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectePage={setSelectedPage}
                />
                <Link
                  page="Compétences"
                  selectedPage={selectedPage}
                  setSelectePage={setSelectedPage}
                />
                <Link
                  page="Projets"
                  selectedPage={selectedPage}
                  setSelectePage={setSelectedPage}
                />
                <Link
                  page="Témoignages"
                  selectedPage={selectedPage}
                  setSelectePage={setSelectedPage}
                />
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectePage={setSelectedPage}
                />
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;
