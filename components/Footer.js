import * as prismicH from "@prismicio/helpers";
import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";

export const Footer = ({ footer, settings }) => {
  return (
    <footer className="shadow-inner shadow-gray-700 relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            {prismicH.isFilled.richText(footer.data.leftContent) && (
              <div>
                <PrismicRichText field={footer.data.leftContent} />
              </div>
            )}
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <ul className="list-unstyled">
                  {footer.data?.links.map((item) => (
                    <li
                      key={prismicH.asText(item.label)}
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      <PrismicLink field={item.link}>
                        <PrismicText field={item.label} />
                      </PrismicLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <ul className="list-unstyled">
                  {footer.data?.otherlinks.map((item) => (
                    <li
                      key={prismicH.asText(item.label)}
                      className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    >
                      <PrismicLink field={item.link}>
                        <PrismicText field={item.label} />
                      </PrismicLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
            {prismicH.isFilled.richText(footer.data.copyright) && (
                <p>
                  <PrismicText field={footer.data.copyright} />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
  </footer>
  );
};
